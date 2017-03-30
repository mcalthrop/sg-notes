var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('.'));
app.use(express.static('bower_components'));

app.listen(PORT, function() {
  console.log('App is running on port', PORT);
});
