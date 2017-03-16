var mongoose = require('mongoose');

var Book = mongoose.model('Book', {
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = Book;
