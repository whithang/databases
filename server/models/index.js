var db = require('../db');

//model is going to speak to the database
//for updates to the table and getting from the db
//sending sql queries to the db & returning data to the controller

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

