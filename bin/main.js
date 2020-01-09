const mongo = "39.101.130.31"
const mongoose = require("mongoose")
const http = require("http")

require('../model')
const app = require("../app")


let server = http.createServer(app)

mongoose.connect("mongodb://39.101.130.31:27017/exam", function (err) {
    console.log("mongo建立连接")
    if (!err) {
        server.listen(3000, function (err) {
            if (!err) console.log("监听3000端口")
        })
    }
})

server.on('close', function () {
    mongoose.disconnect()
    console.log("服务关闭,mongo释放连接")
})