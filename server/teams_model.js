// 26/05/20: I created this file early on but didn't complete it. After working on the front-end and coming back when I was hitting errors, I created db.js instead and added the functions, routes and SQL queries to server.js. I will likely delete this.

// db connection with localhost
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'password',
  database: 'sports_scoring_app_v4',
  port: 5432,
});

const getTeams = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM teams', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getTeams,
};
