// this is a webserver

var config = require("./config.js");

var mongojs = require("mongojs");
//****define the mongo DB
//mongojs("username:password@example.com:port/mydb", ["submissions"]);
var db = mongojs("mongodb://config.username+":"+config.password+@ds229878.mlab.com:29878/test_krizia", ["submissions"]);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

//use express
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
})
  //ejs template
app.get('/display',function(req,res){
  // var answer = {submissions: {lineEntry:"data"}};
  var answer = [ {lineEntry:req.query.task},{lineEntry:"brezl"},{lineEntry:"jim"}];
  //
  res.render('template.ejs',{"data": answer});
});


db.mycollection.save({"attribute_to_save":"value_to_save"}, function(err, saved) {
  if( err || !saved ) console.log("Not saved");
  else console.log("Saved");
});

  // app.get('/display', function(req, res) {
  // //*****mongo.find()
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
