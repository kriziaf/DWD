// CUSTOM JS FILE //
window.addEventListener('load', init);


function init() {
        //renderCards();

        $.ajax({
        url: './data/data.json',
        type: 'GET',
        failure: function(err){
            console.log('something went wrong :(');
        },
        success: function(data){
            console.log(data);
            renderCards(data);
          //   for (i = 0; i < jsonData.length; i++) {
          //   var card = buildCard(jsonData[i]);
          //   $("#cardHolder").append(card);
          // }
        }
    })
}

function renderCards(data) {
    console.log('got here');
    for (i = 0; i < data.length; i++) {
        extractColor(data[i]);
        // var card = buildCard(data[i]);
        // $("#cardHolder").append(card);


    }
}

function extractColor(cardData) {
  let primaryColor = '';
  // console.log(cardData.imageURL);
    Vibrant.from(cardData.imageURL).getPalette().then(function(palette) {
        let LMrgb = palette.LightMuted._rgb
        primaryColor = "rgba("+LMrgb[0]+","+ LMrgb[1]+"," +LMrgb[2]+", 1)";
        //secColor = "rgba("+LMrgb[3]+","+ LMrgb[4]+"," +LMrgb[5]+", 1)";

        var k = Object.keys(palette);
        for(key of k){
          var rgb = palette[key]._rgb;

        //var d = document.createElement('div');
        //d.style.width = "100px";
        //d.style.height = "100px";
        //d.style.backgroundColor = "rgba("+rgb[0]+","+ rgb[1]+"," +rgb[2]+", 1)";
        // console.log(rgb);
        //document.body.appendChild(d);
      }
      console.log(primaryColor)

      var card = buildCard(cardData, primaryColor);
      $("#cardHolder").append(card);
      });

}

function buildCard(cardData, colorValue){
    console.log(colorValue)
    var maxMood = 5;
    var maxSteps = 10000;
    // var colorValue = ['rgb(255,0,0)'];

    return  '<div class="card">'+
              '<div class="header border">'+
                  '<img src="'+cardData.imageURL+'">'+
                  '<h1>'+cardData.name+'</h1>'+
                  '<div class="color-holder" style="background-color:'+colorValue+'"></div>'+

              '</div>'+
              '<div class="stats border">'+

                '<div class="statsHolder">'+
                  '<div class="regularFont">'+cardData.location+'</div>'+
                  '<div class="subtext">location</div>'+
                '</div>'+

                '<div class="statsHolder">'+
                  '<div class="regularFont">'+cardData.activity+'</div>'+
                  '<div class="subtext">activity</div>'+
                '</div>'+

              '</div>'+

              '<div class="jsViz border">'+
                  '<div class="ratingViz">'+
                    '<div class="largeFont">'+cardData.stepsTaken+'</div>'+
                    '<div class="subtext">steps</div>'+
                  '</div>'+
                  '<div class="barChart">'+
                    '<div class="bar" style="width:'+((cardData.stepsTaken/maxSteps)*100)+'%">'+
                    '</div>'+
                  '</div>'+

                  '<div class="ratingViz">'+
                    '<div class="largeFont">'+cardData.moodRating+'</div>'+
                    '<div class="subtext">mood rating</div>'+
                  '</div>'+
                  '<div class="barChart">'+
                    '<div class="bar" style="width:'+((cardData.moodRating/maxMood)*100)+'%">'+
                    '</div>'+
                  '</div>'+
              '</div>'+
              '<div class="tagList">'+
                '<div class="heading">objects seen</div>'+
                '<div class="tagHolder">'+
                  //currentDay.fruits.join(" ")
                    cardData.objectSeen.map(tag => '<div class="tag">'+tag+'</div>');
                '</div>'+
              '</div>'+
            '</div>';
}
