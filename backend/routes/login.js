const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const uuid = require("uuidjs")
const User = require('../models/user')
const Token = require('../models/token')

const PASS = "うわ、二重人格の人だ…。今日はこっちの人格なんだ…"

const getUserId = (name, hashedTrip) => {
  // JSONにしてテキストにしてBase64
  const data = JSON.stringify({
    name: name,
    hashedTrip: hashedTrip
  })
  return btoa(unescape(encodeURIComponent(data)))
}

const saveUser = async (hashedTrip, name) => {
  // 保存する
  const user = new User({
    id: getUserId(name, hashedTrip),
    hashedTrip: hashedTrip,
    name: name,
    createdAt: Date.now()
  })
  const savedUser = await user.save()

  return savedUser
}

const saveToken = async (hashedTrip, name) => {
  const newToken = uuid.generate()
  const token = new Token({
    userId: getUserId(name, hashedTrip),
    effective: Date.now() + 604800000,
    token: newToken
  })
  await token.save()

  return token
}

const existenceUser = async (name, hashedTrip) => {
  const id = getUserId(name, hashedTrip)
  const user = await User.findOne({ id: id }).exec()

  if (user) {
    return true
  } else {
    return false
  }
}

const logoutToken = async (token) => {
  const dbToken = await Token.findOneAndRemove({ token: token }).exec()

  if (dbToken) {
    return true
  } else {
    return false
  }
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

router.post("/", async (req, res) => {
  const name = req.body.name
  const trip = req.body.trip

  if (req.body.password === PASS && name && trip) {


    const hashedTrip = crypto.createHash('md5').update(trip).digest('hex')

    if (!await existenceUser(name, hashedTrip)) {

      await saveUser(hashedTrip, name)

    }

    const token = await saveToken(hashedTrip, name)
    res.json({
      token: token
    })

  } else {
    res.status(403).json({ message: "wrong parmas" })
  }

})


router.post("/auth", async (req, res) => {
  const verify = await verifyToken(req.body.token)
  if(verify) {
    res.status(200).json({ ok: true })
  } else {
    res.status(400).json({ ok: false })
  }
})


router.post("/logout", async (req, res) => {
  const token = await logoutToken(req.body.token)

  if (token) {
    res.status(200).json({ ok: true })
  } else [
    res.status(500).json({ ok: false })
  ]
})

module.exports = router