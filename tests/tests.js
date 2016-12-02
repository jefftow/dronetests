"use strict";

var chai = require("chai");
chai.should();
var chaiHttp = require("chai-http");
var expect = require('Chai').expect;
var momentTimeZone = require("moment-timezone");


chai.use(chaiHttp);
var server = require("../index");

describe("Verify Service", function(){

  it("Validating health check", function validRequest(done) {
  chai.request(server)
    .get("/health")
    .end(function(error, result){
      console.log("Result:");
      console.log(JSON.stringify(result));
      result.should.have.status(200);
      result.body.should.have.property("status");
      result.body.status.should.equal("success");
      done();
    });
  });
});