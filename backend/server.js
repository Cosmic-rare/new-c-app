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

app.get("/", (req, res) => {

res.send("klhdfs")
})

mongoose.connect("mongodb://localhost/c-app")
const db = mongoose.connection
db.on("error", (e) => console.log(e))
db.once("open", () => console.log("Conecting DB"))

// const rooms = io.of(/^\/d*$/)
const rooms = io.of(/^\/.*$/)
rooms.on("connection", (socket) => {
  const room = socket.nsp

  console.log(room.name)
  socket.emit("returnMessage",
    { "_id": "61d6cfa6ec717945ee4f4076", "id": 19, "name": "tani", "trip": "092e376", "deleted": false, "edited": false, "createdAt": 1641467814815, "editedMessage": [], "message": "うーん", "__v": 0 }
  )

  setTimeout(() => {
    socket.emit("returnMessage",
      { "_id": "61d6cfa6ec717945ee4f4076", "id": 20, "name": "tani", "trip": "092e376", "deleted": false, "edited": false, "createdAt": 1641467814815, "editedMessage": [], "message": "うーん????", "__v": 0 }
    )
  }, 1000)

})

http.listen(4000, () => {
  console.log("Listening server")
})