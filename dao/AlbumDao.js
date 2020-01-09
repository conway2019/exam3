const mongoose = require("mongoose")

let albumModel = mongoose.model("albums")

function addAlbum(Album, callback) {
    albumModel.create(Album, function (err, newAlbum) {
        if (!err) callback(newAlbum.toObject())
    })
}

function findAllAlbums(callback) {
    albumModel.find({}).exec(function (err, albums) {
        if (!err) callback(albums)
    })
}

function deleteAlbum(id, callback) {
    albumModel.findByIdAndRemove(id, function (err) {
        if (!err) callback({})
    })
}

module.exports = {addAlbum, findAllAlbums, deleteAlbum}