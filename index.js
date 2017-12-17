var change = 0;
var adjective = '';
setInterval(function(){
 switch(change){
    case 0:
      adjective = "attractive";
      document.getElementById('adjective').style.color = "#01FEFF";
      break;
    case 1:
      adjective = "interesting";
      document.getElementById('adjective').style.color = "#EEFF02";
      break;
    case 2:
      adjective = "exciting";
      document.getElementById('adjective').style.color = "#FFFD03";
      break;
    case 3:
      adjective = "accessible";
      document.getElementById('adjective').style.color = "#01FEFF";
      break;
    case 4:
      adjective = "successful";
      document.getElementById('adjective').style.color = "#EEFF02";
      break;
    case 5:
      adjective = "transformative";
      document.getElementById('adjective').style.color = "#FFFD03";
      break;
  }
  
  document.getElementById("adjective").innerHTML = adjective;
  if(change === 5){
    change = 0;
  } else {
    change++;
  }
  
},3000)
