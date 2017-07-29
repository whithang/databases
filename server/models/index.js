var db = require('../db');

//model is going to speak to the database
//for updates to the table and getting from the db
//sending sql queries to the db & returning data to the controller

module.exports = {
  messages: {
    get: function (messageObj) { //messageObj = req.query = {key: values}
      var sql = 'SELECT users.username, rooms.roomname, messages.message as text FROM users '
      + 'inner join messages on users.id = messages.user_id '
      + 'inner join rooms on rooms.id = messages.room_id ';
       //maybe order by -createdAt
      var results = db.connection.query(sql, function (error, results, fields) {
        if (error) { 
          throw error; 
          return {'results': results, 'statusCode': 400};
        }
      });
      return {'results': results, 'statusCode': 200};
    }, // a function which produces all the messages

    post: function (messageObj) { 
      console.log('********messageObj on post: ' + messageObj.query);
    //what is in messageObj?
    //select id from users where username = messageObj.username
      var sql = 'SELECT * FROM MESSAGES'; //maybe order by createdAt
      var results = db.query(sql);
      // work in progresa 
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (messageObj) { 
      console.log('*********** model get for users: ', messageObj.query);
      // work in progress
      var results = db.query(sql); 
    },
    post: function (messageObj) { 
      console.log('*********** model post for users: ', messageObj.query);
      var sql = 'if not exists (insert into users (username) values (' + messageObj.query.username + '))';
      var results = db.connection.query(sql, function (error, results, fields) {
        if (error) { 
          throw error; 
          return {'results': results, 'statusCode': 400};
        }
      });
      return {'results': results, 'statusCode': 200};
    } 
  }
};  
/*
message object includes:
username: app.username,
text: app.$message.val(),
roomname: app.roomname 
*/
