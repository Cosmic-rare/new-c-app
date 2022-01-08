# new-c-app
最新版のChat-app



- "/" index
- "/login" Login
- "/channels/:roomId"
- "/direct/:partnerId"

- IndexDBにDMのデータを保存する

# 複数サーバーのindex.js

```js
import { useState } from "react"
import { Form, ListGroup, Button, Collapse, Row, Col } from "react-bootstrap"

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{
      padding: 15,
      paddingTop: 35,
      width: "100%",
      maxWidth: 600,
      margin: "auto"
    }}>

      <Form.Group>
        <Form.Label>サーバーに参加する</Form.Label>
        <Row>
          <Col sm={10}>
            <Form.Control type="text" placeholder="ServerID (Example : 832934898549260319)" />
          </Col>
          <Col sm={2}>
            <Button>追加</Button>
          </Col>
        </Row>
      </Form.Group>

      <hr />

      <ListGroup>
        <ListGroup.Item variant="primary"><Button size="sm" onClick={() => setIsOpen(!isOpen)}>↓</Button>{" | "}Mainのサーバー</ListGroup.Item>
        <Collapse in={isOpen}>
          <div>
            <ListGroup.Item><Button variant="secondary" size="sm">OPEN</Button>{" | "}<p style={{ display: "inline" }}>Mainのルーム</p><p style={{ marginBottom: 0 }}>最新投稿の時間</p></ListGroup.Item>
          </div>
        </Collapse>
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
        <ListGroup.Item variant="info"><Button variant="info" size="sm">OPEN</Button>{" | "}tani$3nc9ji1sとのDM</ListGroup.Item>
        <ListGroup.Item variant="info"><Button variant="info" size="sm">OPEN</Button>{" | "}tani$3nc9ji1sとのDM</ListGroup.Item>
      </ListGroup>

    </div >
  )
}

export default Index
```