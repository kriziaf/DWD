//http://alpha.editor.p5js.org/shawn/sketches/rJxQKIXPz

var express = require('express')
var app = express()

var https = require('https');
var fs = require('fs'); // Using the filesystem module

var credentials = {
  key: fs.readFileSync('my-key.pem'),
  cert: fs.readFileSync('my-cert.pem')
};


var data = [];

app.get('/save', function(req, res) {
	var datatosave = {x: req.query.x, y: req.query.y};
	data.push(datatosave);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	res.send('{response: "thanks"}');
});

app.get("/send", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	res.send(data);
})

var httpsServer = https.createServer(credentials, app);

// Default HTTPS Port
httpsServer.listen(443);
