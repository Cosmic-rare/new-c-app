const app = require("express")()
const http = require("http").Server(app)
const cors = require("cors")
const mongoose = require("mongoose")
const uuid = require("uuidjs")
const Post = require("./models/post")
const io = require("socket.io")(http, {
  cors: {
    origin: "*"
  }
})
app.use(cors())
app.use(require("express").json())

app.use("/login", require("./routes/login"))

mongoose.connect("mongodb://localhost/c-app")
const db = mongoose.connection
db.on("error", (e) => console.log(e))
db.once("open", () => console.log("Conecting DB"))

const savePost = async (name, message, roomId) => {
  const splitedName = name.split("$")
  const post = new Post({
    id: await Post.count(),
    name: splitedName[0],
    trip: splitedName[1] ? crypto.createHash('md5').update(splitedName[1]).digest('hex').slice(0, 7) : "",
    message: message,
    createdAt: Date.now(),
    roomId: roomId
  })

  const savedPost = await post.save()
  return savedPost
}

const rooms = io.of(/^\/.*$/)
rooms.on("connection", async (socket) => {
  const room = socket.nsp
  const roomId = room.name.slice(1)

  room.emit("return", await Post.find({ roomId: roomId }).sort({ createdAt: -1 }).limit(100))

  socket.on("send", async (message) => {
    await savePost("谷", message, roomId)
    room.emit("return", await Post.find({ roomId: roomId }).sort({ createdAt: -1 }).limit(100))
  })

})

http.listen(4000, () => {
  console.log("Listening server")
})