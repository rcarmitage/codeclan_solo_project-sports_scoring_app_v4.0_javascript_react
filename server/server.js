const express = require('express');
const app = express();
const PORT = 3005;
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

require('dotenv').config();

const teams_model = require('./teams_model');

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
})

app.get('/', (req, res) => {
  teams_model.getTeams()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// const teams = [];

const teams = [
  {
    id: 1, 
    name: "The Gym Bunnies (server.js)",
    played: 2,
    won: 1,
    lost: 1,
    points: 1
  },
  {
    id: 2,
    name: "Shop Winventory (server.js)",
    played: 2,
    won: 2,
    lost: 0,
    points: 2
  },
  {
    id: 3,
    name: "Spending Tracker Big Spenders (server.js)",
    played: 2,
    won: 0,
    lost: 2,
    points: 0
  },
  {
    id: 4,
    name: "Sports Scorers (server.js)",
    played: 2,
    won: 2,
    lost: 2,
    points: 0
  },
  {
    id: 5,
    name: "Travel Bucket List Jetsetters (server.js)",
    played: 2,
    won: 1,
    lost: 1,
    points: 1
  },
  {
    id: 6,
    name: "Vet Squad Managers (server.js)",
    played: 2,
    won: 0,
    lost: 2,
    points: 0
  }
];

const fixtures = [];

// db connection with localhost
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   password: 'password',
//   database: 'sports_scoring_app_v4.0'
// });

app.use(cors());
app.use(bodyParser.json());

const teamsRouter = createRouter(teams);
app.use('/api/teams', teamsRouter);

const fixturesRouter = createRouter(fixtures);
app.use('/api/fixtures', fixturesRouter);

app.listen(PORT, function () {
  console.log(`App running on port ${ this.address().port }`);
});

// module.exports = {
//   pool
// };