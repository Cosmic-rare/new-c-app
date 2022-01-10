const mongoose = require("mongoose")

const tokenSchema =  mongoose.Schema({
  // 対象のUser
  userId: {
    type: String
  },

  // 有効期限
  effective: {
    type: Number
  },

  // TOKEN
  token: {
    type: String
  }
})

module.exports = mongoose.model("Token", tokenSchema)