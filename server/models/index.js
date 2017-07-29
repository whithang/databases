var db = require('../db');

//model is going to speak to the database
//for updates to the table and getting from the db
//sending sql queries to the db & returning data to the controller

module.exports = {
  messages: {
    get: function () { 
    //check what client is sending in the object
      var sql = 'SELECT * FROM MESSAGES'; //maybe order by createdAt
      var results = db.query(sql); 
      return results;
    }, // a function which produces all the messages
    
    
    post: function () { var results = db.query(sql); } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { var results = db.query(sql); },
    post: function () { var results = db.query(sql); }
  }
};
/*
message object includes:
username: app.username,
text: app.$message.val(),
roomname: app.roomname 
*/
