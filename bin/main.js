const mongo = "mongodb://106.54.230.45:27017/exam"
const mongoose = require("mongoose")
const http = require("http")

require('../model')
const app = require("../app")


let server = http.createServer(app)

mongoose.connect(mongo, function (err) {
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