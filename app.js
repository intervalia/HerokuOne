var mysql = require("mysql");
var config = require('./config.json');
var connection = mysql.createConnection(config.sqlconnection);
var query = 'SELECT 1 + 1 AS solution';

query = `CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`;

query = 'SELECT * from Persons;';
//query = 'DROP TABLE Persons;'
connection.connect();
connection.query(query,
  function(err, rows, fields) {
    connection.end();

    if (err) {
      throw err;
    }

    console.log(rows);
  }
);
