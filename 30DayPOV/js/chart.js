window.addEventListener('load',init);

function init(){
	// on page load, build the charts
	buildBarChart();
}
  function buildBarChart(){

	// a chart can take 2 objects:
	// 1. data - the data/information (required)
	// 2. options - chart options (optional)

	var data = {
	    // chart labels
      //insert key for taglist
	    labels: ["trains", "coffee", "stranger", "friend", "art", "sky", "ceiling", "foliage"],
	    // array of datasets to plot
	    // could be only 1 if there's just 1 dataset
	    datasets: [
	        {
	            label: "People",
	           // backgroundColor: "rgba(75,192,192,0.3)",
	            borderColor: "#191F58",//rgba(75,192,192,0.5)
	            borderWidth: 1,
              //**need frequency inserted here
	            data: [3, 2, 1, 8, 5, 6, 4, 10, 4, 2]

							// backgroundColor: [
							// 		 pattern.draw('square', '#ff6384'),
							// 		 pattern.draw('circle', '#36a2eb'),
							// 		 pattern.draw('diamond', '#cc65fe'),
							// 		 pattern.draw('triangle', '#ffce56'),
							// 		 pattern.draw('square', '#ff6384'),
							// 		 pattern.draw('circle', '#36a2eb'),
							// 		 pattern.draw('diamond', '#cc65fe'),
							// 		 pattern.draw('triangle', '#ffce56')
							//  ]
	 						//}],
	        }//,
	        // {
	        //     label: "My Second dataset",
	        //     backgroundColor: "rgba(107,185,240,0.2)",
	        //     borderColor: "rgba(107,185,240,0.5)",
	        //     borderWidth: 1,
	        //     data: [28, 48, 40, 19, 86, 27, 90]
	        // }
	    ]
	};

	// create chart options (this is optional)
	// see list of options:
	// http://www.chartjs.org/docs/latest/charts/bar.html
	var options = {
        tooltips: {
            backgroundColor: '#191F58',
        },
        legend: {
            display: false
        }
	}

	// first, get the context of the canvas where we're drawing the chart
	var ctx = document.getElementById("barChart").getContext("2d");
	// var fillPattern = ctx.createPattern(img, 'repeat');

	// now, create the bar chart, passing in:
	// 1. the type (required)
	// 2. the data (required)
	// 3. chart options (optional)
	var myBarChart = new Chart(ctx, {
	    // type: 'bar',
	    type: 'horizontalBar', // horizontal bards
	    data: data,
	    options: options
	});
}
