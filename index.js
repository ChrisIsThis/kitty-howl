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
  }
  
  document.getElementById("adjective").innerHTML = adjective;
  if(change === 4){
    change = 0;
  } else {
    change++;
  }
  
},3000)
