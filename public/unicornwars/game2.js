window.onload = function(){
  lauf();
}

function lauf(){ //delay artige funktion
  playerIntervall = setInterval(function(){
    $( ".lauf").toggle(); //wächselt zwischen den beiden bildern, welche in der classe ein (html) hinterlegt sind (lauf1 und lauf2)
  }, 200);
}
