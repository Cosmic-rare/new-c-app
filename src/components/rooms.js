import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

const Rooms = (props) => {
  const {
    roomId,
    roomName,
    postTime
  } = props
  
  return (
    <div>
      <ListGroup.Item variant="primary">
        <Link to={`/channels/${roomId}`} className="btn btn-secondary btn-sm">
          {roomName}
        </Link>
        <p style={{ marginBottom: 0 }}>
          最終更新日 : {postTime}
        </p>
      </ListGroup.Item>
    </div>
  )
}

export default Rooms