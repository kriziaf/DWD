$(function(){ 

   // hide all copy when page is loaded
      /*hideCopy();*/

			var button1 = $("#xheight-btn");
			var button2 = $("#family-btn");
			var button3 = $("#visual-btn");
			var button4 = $("#contrast-btn");

			$(button1).click(function() {
				console.log(button1 + 'has been clicked');
				
				$('#changePic').attr('src','image/xheight.svg');

				hideCopy();

				$('#copyXheight').attr('class', 'showCopy');
			});

			$(button2).click(function() {
				$('#changePic').attr('src','image/family.svg');

        		hideCopy();

				$('#copyFamily').attr('class', 'showCopy');

			});
				
			
			$(button3).click(function() {
				$('#changePic').attr('src','image/visual.svg');

        		hideCopy();
				$('#copyVisual').attr('class', 'showCopy');
			});

			
			$(button4).click(function() {
				$('#changePic').attr('src','image/contrast.svg');

        		hideCopy();

				$('#copyContrast').attr('class', 'showCopy');
			});


	      	function hideCopy() {

		        $('#copyXheight').attr('class', 'hideCopy');
		        $('#copyFamily').attr('class', 'hideCopy');
		        $('#copyVisual').attr('class', 'hideCopy');
		        $('#copyContrast').attr('class', 'hideCopy');

	      	}

	

		//FONTMATCHER

		// hide fontStatus section when page first loads
  		$('#fontStatus').hide();
   			
   
   		var font1;
   		var font2;

   		$('input[name="font1"]').change(function() {

			font1 = $(this).val();
			// call compareFonts function when radio button is clicked
    		compareFonts();
    	});

   		$('input[name="font2"]').change(function() {
			font2 = $(this).val();
			// call compareFonts function when radio button is clicked
    		compareFonts();
   		});


		//call compareFonts() {
			
		function compareFonts() {

			// only do the comparison if font1 and font2 have a value
			console.log(font1)
			console.log(font2)

			if ( typeof font1 == "undefined" && typeof font2 == "undefined" ) {
				
				$("#fontStatus").html("<p>UNDEFINED</p>");

			} else if ((font1 === "serif" &&  font2 === "sans") ||  	(font2 === "serif" &&  font1 === "sans") 	|| 
					(font1 === "slab" &&  font2 === "sans") 	||  	(font2 === "slab" &&  font1 === "sans") 	|| 
					(font1 === "script" &&  font2 === "sans" )	||  	(font2 === "script" &&  font1 === "sans") 	|| 
					(font1 === "script" &&  font2 === "slab" )	||  	(font2 === "script" &&  font1 === "slab")) 

			{

			$("#fontStatus").html("<p>AWESOME TWOSOME!</p>");
			$("#fontStatus").show();

			} else if 	((font1 === "serif" &&  font2 === "serif") 	||   
						(font1 === "slab" &&  font2 === "slab") 	||  
						(font1 === "script" &&  font2 === "script") ||  
						(font1 === "sans" &&  font2 === "sans")) 
			{

			$("#fontStatus").html("<p>CHOOSE A DIFF TYPE</p>");
			$("#fontStatus").show();


			} else {
		 	
		 	$("#fontStatus").html("<p>UNLIKELY PAIR</p>");
		 	$("#fontStatus").show();

			}
		
		}

		$('input[type=radio]').change(function(){
 		$('input[type=radio]').addClass('radio');
});

});
