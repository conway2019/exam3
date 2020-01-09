const mongoose = require("mongoose")

let AlbumSchema = mongoose.Schema({
    album_id: String,
    album_name: String,
    public_time: String,
    week: Number,
    price: Number,
    cover: String,
    singers: {
        singer_id: String,
        singer_name: String
    }
})

mongoose.model("albums", AlbumSchema)