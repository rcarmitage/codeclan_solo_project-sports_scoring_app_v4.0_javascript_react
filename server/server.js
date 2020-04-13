const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const teams = [
  { name: "Team 01"},
  { name: "Team 02"},
  { name: "Team 03"},
  { name: "Team 04"},
  { name: "Team 05"},
  { name: "Team 06"}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.get('/api/teams/:id', (req, res) => {
  res.json(teams[req.params.id]);
});

app.post('/api/teams', (req, res) => {
  teams.push(req.body);
  res.json(teams);
});

app.delete('api/teams/:id', (req, res => {
  teams.splice(req.params.id, 1);
  res.json(teams);
}));

app.put('api/teams/:id', (req, res) => {
  teams[req.params.id] = req.body;
  res.json(teams);
});

app.listen(3001, function () {
  console.log('App running on port ${ this.address().port }');
});