"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();


// Use body-parser so we can process JSON in the body of the requests
app.use(bodyParser.json());


app.use(require("./controllers/controller"));
app.use(errorHandler);

// Handle all the resources not found, and send an error response
app.use(function(request, response, next)
{
    response.status(400);
    response.json({error: 'oh oh'});
});

// Start the service on the port defined in the config
app.listen(4000);

module.exports = app;

function errorHandler(error, request, response, next) {

  response.status(500);
  response.json({error: error.message});
};
