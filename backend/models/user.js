const mongoose = require("mongoose")

const userSchema =  mongoose.Schema({
  // tripとnameをごにょごにょしたUserId
  id: {
    type: String
  },

  // ハッシュ済みのtrip
  hashedTrip: {
    type: String
  },

  // 名前
  name: {
    type: String
  },

  // 作成日時
  createdAt: {
    type: Number
  }
})

module.exports = mongoose.model("User", userSchema)