var mongoose = require('mongoose');

var User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    required: true
  }
});

module.exports = User;
