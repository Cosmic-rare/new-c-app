const app = require("express")()
const http = require("http").Server(app)
const cors = require("cors")
const Token = require("./models/token")
const mongoose = require("mongoose")
const Post = require("./models/post")
const User = require("./models/user")
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

const getUser = async (token) => {
  const userId = await Token.findOne({ token: token }).exec()
  const user = await User.findOne({ id: userId.userId }).exec()
  return user
}

const savePost = async (message, roomId, token) => {
  const user = await getUser(token)
  const post = new Post({
    id: await Post.count(),
    name: user.name,
    trip: user.hashedTrip,
    message: message,
    createdAt: Date.now(),
    roomId: roomId
  })

  const savedPost = await post.save()
  return savedPost
}

const verifyToken = async (token) => {
  const dbToken = await Token.findOne({ token: token }).exec()

  if (dbToken) {
    if (dbToken.effective < Date.now()) {
      await logoutToken(token)
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

const rooms = io.of(/^\/.*$/)

rooms.use(async (socket, next) => {
  let token = socket.handshake.query.token

  if (await verifyToken(token)) {
    return next()
  }
  return next(new Error("authentication error"))
});

rooms.on("connection", async (socket) => {
  const room = socket.nsp
  const roomId = room.name.slice(1)

  room.emit("return", await Post.find({ roomId: roomId }).sort({ createdAt: -1 }).limit(100))

  socket.on("send", async (message) => {
    await savePost(message, roomId, socket.handshake.query.token)
    room.emit("return", await Post.find({ roomId: roomId }).sort({ createdAt: -1 }).limit(100))
  })

})

http.listen(4000, () => {
  console.log("Listening server")
})