const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'assis',
  password: '27747668',
  database: 'exercise_23_1' 
});

module.exports = connection;
