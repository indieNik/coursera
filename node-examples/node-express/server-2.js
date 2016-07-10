var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
// __dirname says Express to serve Static files stored in this particular public folder

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});