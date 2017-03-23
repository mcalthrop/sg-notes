/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var TestUtils = require('./test-utils');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe('GET', function () {
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
          res.text.should.match(/User list/);
          done();
        });
    });
  });

  describe('PUT', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .put('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .put('/users/' + userId)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ firstName: 'testFirstName', lastName: 'testLastName', email: 'testemail@example.com' })
            .end(function (err, res) {
              res.should.have.status(200);
              res.text.should.match(/testFirstName/);
              res.text.should.match(/testLastName/);
              done();
            });
        });
    });
  });

  describe('POST', function () {
    it('should return error when firstName is blank', function (done) {
      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: '', email: 'testpostlastname@example.com' })
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.an('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('firstName');
          done();
        });
    });
    it('should return error email is blank', function (done) {
      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: 'testPostFirstName', email: '' })
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.an('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('email');
          done();
        });
    });
    it('should create new user when input data is valid', function (done) {
      var testFirstName = TestUtils.generateUniqueString('first-name');

      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: testFirstName, email: 'testpost@example.com' })
        .end(function (err, res) {
          var firstNameRegExp = new RegExp(testFirstName);

          res.should.have.status(200);
          res.text.should.match(firstNameRegExp);
          done();
        });
    });
  });

  describe('DELETE', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .delete('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .delete('/users/' + userId)
            .end(function (err, res) {
              res.should.have.status(200);
              done();
            });
        });
    });
  });
});
