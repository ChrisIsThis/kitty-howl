var change = 0;
var adjective = '';
setInterval(function(){
 switch(change){
    case 0:
      adjective = "attractive";
  
      break;
    case 1:
      adjective = "interesting";

      break;
    case 2:
      adjective = "exciting";

      break;
    case 3:
      adjective = "accessible";

      break;
    case 4:
      adjective = "successful";

      break;
    case 5:
      adjective = "transformative";

      break;
  }
  
  document.getElementById("adjective").innerHTML = adjective;
  if(change === 5){
    change = 0;
  } else {
    change++;
  }
  
},3000)
var textArray = document.getElementById('coming-soon').innerHTML.split('')
var colorArray = [];
var counter = 0;

setInterval(function(){
  for (var x = 0; x < textArray.length; x++){
    var color;
    if (counter % 3 === 0){
      color = "#01FEFF";
    } else if (counter % 3  === 1){
      color = "#E90DED";
    } else if (counter % 3  === 2){
      color = "#FFFD03";
    }
    var newText = "<span style='color: " + color + "'>" + textArray[x] + "</span>"
    colorArray.push(newText);
    counter++;
  }
  document.getElementById("coming-soon").innerHTML = colorArray.join('');
  colorArray = [];
},500);
