import Post from "../components/Post"
import TextareaAutosize from "react-textarea-autosize"
import { Button } from "react-bootstrap"

const Chat = () => {
  const datas = [
    {
      "_id": "61d3cf16a332b88ee26bb1b9",
      "id": 0,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641271062527,
      "editedMessage": [],
      "message": "SampleMessageかもしれないよぉ〜",
      "__v": 0
    },
    {
      "_id": "61d3d00977cb53826ffc0a17",
      "id": 1,
      "name": "fsdgdfsdfs",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641271305844,
      "editedMessage": [],
      "message": "esfeafvf",
      "__v": 0
    },
    {
      "_id": "61d3d246c5a4fdf7c4e056a8",
      "id": 2,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641271878596,
      "editedMessage": [],
      "message": "こんにちは",
      "__v": 0
    },
    {
      "_id": "61d3d257c5a4fdf7c4e056ac",
      "id": 3,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641271895740,
      "editedMessage": [],
      "message": "普通に使えてますね",
      "__v": 0
    },
    {
      "_id": "61d3d2b99260eb1b075c164c",
      "id": 4,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641271993844,
      "editedMessage": [],
      "message": "そうだよ",
      "__v": 0
    },
    {
      "_id": "61d3d2e95cd2c1834a378eb4",
      "id": 5,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272041655,
      "editedMessage": [],
      "message": "いい感じなんですねー",
      "__v": 0
    },
    {
      "_id": "61d3d2f05cd2c1834a378eb8",
      "id": 6,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272048030,
      "editedMessage": [],
      "message": "a",
      "__v": 0
    },
    {
      "_id": "61d3d2ff5cd2c1834a378ebd",
      "id": 7,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272063648,
      "editedMessage": [],
      "message": "はい",
      "__v": 0
    },
    {
      "_id": "61d3d3395cd2c1834a378ec2",
      "id": 8,
      "name": "tani",
      "trip": "5e8ff9b",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272121198,
      "editedMessage": [],
      "message": "よっこいしょ",
      "__v": 0
    },
    {
      "_id": "61d3d36944fa083c388a230a",
      "id": 9,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272169465,
      "editedMessage": [],
      "message": "asdfasdf",
      "__v": 0
    },
    {
      "_id": "61d3d3fdc8810d1477562ab7",
      "id": 10,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272317173,
      "editedMessage": [],
      "message": "afsasdfasdf",
      "__v": 0
    },
    {
      "_id": "61d3d40ec8810d1477562abb",
      "id": 11,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272334569,
      "editedMessage": [],
      "message": "あはははは",
      "__v": 0
    },
    {
      "_id": "61d3d41cc8810d1477562abf",
      "id": 12,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272348820,
      "editedMessage": [],
      "message": "普通にできてる\nね",
      "__v": 0
    },
    {
      "_id": "61d3d433d9cbdfedaf1689d6",
      "id": 13,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272371722,
      "editedMessage": [],
      "message": "まぁいい感じ",
      "__v": 0
    },
    {
      "_id": "61d3d43cd9cbdfedaf1689da",
      "id": 14,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272380437,
      "editedMessage": [],
      "message": "完成してっていいね",
      "__v": 0
    },
    {
      "_id": "61d3d457d9cbdfedaf1689df",
      "id": 15,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272407267,
      "editedMessage": [],
      "message": "しっかりチャットになってます",
      "__v": 0
    },
    {
      "_id": "61d3d460d9cbdfedaf1689e3",
      "id": 16,
      "name": "tani",
      "trip": "",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272416168,
      "editedMessage": [],
      "message": "最高",
      "__v": 0
    },
    {
      "_id": "61d3d47cd9cbdfedaf1689e7",
      "id": 17,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272444903,
      "editedMessage": [],
      "message": "後のタスクとしては、\n改行の対応\nメッセージの削除、編集\n安価\nです。",
      "__v": 0
    },
    {
      "_id": "61d3d5c5bfc860eb0e863d06",
      "id": 18,
      "name": "tani",
      "trip": "092e376",
      "deleted": false,
      "edited": false,
      "createdAt": 1641272773259,
      "editedMessage": [],
      "message": "名前を保存する機能ができました!",
      "__v": 0
    }
  ]
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

export default Chat