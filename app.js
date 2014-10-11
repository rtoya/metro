var express = require('express');
var compass = require('node-compass');
var app = express();

app.use(compass());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

 
app.get('/', function(req, res) {
  // res.send('hello world');
  res.render('index');
});
 
app.listen(3000);