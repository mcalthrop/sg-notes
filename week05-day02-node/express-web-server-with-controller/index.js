var express = require('express');
var router = require('./config/router');
var app = express();
var port = 3000;

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
