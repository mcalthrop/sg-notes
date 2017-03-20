var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validationRules = {
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    required: true
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
};
var UserSchema = new Schema(validationRules);
var User = mongoose.model('User', UserSchema);

module.exports = User;
