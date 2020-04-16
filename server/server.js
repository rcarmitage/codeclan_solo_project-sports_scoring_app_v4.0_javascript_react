const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

require('dotenv').config();

const teams = [];
const fixtures = [];

// db connection with localhost
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'Gl55sql',
  database: 'sports_scoring_app_v4.0'
});

app.use(cors());
app.use(bodyParser.json());

const teamsRouter = createRouter(teams);
app.use('/api/teams', teamsRouter);

const fixturesRouter = createRouter(fixtures);
app.use('/api/fixtures', fixturesRouter);

app.listen(3005, function () {
  console.log(`App running on port ${ this.address().port }`);
});