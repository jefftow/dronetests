var express = require("express");

module.exports = function() {
  var router = express.Router();

  // The simple health check function that always returns 200
  router.get("/health", function(request, response, next) {
    var responseAsJson = {
        "status": "success",
        "date": (new Date()).toISOString()
    };
    response.set("content-type", "application/json");
    response.end(JSON.stringify(responseAsJson));
  });

  return router;
}();
