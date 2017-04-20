var mongoose = require('mongoose');

var DuckSchema = mongoose.Schema({
	name: String,
  location: String,
	color: String,
  desc: String
});

module.exports = mongoose.model('Duck', DuckSchema);

