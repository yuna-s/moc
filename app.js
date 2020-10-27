const express = require("express");
const app = express();
const sleep = (millisec) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve()
      }, millisec);
  });
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// get
app.get("/", (req, res) => res.send('This is moc server!'));
app.get("/400/", (req, res) => res.status(400).send('サーバーリクエストが無効'));
app.get("/401/", (req, res) => res.status(401).send('未認証（未ログイン）'));
app.get("/403/", (req, res) => res.status(403).send('権限なし'));
app.get("/404/", (req, res) => res.status(404).send('URL不正'));
app.get("/500/", (req, res) => res.status(500).send('内部エラー'));
app.get("/502/", (req, res) => res.status(502).send('後続APIエラー'));
app.get("/504/", (req, res) => res.status(504).send('後続APIタイムアウト'));
app.get("/timeout/", (req, res, next) => {
  (async () => {
    // 60秒
      await sleep(60*1000);
      res.send('Timeout!!');
  })().catch(next);;
});

// post
app.post("/", (req, res) => res.send('This is moc server!'));
app.post("/400/", (req, res) => res.status(400).send('サーバーリクエストが無効'));
app.post("/401/", (req, res) => res.status(401).send('未認証（未ログイン）'));
app.post("/403/", (req, res) => res.status(403).send('権限なし'));
app.post("/404/", (req, res) => res.status(404).send('URL不正'));
app.post("/500/", (req, res) => res.status(500).send('内部エラー'));
app.post("/502/", (req, res) => res.status(502).send('後続APIエラー'));
app.post("/504/", (req, res) => res.status(504).send('後続APIタイムアウト'));
app.post("/timeout/", (req, res, next) => {
  (async () => {
    // 60秒
      await sleep(60*1000);
      res.send('Timeout!!');
  })().catch(next);;
});

app.listen(8881);
