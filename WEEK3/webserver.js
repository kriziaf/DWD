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

let testData = [{lineEntry:"brezl"},{lineEntry:"jim"},{lineEntry:"gym"}];
app.get('/',function(req,res){
  // pull from db
  let value = {data:{lineEntry:req.query.task}};
  // and what comes back should be in the
  // testData object (atm this is just test data)
  // res.render('template.ejs',{"data": testData});
  res.render('template.ejs',{"data": value});
});

app.get('/new',function(req,res){
  let newTodo = req.query.val
  // add to db
});

app.use(express.static('public'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
