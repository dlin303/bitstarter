var express = require('express');
var fs = require('fs');

//writing string out with call back.
fs.readFile('index.html', function(err, data){
	if(err) throw err;
	console.log(data);
});

//to directly get string from readFileSync, include the encoding
var index_string = fs.readFileSync('index.html', 'utf-8');
//console.log(index_string);

//to write to buffer, then get string
var buf = fs.readFileSync('index.html');
var buf_string = buf.toString();
console.log(buf_string);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
