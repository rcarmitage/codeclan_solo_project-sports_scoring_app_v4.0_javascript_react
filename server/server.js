const express = require('express');
const app = express();
const PORT = 3005;
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

require('dotenv').config();

const teams = [
  {
    name: "The Gym Bunnies",
    played: 2,
    won: 1,
    lost: 1,
    points: 1
  }
];

const fixtures = [];

// db connection with localhost
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'password',
  database: 'sports_scoring_app_v4.0'
});

app.use(cors());
app.use(bodyParser.json());

const teamsRouter = createRouter(teams);
app.use('/api/teams', teamsRouter);

const fixturesRouter = createRouter(fixtures);
app.use('/api/fixtures', fixturesRouter);

app.listen(PORT, function () {
  console.log(`App running on port ${ this.address().port }`);
});

module.exports = {
  pool
};