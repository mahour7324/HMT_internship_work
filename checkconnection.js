const mysql = require('mysql');

// Set up a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});
console.log()
// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// Execute a SELECT statement
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) {
    console.error('Error executing SELECT statement:', err);
    return;
  }
  console.log('Results:', results);
});

// Close the connection to the database
connection.end();
