$(function() {


	var task = 0;
	//listen for add button click
	$('#add').click(addTask);


		function addTask(e){
			e.preventDefault();

			//get content in the field
			var entry = $('#entry').val();

			//make new list item with the content
			entry = '<li>'+ entry + '</li>';

			//display entry
			$('#lineEntry').append(entry);

			if (isNaN(entry)) {
     		entry = "write something";
   			}

			//add 1 to task, then display
			task ++;
			$('#num').text(task);
			
			//clear the field
			$('#entry').val("");

		}

			//complete task
			$('body').on('click', '#lineEntry li', function(){
    			
    			/*alert($(this).text());*/
    			$(this).toggleClass("done");

    			//update status	
    			if ($(this).hasClass('done')) {
    				task --;

    			} else {
	    			task ++;
	    			$('#num').text(task);
    			}	
 				
 			});

			
			//









			//edit task


});