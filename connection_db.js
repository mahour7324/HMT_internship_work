var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "login_system" // connnected on login_system database
});
// console.log(connection)
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!=>from connection.db");
});

// module.exports = connection;