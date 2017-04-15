var express         = require('express');
var app             = express();
var server          = require('http').createServer(app);
var port            = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, function () {
  console.log('Server has been started on port %s ...', port);
});
