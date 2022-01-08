import { ListGroup } from "react-bootstrap"
import timestampToStr from "../plugins/timestamp"

const Post = (props) => {
  if (props.data.deleted) {
    return ""
  } else {

    return (
      <ListGroup.Item id={props.data.id} style={{ whiteSpace: "pre-wrap" }}>
        <div>
          <h4 style={{ fontSize: 22, marginBottom: 5, overflowWrap: "break-word" }}>{props.data.message}</h4>
        </div>
        <div style={{ display: "inline", overflowWrap: "break-word" }}>
          <span style={{ fontSize: 16, marginRight: 20 }}>{props.data.name}</span>
          <span style={{ fontSize: 13, color: "#A9D159", marginRight: 20 }}>{timestampToStr(props.data.createdAt)}</span>
          <span style={{ fontSize: 13, color: "#D16359", marginRight: 20 }}>{props.data.trip ? props.data.trip : ""}</span>
        </div>
        <div className="btn-group mr-2 btn-group-sm btn-s ml-auto" role="group"
          style={{ position: "absolute", right: 10, bottom: 8 }}
        >
          {props.data.trip == "" ?
            <div>
              <button type="button" className="btn btn-secondary">⤴</button>
            </div>
            :
            props.data.trip == props.trip ?
              <div>
                <button type="button" className="btn btn-secondary">⤴</button>
                <button type="button" className="btn btn-secondary">✕</button>
                <button type="button" className="btn btn-secondary">／</button>
              </div>
              :
              <div>
                <button type="button" className="btn btn-secondary">⤴</button>
              </div>
          }
        </div>
      </ListGroup.Item>
    )

  }
}

export default Post