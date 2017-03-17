/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  it('should return error for invalid URL GET', function (done) {
    request
      .get('/invalid_url')
      .end(function (err) {
        expect(err).not.to.be.null;
        done();
      });
  });
  it('should list all users for GET /users', function (done) {
    request
      .get('/users')
      .end(function (err, res) {
        expect(err).to.be.null;
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});
