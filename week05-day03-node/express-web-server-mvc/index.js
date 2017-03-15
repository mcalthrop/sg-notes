var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var layouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/sg-mvc');

app.set('view engine', 'ejs');
app.use(function (req, res, next) {
  // simple middleware logging
  console.log(req.method, req.path);
  next();
});
app.use(layouts);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
