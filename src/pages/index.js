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

      <hr />

      <Form.Group>
        <Form.Label>DMのルームを新規作成</Form.Label>
        <Row>
          <Col sm={10}>
            <Form.Control type="text" placeholder="ID (Example : tani$3nc9ji1s)" />
          </Col>
          <Col sm={2}>
            <Button>追加</Button>
          </Col>
        </Row>
      </Form.Group>

      <hr />

      <ListGroup>
        <ListGroup.Item variant="info"><Button variant="secondary" size="sm">OPEN</Button>{" | "}tani$3nc9ji1sとのDM</ListGroup.Item>
        <ListGroup.Item variant="info"><Button variant="secondary" size="sm">OPEN</Button>{" | "}tani$3nc9ji1sとのDM</ListGroup.Item>
      </ListGroup>

    </div >
  )
}

export default Index