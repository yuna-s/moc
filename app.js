const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World-GET'));
app.post('/', (req, res) => res.send('Hello World-POST¥n'));

app.listen(3002);
