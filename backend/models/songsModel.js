import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    artist: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    songPath: {
        type: String,
        require: true
    },
    coverPath: {
        type: String,
        require: true
    }
}, {timestamps: true})

const songs = mongoose.model("Songs", songsSchema);

export default songs