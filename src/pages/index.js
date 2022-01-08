import { ListGroup } from "react-bootstrap"
import Rooms from "../components/rooms"

const Index = () => {

  return (
    <div style={{
      padding: 15,
      paddingTop: 35,
      width: "100%",
      maxWidth: 600,
      margin: "auto"
    }}>

      <ListGroup>
        <Rooms roomId={1} roomName={"Main"} postTime={"2022/01/08(土) 12:32"}/>
        <Rooms roomId={2} roomName={"Sub"} postTime={"2022/01/08(土) 13:12"}/>
      </ListGroup>

    </div >
  )
}

export default Index