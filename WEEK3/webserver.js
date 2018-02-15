// this is a webserver

var config = require("./config.js");

var mongojs = require("mongojs");
//****define the mongo DB
//mongojs("username:password@example.com:port/mydb", ["submissions"]);
var db = mongojs("mongodb://subuser:subpass@ds229878.mlab.com:29878/test_krizia", ["submissions"]);

var express = require('express')
var app = express()
app.use(express.static('public'));

//use template.ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var count = 0;
var submissions = [];

//define a route named somethingelse
//GET REQUEST
// var count = 0;
// var submissions = [];
app.get('/somethingelse', function (req, res) {
	count++;
  res.send('<html><body><h1>Something Else' + count + '</h1></body></html>')
})

//define route as action=formpost
//GET REQUEST
  // app.get('/formpost', function (req, res) {
  // 	res.send("You submitted: " + req.query.textfield);
  // 	submissions.push(req.query.textfield);
  // })

app.get('/formpost', function (req, res) {
  //console.log("THIS HAS BEEN ADDED BY SOME TO DO LISTER: ", req.query.val);
  let userinput = req.query.task;
  // here you probably want to put this into mongoDB
  res.send("You submitted: " + userinput);

	submissions.push(req.query.task);
	// count++;
  // var htmltoSend = '<html><body><h2><input><ul>' + count + '</input></ul></h2></body></html>'
  //res.send(htmltoSend);
})

  //ejs template
  app.get('/display',function(req,res){
    var answer = {submissions: {lineEntry:"data"}};
    res.render('template.ejs',answer);
  });

  //{"text" : "req.query.textfield"}
  //****mongo.save
  //app.post('/display')

  // app.get('/display', function(req, res) {
  // //*****mongo.find()
	// var html = "<html><body>";
	// for (var i = 0; i < submissions.length; i++) {
	// 	html = html + submissions[i] + "<br>";
	// }
	// html = html + "</body></html>";
	// res.send(html);
  // });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
