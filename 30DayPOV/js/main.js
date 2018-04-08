// CUSTOM JS FILE //
window.addEventListener('load', init);

var jsonData = [
    {
       "name" : "Day 1",
        "imageURL": "https://media.giphy.com/media/5qFZ7TNV2lOSsFeu2N/giphy.gif",
        "location": "home",
        "stepsTaken": 10,
        "objectSeen": ["traffic", "people"],
        "activity": ["waiting"],
        "moodRating": 3
    },
    {
        "name": "Day 2",
        "imageURL": "https://media.giphy.com/media/YlIC2TqOFeIDvzImEm/giphy.gif",
        "location": "train",
        "stepsTaken": 6,
        "objectSeen": ["seats", "coffee"],
        "activity": ["traveling"],
        "moodRating": 2
    },
    {
        "name": "Day 3",
        "imageURL": "https://media.giphy.com/media/3tFmaH4f9JEze84r9D/giphy.gif",
        "location": "park",
        "stepsTaken": 5,
        "activity": ["walking, laughing"],
        "objectSeen": [
            "feet",
            "people",
            "trees",
        ],
        "moodRating": 5
    }
]


function init() {
        renderCards();
  //       $.ajax({
  //       url: './data/data.json',
  //       type: 'GET',
  //       failure: function(err){
  //           console.log('something went wrong :(');
  //       },
  //       success: function(response){
  //           //console.log(response);
  //           renderCards()(response);
  //           for (i = 0; i < jsonData.length; i++) {
  //           var card = buildCard(jsonData[i]);
  //           $("#cardHolder").append(card);
  //
  //         }
  //       }
  //   })
  // }
}

function renderCards() {
    for (i = 0; i < jsonData.length; i++) {
        var card = buildCard(jsonData[i]);
        $("#cardHolder").append(card);
    }
}

function buildCard(cardData){
    return  '<div class="card">'+
              '<div class="header border">'+
                  '<img src="'+cardData.imageURL+'">'+
                  '<h1>'+cardData.name+'</h1>'+
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
                    '<div class="bar" style="width:'+cardData.stepsTaken*5+'%">'+
                    '</div>'+
                  '</div>'+

                  '<div class="ratingViz">'+
                    '<div class="largeFont">'+cardData.moodRating+'</div>'+
                    '<div class="subtext">mood rating</div>'+
                  '</div>'+
                  '<div class="barChart">'+
                    '<div class="bar" style="width:'+cardData.moodRating*5+'%">'+
                    '</div>'+
                  '</div>'+

              '</div>'+
              '<div class="tagList">'+
                '<div class="heading">objects seen</div>'+
                '<div class="tagHolder">'+
                    cardData.objectSeen.map(tag => '<div class="tag">'+tag+'</div>');
                '</div>'+
              '</div>'+
            '</div>';
}
