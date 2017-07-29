var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", password: plantlife,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});
 
module.exports.connection.connect(function() { console.log('connect from db'); });

 