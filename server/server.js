const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const pool = require('./db');

// const bodyParser = require('body-parser');
// const createRouter = require('./helpers/create_router.js');
// const {Client} = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   password: 'password',
//   database: 'sports_scoring_app_v4',
//   port: 5432
// });

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //req.body

// ROUTES

// Get All Teams
app.get("/api/teams", async (req, res) => {
  try {
    const allTeams = await pool.query("SELECT * FROM teams");

    res.json(allTeams.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get Single Team
app.get("/api/teams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const team = await pool.query("SELECT * FROM teams WHERE team_id = $1", [id]);

    res.json(team.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// Add Team
app.post("/api/teams", async (req, res) => {
  try {
    const { name } = req.body;
    const newTeam = await pool.query("INSERT INTO teams (name) VALUES ($1) RETURNING *", [name]);
    
    res.json(newTeam.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Edit Team
app.put("/api/teams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateTeam = await pool.query("UPDATE teams SET name = $1 WHERE team_id = $2", [name, id]);

    res.json("Team was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete Team
app.delete("/api/teams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTeam = await pool.query("DELETE FROM teams WHERE team_id = $1", [id]);

    res.json("Team was deleted")
  } catch (err) {
    console.error(err.message);
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

// const teams = [];

// const teams = [
//   {
//     id: 1, 
//     name: "The Gym Bunnies (server.js)",
//     played: 2,
//     won: 1,
//     lost: 1,
//     points: 1,
//     slug: "the-gym-bunnies-server-js-1"
//   },
//   {
//     id: 2,
//     name: "Shop Winventory (server.js)",
//     played: 2,
//     won: 2,
//     lost: 0,
//     points: 2,
//     slug: "shop-winventory-server-js-2"
//   },
//   {
//     id: 3,
//     name: "Spending Tracker Big Spenders (server.js)",
//     played: 2,
//     won: 0,
//     lost: 2,
//     points: 0,
//     slug: "spending-tracker-big-spenders-server-js-3"
//   },
//   {
//     id: 4,
//     name: "Sports Scorers (server.js)",
//     played: 2,
//     won: 2,
//     lost: 2,
//     points: 0,
//     slug: "sports-scorers-server-js-4"
//   },
//   {
//     id: 5,
//     name: "Travel Bucket List Jetsetters (server.js)",
//     played: 2,
//     won: 1,
//     lost: 1,
//     points: 1,
//     slug: "travel-bucket-list-jetsetters-server-js-5"
//   },
//   {
//     id: 6,
//     name: "Vet Squad Managers (server.js)",
//     played: 2,
//     won: 0,
//     lost: 2,
//     points: 0,
//     slug: "vet-squad-managers-server-js-6"
//   }
// ];

// const fixtures = [];

// const fixtures = [
//   {
//     id: 1,
//     team_a: "Test Team 01",
//     team_b: "Test Team 02",
//     winning_team: "Test Team 01",
//     losing_team: "Test Team 02"
//   },
//   {
//     id: 2,
//     team_a: "Test Team 03",
//     team_b: "Test Team 04",
//     winning_team: "Test Team 03",
//     losing_team: "Test Team 04"
//   }
// ];

// db connection with localhost
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   password: 'password',
//   database: 'sports_scoring_app_v4'
// });

// app.use(bodyParser.json());

// const teamsTestRouter = createRouter(teamsTest);
// app.use('/teams-test', teamsTestRouter);

// const teamsRouter = createRouter(teams);
// app.use('/api/teams', teamsRouter);

// const fixturesRouter = createRouter(fixtures);
// app.use('/api/fixtures', fixturesRouter);

// module.exports = {
//   pool
// };