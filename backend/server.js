import {config} from "dotenv"
config()

import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import connectDb from "./config/database.js"

const app = express()

app.use(fileUpload())
app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())




app.get("/", (req, res) => {
    res.json({msg: "Homepage running"})
})

app.post("/upload", (req, res) => {
    console.log(req.files)
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