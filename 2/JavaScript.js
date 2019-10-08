window.onload = hindst;

var stopein ="";
var sprung = false;
var life = 0;
var eventon = true;
var tot = false;
var dist = 80;
var hindid = ["hind1","hind2","hind3","hind4","hind5"];
var bottomid = ["bottom","bottom2"];
var playgroundid = ["playground", "playground2"];

$(document).ready(function () {
$(window).on("keydown",function(evt){   
	
	var oImage = null;
	oImage = $("#player"); //reference to Image
		
	var oPosition = oImage.position(); //reference to Image Position
	
	switch(evt.keyCode) {
        case 32:
            if (eventon) {
            eventon = false;
            document.getElementById("horse").muted = true;
            document.getElementById("player").src = "sprung1.png";
            clearInterval(stopein);
            $(".ein").css({"display":"none"});
            $("#player").css({"display":"block"});
            var win = document.body.clientWidth;
            document.getElementById("player").style.top = ("550px");
            sprung=true;
            playerup ();}
            break;
        case 80: 
            alert("PAUSE");
			/*
			speicher in cookie
			*/
            break;
        // s saves
        // r reloads
        case 67:
            life = 0;
            break;
        /*default:
            alert(evt.keyCode);*/
        
	}
});
});


function playerup () {
		  $( "#player" ).animate({
			  top:"350px"
		  },
		  700,
		  "swing",
		  function(){
			  document.getElementById("player").src = "sprung2.png";
				  setTimeout(function () { 
					document.getElementById("player").src = "sprung3.png",
					$( "#player" ).animate({
					  top:"550px"
				  },
				  700,
				  "swing",
				  function () {
					  document.getElementById("player").src = "sprung2.png";
					  sprung = false;
					  $("#hilf").css({"display":"block"});
					  $("#player").css({"display":"none"});
					  eventon = true;
					  document.getElementById("horse").muted = false;
					  lauf();
				  })
				  
			  }, 200);
		  } );

};

function hindst() {
	for(i = 0; i < hindid.length; i++){
		document.getElementById(hindid[i]).style.right = "-100px";
	}
	
    document.getElementById(playgroundid[0]).style.left = "0px";

    document.getElementById(playgroundid[1]).style.left = "3409px";

    document.getElementById(bottomid[0]).style.left = "0px";

    document.getElementById(bottomid[1]).style.left = "2480px";

    background();

    for(var i = 0;  i < hindid.length; i++){
        startIntervall(i);
    }

    stoppuhr();

    lebenzahl();

    lauf();

    hind();

}
	
function hind () {
    
    var x = Math.round(Math.random() * (10)) + 1;
    if (x < 6) {
        if (dist >= 80){
        var x = "hind" + x;
        dist = 0;
        if (document.getElementById(x).style.right == "-100px") {
            document.getElementById(x).style.right = "-90px";
        };}
    };

    var hindright = [null,null,null,null,null];
    var fernweit = parseInt(window.document.body.clientWidth) + 100 ;
    
    for (var i = 0; i < hindid.length; i++) {
        hindright[i] = document.getElementById(hindid[i]).style.right;
        hindright[i] = hindright[i].substr(0,(hindright[i]).length -2);
        hindright[i] = parseInt(hindright[i]);
        
        if (hindright[i] > -100) {
            document.getElementById(hindid[i]).style.right = hindright[i] + 5 + "px";
        }
        
        if (hindright[i] >= fernweit){
            document.getElementById(hindid[i]).style.right = "-100px"
        }
    }

    dist++;
    
    for (var i = 0; i < bottomid.length; i++){
        var posit1 = document.getElementById(bottomid[i]).style.left;
        posit1 = posit1.substr(0,posit1.length -2);
        posit1 = parseInt(posit1);
        
        if (posit1 <= -2480) {
            posit1 = 2475;
        }
        else {
            posit1 = posit1 - 5;
        }
        
        document.getElementById(bottomid[i]).style.left = posit1 + "px";
    }
    time();
}

//crash
//E = Einhorn; H = Hindernis
function collision (H,E){
	
	if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke3.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke3.y)){
		return true;
    } else {
        if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke4.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke4.y)){
            return true; 
        } else {
			if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke1.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke1.y)){ 
				return true; 
			} else {
                if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke2.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke2.y)){
                    return true; 
                } else {
                    return false;
                }
            }
        }
    }
	
	function checkIntervall(IntervallStart, IntervallEnde, Punkt){
		if (IntervallStart<= Punkt && IntervallEnde >= Punkt){
			return true;
		} else { 
			return false;
		}
	}
}

function startIntervall(i){
	var E = {};
	var H = {};
	var coll = false;
	var posHx = 0;
	var fensterweite = 0;
	var xh ="";

	setInterval (function(){
		xh = document.getElementById(hindid[i]).style.right;		// Koordinaten Hindernis 
		xh = xh.substr(0,xh.length -2);
		xh = parseInt(xh);
		fensterweite = document.body.clientWidth;
		fensterweite= parseInt(fensterweite);
		posHx=fensterweite - xh - 100;

		if (sprung){
			E = { Ecke1: { x: 50, y: 450} ,
					   Ecke2: { x: 150, y: 450},
					   Ecke3: { x: 150, y :550 },
					   Ecke4: { x: 50, y: 550}
				}
		} else{
			 E = { Ecke1: { x: 50, y: 650} ,
				   Ecke2: { x: 150, y: 650},
				   Ecke3: { x: 150, y :750 },
				   Ecke4: { x: 50, y: 750}
			}
		} //ende else


		H = { Ecke1: { x: posHx, y: 650} ,
				   Ecke2: { x: xh, y: 650},
				   Ecke3: { x: xh, y :750},
				   Ecke4: { x: posHx, y: 750}
		}


		 if (posHx<=0 || xh <=0 ){
			 return false;
		 }
		 else{
			 coll = collision(H, E);
			 if (coll){
				 life++;
				 if (life==10){
					 life= 0;
					 document.getElementById("scli").style.visibility = "hidden";
					 document.getElementById("gameoverscreen").style.visibility = "visible";
					 tot = true;
					 document.getElementById("scoredisplay").value = document.besuch.dauer.value;
				 }
			 }
		 }
		console.log(coll);
	}, 200);

} //start intervall


function time() {
    setTimeout(
        function () {
            hind();
        },
    15);
}

function lauf(){
stopein = setInterval(function () {
		  $( ".ein").toggle();
		 }, 200);
	
}

function background(){
    setInterval(
        function(){
            for(var i = 0; i < playgroundid.length; i++){
                var pos1 = document.getElementById(playgroundid[i]).style.left;
                pos1 = pos1.substr(0,pos1.length -2);
                pos1 = parseInt(pos1);
                
                if (pos1 == -3409) {
                    pos1 = 3408;
                }else {
                    pos1 = pos1 - 1;
                }
                document.getElementById(playgroundid[i]).style.left = pos1 + "px";
            }
        },
    75);
}

start = new Date();
startzeit = start.getTime();

function stoppuhr(){
    var aktuell = new Date();
    var zeit = (aktuell.getTime() - startzeit) / 25;
    document.besuch.dauer.value = Math.round(zeit);
    setTimeout(
        'test()',25);
}

function test(){
    if (!tot){
        stoppuhr();
    }
}

function lebenzahl (){
  document.life.lifeinput.value = (((10 - life)*10)+"%");
  setTimeout('lebenzahl()',25);
}
