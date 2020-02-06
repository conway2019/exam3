const mongoose = require("mongoose")
require("../model")
let albumkDao = require("../dao/AlbumDao")
const assert = require("assert")

describe("测试albumDAO", function () {
    before(function () {
        mongoose.connect("mongodb://106.54.230.45:27017/exam", function (err) {
            if (!err) console.log("连接到mongodb")
        })
    })

    after(function () {
        mongoose.disconnect()
        console.log("断开mongodb连接")
    })

    it("测试addAlbum", function (done) {
        let album = {
            "album_id": "3751508",
            "album_name": "A.I. 爱",
            "public_time": "2017-12-11",
            "week": 50,
            "price": 89,
            "cover": "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
            "singers": [{"singer_id": "265", "singer_name": "王力宏"}]
        }
        albumkDao.addAlbum(album, function (newAlbum) {
            assert.ok(newAlbum._id != null)
            done()
        })
    })

    it("测试findAllAlbums", function (done) {
        albumkDao.findAllAlbums(function (albums) {
            assert.ok(albums.length > 0)
            albums.forEach(album => console.log(album._id))
            done()
        })
    })

    it("测试deleteAlbum", function (done) {
        albumkDao.deleteAlbum("5e1681dc1a6df01c40b9cc1b", function () {
            console.log({})
            done()
        })

    })
})
