// this is a webserver

var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var count = 0;
var submissions = [];

//define a route named somethingelse
//GET REQUEST
app.get('/formpost', function (req, res) {
  console.log("THIS HAS BEEN ADDED BY SOME TO DO LISTER: ", req.query.val);
  let userinput = req.query.val;
  // here you probably want to put this into mongoDB
  res.send("You submitted: " + userinput);
	submissions.push(req.query.textfield);
	// count++;
  // res.send('<html><body><h1>BLBLA Something Else' + count + '</h1></body></html>')
})

//define route as action=formpost
//GET REQUEST
//submissions
app.get('/formresult', function (req, res) {
	console.log("They submitted: " + req.query.textfield);
	res.send("You submitted: " + req.query.textfield);
	submissions.push(req.query.textfield);
})

app.get('/display', function(req, res) {
	var html = "<html><body>";
	for (var i = 0; i < submissions.length; i++) {
		html = html + submissions[i] + "<br>";
	}
	html = html + "</body></html>";
	res.send(html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
