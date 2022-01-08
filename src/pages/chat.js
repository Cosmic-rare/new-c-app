import Post from "../components/Post"
import TextareaAutosize from "react-textarea-autosize"
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import io from "socket.io-client"
import { useParams } from "react-router-dom"


const Chat = () => {
  let params = useParams()
  
  useEffect(() => {
    const socket = io(`localhost:4000/${params.roomId}`)
    socket.on("returnMessage", (data) => {
      console.log(data)
    })
  }, [])

  const [datas, setDatas] = useState([])

  if (datas) {
    return (
      <div className="container col-12 col-md-9 col-xl-7" style={{ textAlign: "center" }}>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div className="container col-12 col-md-9 col-xl-7">
        <TextareaAutosize className="form-control" />
        <hr />
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            Send Message!
          </Button>
        </div>
        <hr />
        {datas.map((value) => {
          return (
            <Post data={value} style={{ paddingBottom: 20 }} />
          )
        })}
      </div>
    )
  }
}

export default Chat