/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var TestUtils = require('./test-utils');
var request;

chai.should();
chai.use(chaiHttp);

describe('Books', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe('PUT', function () {
    it('should return error for non-existent book', function (done) {
      request
        .put('/books/non-existent-book-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing book', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .get('/users/' + userId)
            .end(function (err, res) {
              var bookId = TestUtils.getFirstBookIdFromUserPageHTML(res.text);
              var testTitle = TestUtils.generateUniqueString('title');
              var testAuthor = TestUtils.generateUniqueString('author');

              request
                .put('/books/' + bookId)
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send({ title: testTitle, author: testAuthor, userId: userId})
                .end(function (err, res) {
                  var titleRegExp = new RegExp(testTitle);
                  var authorRegExp = new RegExp(testAuthor);

                  res.should.have.status(200);
                  res.text.should.match(titleRegExp);
                  res.text.should.match(authorRegExp);
                  done();
                });
            });
        });
    });
  });

  describe('DELETE', function () {
    it('should return error for non-existent book id', function (done) {
      request
        .delete('/books/non-existent-book-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing book', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .get('/users/' + userId)
            .end(function (err, res) {
              var bookId = TestUtils.getFirstBookIdFromUserPageHTML(res.text);

              request
                .delete('/books/' + bookId)
                .send({ userId: userId })
                .end(function (err, res) {
                  var bookIdRegExp = new RegExp(bookId);

                  res.should.have.status(200);
                  res.text.should.not.match(bookIdRegExp);
                  done();
                });
            });
        });
    });
  });
});
