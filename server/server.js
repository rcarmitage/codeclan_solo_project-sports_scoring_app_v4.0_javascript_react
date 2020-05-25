const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const pool = require('./db');

// const bodyParser = require('body-parser');
// const createRouter = require('./helpers/create_router.js');

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //req.body

// const team_a_id = ;

// ROUTES - TEAMS

// Get All Teams
app.get('/api/teams', async (req, res) => {
  try {
    const allTeams = await pool.query('SELECT * FROM teams');

    res.json(allTeams.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get Single Team
app.get('/api/teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const team = await pool.query('SELECT * FROM teams WHERE team_id = $1', [
      id,
    ]);

    res.json(team.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Add Team
app.post('/api/teams', async (req, res) => {
  try {
    const { name } = req.body;
    const newTeam = await pool.query(
      'INSERT INTO teams (name) VALUES ($1) RETURNING *',
      [name]
    );

    res.json(newTeam.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Edit Team
app.put('/api/teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateTeam = await pool.query(
      'UPDATE teams SET name = $1 WHERE team_id = $2',
      [name, id]
    );

    res.json('Team was updated');
  } catch (error) {
    console.error(error.message);
  }
});

// Delete Team
app.delete('/api/teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTeam = await pool.query(
      'DELETE FROM teams WHERE team_id = $1',
      [id]
    );

    res.json('Team was deleted');
  } catch (error) {
    console.error(error.message);
  }
});

// ROUTES - FIXTURES

// Get All Fixtures
app.get('/api/fixtures', async (req, res) => {
  try {
    const allFixtures = await pool.query('SELECT * FROM fixtures');

    res.json(allFixtures.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get Single Fixture - as a function so I can use it to get Team data
const getFixture = () => {
  app.get('/api/fixtures/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const fixture = await pool.query(
        'SELECT * FROM fixtures WHERE fixture_id = $1',
        [id]
      );

      res.json(fixture.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  });
};

// Get Team A
app.get('/api/fixtures/:id/team-a', async (req, res) => {
  try {
    // Get single fixture as an object
    getFixture(id);

    // Get team_a_id
    // const { id } = req.params;
    // const { team_a_id } = id(team_a_id);

    // Use this to search the teams db and return a team_a object, which is then accessed via the route above
    const team_a = await pool.query('SELECT * FROM teams WHERE team_id = $1', [
      team_a_id,
    ]);

    res.json(team_a.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Add Fixture
app.post('/api/fixtures', async (req, res) => {
  try {
    const { team_a_id, team_b_id, winning_team_id, losing_team_id } = req.body;
    const newFixture = await pool.query(
      'INSERT INTO fixtures (team_a_id, team_b_id, winning_team_id, losing_team_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [team_a_id, team_b_id, winning_team_id, losing_team_id]
    );

    res.json(newFixture.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Edit Fixture
app.put('/api/fixtures/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { team_a_id, team_b_id, winning_team_id, losing_team_id } = req.body;
    const updateFixture = await pool.query(
      'UPDATE fixtures SET (team_a_id, team_b_id, winning_team_id, losing_team_id) = ($1, $2, $3, $4) WHERE fixture_id = $5',
      [team_a_id, team_b_id, winning_team_id, losing_team_id, id]
    );

    res.json('Fixture was updated');
  } catch (error) {
    console.error(error.message);
  }
});

// Delete Fixture
app.delete('/api/fixtures/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFixture = await pool.query(
      'DELETE FROM fixtures WHERE fixture_id = $1',
      [id]
    );

    res.json('Fixture was deleted');
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// start();
// async function start() {
//   await connect();
// const teams = await getTeams();
// console.log(teams);
// }

// async function connect() {
//   try
//   {
//     await client.connect()
//     console.log("Connected successfully")
//     // const results = await client.query("SELECT * FROM teams")
//     // console.table(results.rows)
//   }
//   catch (ex)
//   {
//     console.log(`Failed to connect (async connect() function): ${ex}`)
//   }
// finally
// {
//   await client.end()
//   console.log("Client disconnected successfully")
// }
// }

// async function getTeams() {
//   try
//   {
//     const results = await client.query("SELECT * FROM teams");
//     return results.rows;
//   }
//   catch (ex)
//   {
//     return [];
//   }
// };

// async function getTeam(id) {
//   try
//   {
//     const results = await client.query("SELECT * FROM teams WHERE id = $1", [id]);
//     return results.rows;
//   }
//   catch (ex)
//   {
//     return [];
//   }
// };

// app.get("/teams-test", async (req, res) => {
//   const rows = await getTeams();
//   res.setHeader("content-type", "application/json");
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.send(JSON.stringify(rows));
// });

// app.get('/teams-test/:id', async (req, res) => {
//   const rows = await getTeam();
//   res.setHeader("content-type", "application/json");
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.send(JSON.stringify(rows));
// });

// require('dotenv').config();

// const teams_model = require('./teams_model');

// app.use(express.json());
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// })

// app.get('/', (req, res) => {
//   teams_model.getTeams()
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

// app.use(bodyParser.json());

// const teamsRouter = createRouter(teams);
// app.use('/api/teams', teamsRouter);

// const fixturesRouter = createRouter(fixtures);
// app.use('/api/fixtures', fixturesRouter);
