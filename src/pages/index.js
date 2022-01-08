import { Form, ListGroup, Button, Row, Col } from "react-bootstrap"

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
            <ListGroup.Item variant="primary"><Button variant="secondary" size="sm">OPEN</Button>{" | "}<p style={{ display: "inline" }}>Mainのルーム</p><p style={{ marginBottom: 0 }}>最新投稿の時間</p></ListGroup.Item>
            <ListGroup.Item variant="primary"><Button variant="secondary" size="sm">OPEN</Button>{" | "}<p style={{ display: "inline" }}>Subのルーム</p><p style={{ marginBottom: 0 }}>最新投稿の時間</p></ListGroup.Item>
      </ListGroup>
      
    </div >
  )
}

export default Index