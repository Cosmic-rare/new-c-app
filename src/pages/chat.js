import Post from "../components/Post"
import TextareaAutosize from "react-textarea-autosize"
import { Button, Alert } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import { useParams } from "react-router-dom"
import { useAuthContext } from "../context/authContext"


const Chat = () => {
  const [datas, setDatas] = useState(null)
  const [message, setMessage] = useState("")
  const [sendNow, setSendNow] = useState(false)
  const { token } = useAuthContext()

  let params = useParams()
  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = io(`localhost:4000/${params.roomId}`, {
      query: {
        token: token
      }
    })
    // socketRef.current = io(`new-c-app.herokuapp.com/${params.roomId}`)
    socketRef.current.on("return", (messages) => {
      console.log(messages)
      setDatas(messages)
      setSendNow(false)
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const sendMessage = () => {
    setSendNow(true)
    if (message.length > 100) {
      alert("文字数が多すぎます")
    } else if (message == "") {
      console.log("から文字")
    } else {
      socketRef.current.emit("send", message)
      setMessage("")
    }
  }


  if (datas == null) {
    return (
      <div className="container col-12 col-md-9 col-xl-7" style={{ textAlign: "center" }}>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div className="container col-12 col-md-9 col-xl-7">
        <TextareaAutosize
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              if (e.shiftKey) {
                console.log("ShiftEnter")
              } else {
                sendMessage()
                e.preventDefault()
                setMessage("")
              }
            }
          }}
        />
        <hr />
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm" onClick={() => sendMessage()}>
            Send Message!
          </Button>
        </div>
        <hr />

        <Alert variant="info" show={sendNow} style={{ padding: 0, border: "None" }}>
          <p style={{ textAlign: "center" }}>投稿中</p>
        </Alert>

        {datas.map((value) => {
          return (
            <Post data={value} style={{ paddingBottom: 20 }} key={value.id} />
          )
        })
        }
      </div>
    )
  }
}

export default Chat