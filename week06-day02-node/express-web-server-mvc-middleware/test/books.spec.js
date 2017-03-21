/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

// We are looking for HTML that looks like this:
// <a href="/users/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.
function getFirstUserIdFromUserListHTML(html) {
  var regEx = /\/users\/[0-9a-f]+/;
  var result = regEx.exec(html)[0];
  var pathElements = result.split('/');

  return pathElements[2];
}

// We are looking for HTML that looks like this:
// <a href="/books/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.
function getFirstBookIdFromUserPageHTML(html) {
  var regEx = /\/books\/[0-9a-f]+/;
  var result = regEx.exec(html)[0];
  var pathElements = result.split('/');

  return pathElements[2];
}

describe('Books', function () {
  beforeEach(function () {
    request = chai.request(app);
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
          var userId = getFirstUserIdFromUserListHTML(res.text);

          request
            .get('/users/' + userId)
            .end(function (err, res) {
              var bookId = getFirstBookIdFromUserPageHTML(res.text);

              res.should.have.status(200);
              request
                .delete('/books/' + bookId)
                .end(function (err, res) {
                  res.should.have.status(200);
                  done();
                });
            });
        });
    });
  });
});
