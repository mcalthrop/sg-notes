var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
};
var BookSchema = new Schema(validationRules);
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
