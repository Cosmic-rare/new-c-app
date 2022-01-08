const app = require("express")()
const http = require("http").Server(app)
const cors = require("cors")
const mongoose = require("mongoose")
const Post = require("./model")
const io = require("socket.io")(http, {
  cors: {
    origin: "*"
  }
})
app.use(cors())
app.use(require("express").json())

let messages = []

mongoose.connect("mongodb://localhost/c-app")
const db = mongoose.connection
db.on("error", (e) => console.log(e))
db.once("open", () => console.log("Conecting DB"))

const savePost = async (name, message) => {
  const splitedName = name.split("$")
  const post = new Post({
    id: await Post.count(),
    name: splitedName[0],
    trip: splitedName[1] ? crypto.createHash('md5').update(splitedName[1]).digest('hex').slice(0, 7) : "",
    message: message,
    createdAt: Date.now()
  })

  const savedPost = await post.save()
  return savedPost
}

const rooms = io.of(/^\/.*$/)
rooms.on("connection", async (socket) => {
  const room = socket.nsp
  room.emit("return", await Post.find().limit(100).sort({ createdAt: -1 }))

  socket.on("send", async (message) => {
    await savePost("谷", message)
    room.emit("return", await Post.find().limit(100).sort({ createdAt: -1 }))
  })

})

http.listen(4000, () => {
  console.log("Listening server")
})