var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};
//controller is going to handle request from the client
//it will pass get and post requests for the model to process

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('************** get messages request keys: ', req.query);
      var modelResults = models.messages.get(req);
      console.log('*******modelResults: ', modelResults.results);
      //returned from model: {'results': results, 'statusCode': 400}
      var statusCode = modelResults.statusCode || 200;
      res.writeHead(statusCode, headers);
      res.end(JSON.stringify(modelResults.results));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('************** post messages request keys: ', Object.keys(req));
      var modelResults = models.messages.post(req);
      var statusCode = modelResults.statusCode || 200;
      res.writeHead(statusCode, headers);
      res.end(JSON.stringify(modelResults.results));
    }, // a function which handles posting a message to the database
    options: function (req, res) {
      // console.log('************** options messages request keys: ', Object.keys(req));
      res.writeHead(200, headers);
      res.end(null);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('************** get users request keys: ', Object.keys(req));
      var modelResults = models.users.get(req);
      var statusCode = modelResults.statusCode || 200;
      res.writeHead(statusCode, headers);
      res.end(JSON.stringify(modelResults.results));
    },
    post: function (req, res) {
      console.log('************** post users request keys: ', Object.keys(req));
      var modelResults = models.users.post(req);
      var statusCode = modelResults.statusCode || 200;
      res.writeHead(statusCode, headers);
      res.end(JSON.stringify(modelResults.results));
    },
    options: function (req, res) {
      // console.log('************** options users request keys: ', Object.keys(req));
      res.writeHead(200, headers);
      res.end(null);
    }
  }
};



