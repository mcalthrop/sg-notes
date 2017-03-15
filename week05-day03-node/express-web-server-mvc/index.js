var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var layouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');
app.use(function (req, res, next) {
  // simple middleware logging
  console.log(req.method, req.path);
  next();
});
app.use(layouts);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
