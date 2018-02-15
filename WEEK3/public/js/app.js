$("#add").on("click", function(){

  // add new entry
  let newTodo = $("#entry").val();
  $("#entry").val("");
  $("#lineEntry").append("<li>"+newTodo+"</li>");

  // update count:
  let prevCount = Number($("#num").text());
  $("#num").text(  prevCount + 1   );

  // send ajax request with the newTodo item to
  // our server so we can put it into the database
  $.get("/new?val="+newTodo, function(a){
    console.log("worked! ", a);
  })

})
