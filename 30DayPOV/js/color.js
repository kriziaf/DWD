// <!--
// THIS IS THE LIB WE USE: https://github.com/akfish/node-vibrant/
// and the vo=ibrant.js file comes fro a strange place
// download "vibrant.3.0.0-alpha.2.zip"
// from https://github.com/akfish/node-vibrant/releases
// and use vibrant.js or the minified version
//  -->

// <!-- Debug version -->
<script src="vibrant.js"></script>
// <!-- Uglified version -->

<script>
  // Use `Vibrant` in script
  // Vibrant is exported to global. window.Vibrant === Vibrant
  // Promise
  Vibrant.from('22267158.jpg').getPalette().then(function(palette) {
      console.log(palette);
    var k = Object.keys(palette);
for(key of k){
	var rgb = palette[key]._rgb;
	var d = document.createElement('div');
	d.style.width = "100px";
	d.style.height = "100px";
	d.style.backgroundColor = "rgba("+rgb[0]+","+ rgb[1]+"," +rgb[2]+", 1)";
	document.body.appendChild(d);
}
  });
</script>

// function extractColor() {
//     // Use `Vibrant` in script
//     // Vibrant is exported to global. window.Vibrant === Vibrant
//     // Promise
//     Vibrant.from(cardData.imageURL).getPalette().then(function(palette) {
//         console.log(cardData.imageURL);
//     //     var k = Object.keys(palette);
//     //       for(key of k){
//     //         var rgb = palette[key]._rgb;
//     //         var d = document.createElement('div');
//     //         d.style.width = "100px";
//     //         d.style.height = "100px";
//     //         d.style.backgroundColor = "rgba("+rgb[0]+","+ rgb[1]+"," +rgb[2]+", 1)";
//     //         document.body.appendChild(d);
//
//     })
