window.onload = hindst;

var stopein ="";
var sprung = false;
var life = 0;
var eventon = true;
var tot = false;
var dist = 80;

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
            break;
        case 67:
            life = 0;
            break;
        /*default:
            alert(evt.keyCode);*/
        
	};
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
document.getElementById("hind1").style.right = "-100px";

document.getElementById("hind2").style.right = "-100px";

document.getElementById("hind3").style.right = "-100px";

document.getElementById("hind4").style.right = "-100px";

document.getElementById("hind5").style.right = "-100px";

document.getElementById("playground").style.left = "0px";

document.getElementById("playground2").style.left = "3409px";

document.getElementById("bottom").style.left = "0px";

document.getElementById("bottom2").style.left = "2480px";

background();

startIntervall1();
startIntervall2();
startIntervall3();
startIntervall4();
startIntervall5();

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
		
		var hind1right = document.getElementById("hind1").style.right;		// Hindernis 1
		hind1right = hind1right.substr(0,hind1right.length -2);
		hind1right = parseInt(hind1right);
		hind1rightz = hind1right; 

		if (hind1right > -100) {
			hind1right = hind1right + 5;
			hind1right = hind1right + "px";
			document.getElementById("hind1").style.right = hind1right;
		};
		
		
		
		var hind2right = document.getElementById("hind2").style.right;		// Hindernis 2
		hind2right = hind2right.substr(0,hind2right.length -2);
		hind2right = parseInt(hind2right);
		hind2rightz = hind2right; 

		if (hind2right > -100) {
			hind2right = hind2right + 5;
			hind2right = hind2right + "px";
			document.getElementById("hind2").style.right = hind2right;
		};
		
		
		
		var hind3right = document.getElementById("hind3").style.right;		// Hindernis 3
		hind3right = hind3right.substr(0,hind3right.length -2);
		hind3right = parseInt(hind3right);
		hind3rightz = hind3right; 

		if (hind3right > -100) {
			hind3right = hind3right + 5;
			hind3right = hind3right + "px";
			document.getElementById("hind3").style.right = hind3right;
		};
		
		
		
		var hind4right = document.getElementById("hind4").style.right;		// Hindernis 4
		hind4right = hind4right.substr(0,hind4right.length -2);
		hind4right = parseInt(hind4right);
		hind4rightz = hind4right; 

		if (hind4right > -100) {
			hind4right = hind4right + 5;
			hind4right = hind4right + "px";
			document.getElementById("hind4").style.right = hind4right;
		};
		
		
		
		var hind5right = document.getElementById("hind5").style.right;		// Hindernis 5
		hind5right = hind5right.substr(0,hind5right.length -2);
		hind5right = parseInt(hind5right);
		hind5rightz = hind5right; 

		if (hind5right > -100) {
			hind5right = hind5right + 5;
			hind5right = hind5right + "px";
			document.getElementById("hind5").style.right = hind5right;
		};
		
		var fernweit = 0;
		fernweit = window.document.body.clientWidth ;
		fernweit = parseInt(fernweit) + 100 ;
		
		if (hind1rightz >= fernweit) {document.getElementById("hind1").style.right = "-100px"};
		if (hind2rightz >= fernweit) {document.getElementById("hind2").style.right = "-100px"};
		if (hind3rightz >= fernweit) {document.getElementById("hind3").style.right = "-100px"};
		if (hind4rightz >= fernweit) {document.getElementById("hind4").style.right = "-100px"};
		if (hind5rightz >= fernweit) {document.getElementById("hind5").style.right = "-100px"};
		
		dist++;
			
		var posit1 = document.getElementById("bottom").style.left;
		posit1 = posit1.substr(0,posit1.length -2);
		posit1 = parseInt(posit1);
	
		var posit2 = document.getElementById("bottom2").style.left;
		posit2 = posit2.substr(0,posit2.length -2);
		posit2 = parseInt(posit2);
		
		if (posit1 <= -2480) {
		posit1 = 2475;
		}
		else {
		posit1 = posit1 - 5;
		}
		
		if (posit2 <= -2480) {
		posit2 = 2475;
		}
		else {
		posit2 = posit2 - 5;
		}
	
		posit1 = posit1 + "px";
		posit2 = posit2 + "px";
	
		document.getElementById("bottom").style.left = posit1;
		document.getElementById("bottom2").style.left = posit2;
	
		time();
}	

//crash
//E = Einhorn; H = Hindernis
function collision (H,E){
	
	if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke3.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke3.y)){
		return true;
		} 
	else {
		if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke4.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke4.y)){
			return true; 
			}	
		else {
			if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke1.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke1.y)){ 
				return true; 
				}	
			else {
				if (checkIntervall(H.Ecke1.x, H.Ecke2.x, E.Ecke2.x) && checkIntervall(H.Ecke1.y, H.Ecke4.y, E.Ecke2.y)){
					return true; 
					}	
				else {
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
	};
}

function startIntervall1(){
	var E1 = {};
	var H1 = {};
	var coll = false;
	var posH1x = 0;
	var fensterweite = 0;
	var xh ="";

setInterval (function(){
	xh = document.getElementById("hind1").style.right;		// Koordinaten Hindernis 
	xh = xh.substr(0,xh.length -2);
	xh = parseInt(xh);
	fensterweite = document.body.clientWidth;
	fensterweite= parseInt(fensterweite);
	posH1x=fensterweite - xh - 100;

	if (sprung == true){
		E1 = { Ecke1: { x: 50, y: 450} ,
				   Ecke2: { x: 150, y: 450},
				   Ecke3: { x: 150, y :550 },
				   Ecke4: { x: 50, y: 550}
			}
	} else{
		 E1 = { Ecke1: { x: 50, y: 650} ,
			   Ecke2: { x: 150, y: 650},
			   Ecke3: { x: 150, y :750 },
			   Ecke4: { x: 50, y: 750}
		}
	} //ende else


	H1 = { Ecke1: { x: posH1x, y: 650} ,
			   Ecke2: { x: xh, y: 650},
			   Ecke3: { x: xh, y :750},
			   Ecke4: { x: posH1x, y: 750}
	}


	 if (posH1x<=0 || xh <=0 ){
		 return false;
	 }
	 else{
		 coll = collision(H1, E1);
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

} //start intervall1

function startIntervall2(){
	var E2 = {};
	var H2 = {};
	var coll = false;
	var posH2x = 0;
	var fensterweite = 0;
	var xh2 ="";

setInterval (function(){
	xh2 = document.getElementById("hind2").style.right;		// Koordinaten Hindernis 
	xh2 = xh2.substr(0,xh2.length -2);
	xh2 = parseInt(xh2);
	fensterweite = document.body.clientWidth;
	fensterweite= parseInt(fensterweite);
	posH2x=fensterweite - xh2 - 100;

	if (sprung == true){
		E2 = { Ecke1: { x: 50, y: 450} ,
				   Ecke2: { x: 150, y: 450},
				   Ecke3: { x: 150, y :550 },
				   Ecke4: { x: 50, y: 550}
			}
	} else{
		 E2 = { Ecke1: { x: 50, y: 650} ,
			   Ecke2: { x: 150, y: 650},
			   Ecke3: { x: 150, y :750 },
			   Ecke4: { x: 50, y: 750}
		}
	} //ende else


	H2 = { Ecke1: { x: posH2x, y: 650} ,
			   Ecke2: { x: xh2, y: 650},
			   Ecke3: { x: xh2, y :750},
			   Ecke4: { x: posH2x, y: 750}
	}


	 if (posH2x<=0 || xh2 <=0 ){
		 return false;
	 }
	 else{
		 coll = collision(H2, E2);
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

} //start intervall2

function startIntervall3(){
	var E3 = {};
	var H3 = {};
	var coll = false;
	var posH3x = 0;
	var fensterweite = 0;
	var xh3 ="";
	
setInterval (function(){
	xh3 = document.getElementById("hind3").style.right;		// Koordinaten Hindernis 
	xh3 = xh3.substr(0,xh3.length -2);
	xh3 = parseInt(xh3);
	fensterweite = document.body.clientWidth;
	fensterweite= parseInt(fensterweite);
	posH3x=fensterweite - xh3 - 100;

	if (sprung == true){
		E3 = { Ecke1: { x: 50, y: 450} ,
				   Ecke2: { x: 150, y: 450},
				   Ecke3: { x: 150, y :550 },
				   Ecke4: { x: 50, y: 550}
			}
	} else{
		 E3 = { Ecke1: { x: 50, y: 650} ,
			   Ecke2: { x: 150, y: 650},
			   Ecke3: { x: 150, y :750 },
			   Ecke4: { x: 50, y: 750}
		}
	} //ende else


	H3 = { Ecke1: { x: posH3x, y: 650} ,
			   Ecke2: { x: xh3, y: 650},
			   Ecke3: { x: xh3, y :750},
			   Ecke4: { x: posH3x, y: 750}
	}


	 if (posH3x<=0 || xh3 <=0 ){
		 return false;
	 }
	 else{
		 coll = collision(H3, E3);
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

} //start intervall3

function startIntervall4(){
	var E4 = {};
	var H4 = {};
	var coll = false;
	var posH4x = 0;
	var fensterweite = 0;
	var xh4 ="";

setInterval (function(){
	xh4 = document.getElementById("hind4").style.right;		// Koordinaten Hindernis 
	xh4 = xh4.substr(0,xh4.length -2);
	xh4 = parseInt(xh4);
	fensterweite = document.body.clientWidth;
	fensterweite= parseInt(fensterweite);
	posH4x=fensterweite - xh4 - 100;

	if (sprung == true){
		E4 = { Ecke1: { x: 50, y: 450} ,
				   Ecke2: { x: 150, y: 450},
				   Ecke3: { x: 150, y :550 },
				   Ecke4: { x: 50, y: 550}
			}
	} else{
		 E4 = { Ecke1: { x: 50, y: 650} ,
			   Ecke2: { x: 150, y: 650},
			   Ecke3: { x: 150, y :750 },
			   Ecke4: { x: 50, y: 750}
		}
	} //ende else


	H4 = { Ecke1: { x: posH4x, y: 650} ,
			   Ecke2: { x: xh4, y: 650},
			   Ecke3: { x: xh4, y :750},
			   Ecke4: { x: posH4x, y: 750}
	}


	 if (posH4x<=0 || xh4 <=0 ){
		 return false;
	 }
	 else{
		 coll = collision(H4, E4);
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

} //start intervall4

function startIntervall5(){
	var E5 = {};
	var H5 = {};
	var coll = false;
	var posH5x = 0;
	var fensterweite = 0;
	var xh5 ="";

setInterval (function(){
	xh5 = document.getElementById("hind5").style.right;		// Koordinaten Hindernis 
	xh5 = xh5.substr(0,xh5.length -2);
	xh5 = parseInt(xh5);
	fensterweite = document.body.clientWidth;
	fensterweite= parseInt(fensterweite);
	posH5x=fensterweite - xh5 - 100;

	if (sprung == true){
		E5 = { Ecke1: { x: 50, y: 450} ,
				   Ecke2: { x: 150, y: 450},
				   Ecke3: { x: 150, y :550 },
				   Ecke4: { x: 50, y: 550}
			}
	} else{
		 E5 = { Ecke1: { x: 50, y: 650} ,
			   Ecke2: { x: 150, y: 650},
			   Ecke3: { x: 150, y :750 },
			   Ecke4: { x: 50, y: 750}
		}
	} //ende else


	H5 = { Ecke1: { x: posH5x, y: 650} ,
			   Ecke2: { x: xh5, y: 650},
			   Ecke3: { x: xh5, y :750},
			   Ecke4: { x: posH5x, y: 750}
	}


	 if (posH5x<=0 || xh5 <=0 ){
		 return false;
	 }
	 else{
		 coll = collision(H5, E5);
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

} //start intervall5

function time() {
		setTimeout(function () {
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
	
	setInterval( function(){	
	var pos1 = document.getElementById("playground").style.left;
	pos1 = pos1.substr(0,pos1.length -2);
	pos1 = parseInt(pos1);
	
	var pos2 = document.getElementById("playground2").style.left;
	pos2 = pos2.substr(0,pos2.length -2);
	pos2 = parseInt(pos2);

	if (pos1 == -3409) {
		pos1 = 3408;
	}
	else {
		pos1 = pos1 - 1;
	}
		
	if (pos2 == -3409) {
		pos2 = 3408;
	}
	else {
		pos2 = pos2 - 1;
	}
	
	pos1 = pos1 + "px";
	pos2 = pos2 + "px";
	
	document.getElementById("playground").style.left = pos1;
	document.getElementById("playground2").style.left = pos2;
	},
	
	75);
	
};

start = new Date();
startzeit = start.getTime();

function stoppuhr()
{
  var aktuell = new Date();
  var zeit = (aktuell.getTime() - startzeit) / 25;
  document.besuch.dauer.value = Math.round(zeit);
  setTimeout(
		  'test()',25);
};

function test(){
	if (!tot)
	  {stoppuhr();}
}

function lebenzahl ()
{
  document.life.lifeinput.value = (((10 - life)*10)+"%");
  setTimeout('lebenzahl()',25);
};
