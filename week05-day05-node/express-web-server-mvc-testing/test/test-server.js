/* global describe, it */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');

chai.use(chaiHttp);

describe('Users', function () {
  it('should list all users for GET /users', function (done) {
    var request = chai.request(app);

    request
      .get('/users')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});
