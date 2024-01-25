import {config} from "dotenv"
config()

import path from "path"
import { fileURLToPath } from 'url';
import {dirname} from "path"
import express from "express"
import axios from "axios"
import cors from "cors"
import fileUpload from "express-fileupload"
import connectDb from "./config/database.js"
import Songs from "./models/songsModel.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

let origin;

if (process.env.NODE_ENV == "production") {
    origin = "https://full-stalk-music-application-frontend.onrender.com"
} else {
    origin = "http://localhost:3000"
}

console.log(process.env.NODE_ENV);

let corsOptions = {
    origin: origin
}


app.use(cors(corsOptions))
app.use(fileUpload())
app.use(express.json())

// Serve static files from the 'build' directory
app.use(express.static(path.join('../frontend', 'build')));

// Handle all other requests by serving 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join('../frontend', 'build', 'index.html'));
});

console.log(__dirname);


app.get("/", (req, res) => {
    res.json({msg: "Homepage running"})
})

app.post("/upload", async (req, res) => {
    const {title, artist, category} = req.body;
    const {song, cover} = req.files;

    song.mv(path.join("../frontend/public", "uploads/songs", song.name), (error) => {
        if (error) {
            console.log("Something went wrong to upload the song");
        }
        console.log("The song was upload successfully");
    })

    cover.mv(path.join("../frontend/public", "uploads/covers", cover.name), (error) => {
        if (error) {
            console.log("Something went wrong to upload the song");
        }
        console.log("The cover was upload successfully");
    })

    const createSong = await Songs.create({...req.body, songPath: path.join("../frontend/public", "uploads/songs", song.name), coverPath: path.join("../frontend/public", "uploads/covers", cover.name)}); 

    if (createSong) {
        return res.status(200).json({msg: "song uploaded successfully", success: true})
    }
})

app.get("/getSpotifyAccessToken", async (req, res) => {
    console.log(123);
    const response = await axios.post(process.env.SPOTIFY_TOKEN_URL, null, {
        params: {
            grant_type: "client_credentials",
            client_id: process.env.SPOTIFY_CLIENT_ID,
            client_secret: process.env.SPOTIFY_CLIENT_SECRET
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })

    console.log('Access Token:', response.data.access_token);

    return res.status(200).json({...response.data})
})


const runServer = async () => {
    try {
        await connectDb()
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
        console.log("Connected to Mongo database...")
    } catch (error) {
        console.log("Something went wrong...")
    }
}

runServer()