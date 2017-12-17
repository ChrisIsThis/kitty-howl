var change = 0;
var adjective = '';
setInterval(function(){
 switch(change){
    case 0:
      adjective = "attractive";
      document.getElementById('coming-soon').style.color = "#01FEFF";
      break;
    case 1:
      adjective = "interesting";
      document.getElementById('coming-soon').style.color = "#E90DED";
      break;
    case 2:
      adjective = "exciting";
      document.getElementById('coming-soon').style.color = "#FFFD03";
      break;
    case 3:
      adjective = "accessible";
      document.getElementById('coming-soon').style.color = "#01FEFF";
      break;
    case 4:
      adjective = "successful";
      document.getElementById('coming-soon').style.color = "#E90DED";
      break;
    case 5:
      adjective = "transformative";
      document.getElementById('coming-soon').style.color = "#FFFD03";
      break;
  }
  
  document.getElementById("adjective").innerHTML = adjective;
  if(change === 5){
    change = 0;
  } else {
    change++;
  }
  
},3000)
