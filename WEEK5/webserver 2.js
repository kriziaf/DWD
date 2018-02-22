
// import express server stuff
var express = require('express')
// initialize the express stuff
var app = express()
// tell express that if there is no specific route
// just check if the file are in public
// the "/" router defaults to "/index.html"

// let express know that sometimes we will
// use ejs templates from the view folder
app.set('view engine', 'ejs');

var config = require('./config.js')
// connect to the database
var mongojs = require('mongojs');
var db = mongojs(config.username+":"+config.password+"@ds021989.mlab.com:21989/dwddatabase",["submissions"]);

app.get('/',function(req,res){
  // pull from db
  let value = {data:{lineEntry:req.query.task}};

  // and what comes back should be in the
  // testData object (atm this is just test data)
  //let testData = [{lineEntry:"brezl"},{lineEntry:"jim"},{lineEntry:"gym"}];
  // res.render('template.ejs',{"data": testData});
  res.render('template.ejs',{"data":value});
});

app.get('/new',function(req,res){
  let newTodo = req.query.val
  // add to db
  console.log("They submitted: " + newTodo);
  res.render('template.ejs',{response:newTodo})

  // save submission into the database in the argument "saved"
  db.submissions.save({"data":newTodo}, function(err, saved) {
      if( err || !saved ) console.log("Not saved");
      else console.log("Saved");
  })
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
