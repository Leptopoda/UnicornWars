window.onload = hindst; //aufrufen der startfunktion "hindst" (main)

var laufIn =""; //ID für das LaufenIntervall
var stoppuhrIn = ""; //ID für das StoppuhrIntervall
var sprung = false;
var life = 0;
var eventon = true; //dient als lock um nicht zu springen, wenn man springt
var dist = 80; //@2DO integrate with score
var hindid = ["hind1","hind2","hind3","hind4","hind5"]; //IDs der bilddateien
var bottomid = ["bottom","bottom2"];
var playgroundid = ["playground", "playground2"];

var cheatEnabled = 0;

$(document).ready(function () {
$(window).on("keydown",function(evt){   
    
    var oImage = null;
    oImage = $("#player"); //reference to Image
        
    var oPosition = oImage.position(); //reference to Image Position
    
    switch(evt.keyCode) { //wenn eine Taste gedrückt wird
        case 32: //leertaste
            if (eventon) {
                eventon = false; //sperren, des springen, da bereits in sprung
                document.getElementById("horse").muted = true; //galopp sound stumm stellen
                document.getElementById("player").src = "../Images/sprung1.webp";
                clearInterval(laufIn);
                $(".ein").css({"display":"none"});
                $("#player").css({"display":"block"});
                var win = document.body.clientWidth;
                document.getElementById("player").style.top = ("550px");
                sprung=true;
                playerup();
            }
            break;
        case 80: //p taste
            pause();
            break;
        // s saves
        // r reloads
        case 83: //s taste
            life=10;
            lifeCheck();
            break;
        case 52: //Was passiert denn hier??
            cheatEnabled = 0.5;
            break;
        case 50: //Oder hier?? Ich habe leider keinen Plan xD
            if(cheatEnabled == 0.5){
                cheatEnabled += 0.5;
            }
            break;
        case 67: //cheaten
            if (cheatEnabled == 1){
                life=0;
            }
            break;
        //default:
        //  alert(evt.keyCode);
    }
});
});


function playerup () { //animiert den sprung //@toDo ggf über bilder in einer klasse lösen vgl. lauf()
    $( "#player" ).animate({
        top:"350px"
        },
        700,
        "swing",
        function(){
            document.getElementById("player").src = "../Images/sprung2.webp";
            setTimeout(function() { 
                document.getElementById("player").src = "../Images/sprung3.webp",
                $( "#player" ).animate({
                    top:"550px"
                    },
                    700,
                    "swing",
                    function() {
                      document.getElementById("player").src = "../Images/sprung2.webp";
                      sprung = false;
                      $("#hilf").css({"display":"block"});
                      $("#player").css({"display":"none"});
                      eventon = true;
                      document.getElementById("horse").muted = false;
                      lauf();
                    }
                ) 
            }, 200);
        } 
    );
};

function hindst() { //eher wie ein constructor daher auch der name hindernisSet (inzwischen nicht mehr)
    for(i = 0; i < hindid.length; i++){
        document.getElementById(hindid[i]).style.right = "-100px";
    }
    
    document.getElementById(playgroundid[0]).style.left = "0px";
    document.getElementById(playgroundid[1]).style.left = "3409px";

    document.getElementById(bottomid[0]).style.left = "0px";
    document.getElementById(bottomid[1]).style.left = "2480px";

    setInterval(background, 75); //ruft background periodisch auf

    for(var i = 0;  i < hindid.length; i++){ //für jedes hindernis
        setInterval(startIntervall,200,i); //ruft startIntervall periodisch auf
    }

    setInterval(lebenzahl, 25); //ruft lebenszahl() periodisch auf
    
    stoppuhrIn = setInterval(stoppuhr, 25); //ruft stopuhr() periodisch auf (über stoppuhrIn kann diese wieder gestoppt werden)

    lauf();

    setInterval(hind, 15); //ruft hind() periodisch auf
}
    
function hind() {//erzeugt zufällig neue Hindernisse
    var x = Math.round(Math.random() * (10)) + 1; //zuffalszahl
    if (x <= hindid.length && dist >= 80) { //verhindern, dass Hindernisse zu nah aufeinander folgen
        x = "hind" + x; 
        dist = 0;
        if (document.getElementById(x).style.right == "-100px") {
            document.getElementById(x).style.right = "-90px";
        }
    }

    var hindright = [null,null,null,null,null];
    var fensterweite = parseInt(window.document.body.clientWidth) + 100 ;
    
    for (var i = 0; i < hindid.length; i++) {
        hindright[i] = document.getElementById(hindid[i]).style.right;
        hindright[i] = hindright[i].substr(0,(hindright[i]).length -2);
        hindright[i] = parseInt(hindright[i]);
        
        if (hindright[i] > -100) {
            document.getElementById(hindid[i]).style.right = hindright[i] + 5 + "px";
        }
        if (hindright[i] >= fensterweite){
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
        }else{
            posit1 = posit1 - 5;
        }   
        document.getElementById(bottomid[i]).style.left = posit1 + "px";
    }
}

//crash
//E = Einhorn; H = Hindernis
function collision (pH,pE){ //kollisionsdetektion für alle vier Ecken
    if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke3.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke3.y)){
        life++;
    } else {
    if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke4.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke4.y)){
        life++; 
    } else {
    if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke1.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke1.y)){ 
        life++; 
    } else {
    if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke2.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke2.y)){
        life++; 
    }}}}
    
    lifeCheck(); //überprüfen ob schon tot
    
    function checkIntervall(IntervallStart, IntervallEnde, Punkt){ //eigentliche kolliionsdetection
        return IntervallStart <= Punkt && IntervallEnde >= Punkt;
    }
}


var E = [{},{},{},{},{}];
var H = [{},{},{},{},{}];
var posHx = [0,0,0,0,0];
var fensterweite = [0,0,0,0,0];
var xh = ["","","","",""];

function startIntervall(i){//bewegt die hindernisse und berechnet die Position ihrer Ecken um eine kollisionsdetektions durchzuführen
    xh[i] = document.getElementById(hindid[i]).style.right; //Koordinaten Hindernis[i]
    xh[i] = xh[i].substr(0,xh[i].length -2); //wandern des hindernisses
    xh[i] = parseInt(xh[i]);
    fensterweite[i] = document.body.clientWidth; //innerhalb des intervalls, falls das fenster on the fly resized wird
    fensterweite[i] = parseInt(fensterweite);
    posHx[i] = fensterweite[i] - xh[i] - 100; 

    if(sprung){
        E[i] = { Ecke1: { x: 50, y: 450} ,
              Ecke2: { x: 150, y: 450},
              Ecke3: { x: 150, y :550 },
              Ecke4: { x: 50, y: 550}
            }
    }else{
         E[i] = { Ecke1: { x: 50, y: 650} ,
               Ecke2: { x: 150, y: 650},
               Ecke3: { x: 150, y :750 },
               Ecke4: { x: 50, y: 750}
        }
    }

    H[i] = { Ecke1: { x: posHx[i], y: 650} ,
          Ecke2: { x: xh[i], y: 650},
          Ecke3: { x: xh[i], y :750},
          Ecke4: { x: posHx[i], y: 750}
    }

    if(!(posHx[i]<=0 || xh[i] <=0)){ //wenn das hindernis NICHT hinter dem einhorn oder auserhalb des bildschirms ist
        collision(H[i], E[i]); //sonst kollision prüfen
    }
}


function lifeCheck(){ //überprüft den tot und geht zum gameoverscreen über
    if (life==10){
        console.log("tot"); //der Tod wird auf die Webconsole ausgegeben
        life = 0; //life wird wieder auf null gesetzt, da browser den zustand der variablen von javascript zwischenspeichert
        document.getElementById("scli").style.visibility = "hidden";
        document.getElementById("gameoverscreen").style.visibility = "visible";
        clearInterval(stoppuhrIn);
        document.getElementById("scoredisplay").value = document.besuch.dauer.value;
    }
}

function lauf(){ //delay artige funktion
    laufIn = setInterval(function(){
        $( ".ein").toggle(); //wächselt zwischen den beiden bildern, welche in der classe ein (html) hinterlegt sind (lauf1 und lauf2)
    }, 200);
}

function background(){ //bewegt den Hintergrund, um eine bewegung vorzutäuschen
    for(var i = 0; i < playgroundid.length; i++){
        var pos1 = document.getElementById(playgroundid[i]).style.left;
        pos1 = pos1.substr(0,pos1.length -2);
        pos1 = parseInt(pos1);
        
        if(pos1 == -3409){ //wenn das bild auserhalb des bildschirmes ist wird es wieder auf die andere seite drangehängt
            pos1 = 3408;
        }else{
            pos1 = pos1 - 1; //sonst wird es um eins weiter bewegt
        }
        document.getElementById(playgroundid[i]).style.left = pos1 + "px";
    }
}

start = new Date();
startzeit = start.getTime();

function pause(){ //pause wird gemacht und der entstehende fehler wird korrigiert
    var aktuell = new Date();
    var correction = aktuell.getTime();
    
    alert("PAUSE");
    
    aktuell = new Date();
    startzeit = startzeit + (aktuell.getTime() - correction);
}

function stoppuhr(){ //berechnet die zeit, weche der nutzer auf der seite ist. Daraus entsteht der score. //diese funktion aktualisiert auch den angezeigten score
    var aktuell = new Date();
    var zeit = (aktuell.getTime() - startzeit) / 25;
    document.besuch.dauer.value = Math.round(zeit);
}

function lebenzahl (){ //ähnlich wie Stoppuhr wird hier die Lebensanzeige berechnet und aktualisiert
  document.life.lifeinput.value = (((10 - life)*10)+"%");
}
