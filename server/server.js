const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

app.get('/', function (req, res) {
  res.json('Hi, World!');
});

app.listen(3001, function () {
  console.log('App running on port 3001');
});