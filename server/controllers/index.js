var models = require('../models');

//controller is going to handle request from the client
//it will pass get and post requests for the model to process

module.exports = {
  messages: {
    get: function (req, res) {
      res = models.messages.get(req.message_obj);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.message_obj);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

