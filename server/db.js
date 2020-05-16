const Pool = require('pg').Pool;

// Connect to db
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'password',
  database: 'sports_scoring_app_v4',
  port: 5432,
});

module.exports = pool;
