// db connection with localhost
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'password',
  database: 'sports_scoring_app_v4',
  port: 5432
});

const getTeams = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM teams', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

module.exports = {
  getTeams
};