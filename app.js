const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => res.send("Hello World-GET"));
app.post("/api/", (req, res) => res.send('{"items": ["tako","neko"] }'));
app.get("/login", (req, res) =>
  res.send(
    '{"contents":{"userInfo":{"foreignAccountId":"1625492", "userName":"汐留　太郎", "role":"0001"}}}'
  )
);

app.listen(3002);
