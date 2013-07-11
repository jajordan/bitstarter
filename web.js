var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//app.get('/', function(request, response) {
//  response.send('Hello World2!');
//});

app.get('/', function(request, response) {
var text = fs.readFileSync('bitstarter.html','utf8') 
response.send(text);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



