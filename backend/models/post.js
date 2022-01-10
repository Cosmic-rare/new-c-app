const mongoose = require("mongoose")

const postSchema =  mongoose.Schema({
  // 安価に使うための POST ID
  id: {
    type: Number,
    required: true
  },

  // 投稿者の名前
  name: {
    type: String,
    required: true
  },

  // "$"　をつけて本人を証明するやつ
  trip: {
    type: String,
    required: false
  },

  // 削除済み
  deleted: {
    type: Boolean,
    required: true,
    default: false
  },

  // 編集済み
  edited: {
    type: Boolean,
    required: true,
    default: false
  },

  // 作成日
  createdAt: {
    type: Number,
    required: true
  },

  // 過去の編集内容
  editedMessage: {
    type: Array,
    required: true,
    default: []
  },

  // 投稿内容
  message: {
    type: String,
    required: true
  },

  // チャンネルのID
  roomId: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Post", postSchema)