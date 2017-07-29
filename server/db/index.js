var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", password: plantlife,
// and to the database "chat".

module.exports.query = function(sql) {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'plantlife',
    database: 'chat'
  });
   
  connection.connect();

  var results = connection.query(sql, function (error, results, fields) {
    if (error) { throw error; }
    return results;
  });
  
  connection.end();
  return results;
};
 