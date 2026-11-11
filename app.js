const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const appName = "Welcome to SoundWave";
const tagline = "Your Music, Your Vibe";

const songs = [
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Pop"
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Pop"
    },
    {
        title: "Faded",
        artist: "Alan Walker",
        genre: "Electronic"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        genre: "Pop"
    }
];

app.get("/", (req, res) => {
    res.render("index", {
        appName: appName,
        tagline: tagline
    });
});

app.get("/songs", (req, res) => {
    res.render("songs", {
        appName: appName,
        tagline: tagline,
        songs: songs
    });
});

app.listen(3000, () => {
    console.log("SoundWave server running on http://localhost:3000");
});