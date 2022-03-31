var intervals = new Array(); //Array, welches alle intervale speichert, sodass sie später wieder gelöscht werden können
var life = 0;
var eventon = true; //dient als lock um nicht zu springen, wenn man springt
var dist = 80; //@2DO integrate with score
var hindid = ["hind1", "hind2", "hind3", "hind4", "hind5"]; //IDs der bilddateien
var bottomid = ["bottom", "bottom2"];
var playgroundid = ["playground", "playground2"];
var sprung = false;

var cheatEnabled = 0;


function lauf() { //delay artige funktion
    intervals[5] = setInterval(function () {
        $(".lauf").toggle(); //wächselt zwischen den beiden bildern, welche in der classe ein (html) hinterlegt sind (lauf1 und lauf2)
    }, 200);
}

function playerup() { //animiert den sprung //@toDo ggf über bilder in einer klasse lösen vgl. lauf()
    sprung = true;
    $("#player").animate({ top: "350px" }, 700, "swing",
        function () {
            document.getElementById("player").src = "media/sprung2.webp";
            setTimeout(function () {
                document.getElementById("player").src = "media/sprung3.webp",
                    $("#player").animate({ top: "550px" }, 700, "swing",
                        function () {
                            document.getElementById("player").src = "media/sprung2.webp";
                            sprung = false;
                            $("#hilf").css({ "display": "block" });
                            $("#player").css({ "display": "none" });
                            eventon = true;
                            document.getElementById("horse").muted = false;
                            lauf();
                        }
                    );
            }, 200);
        }
    );
}

function hind() {//erzeugt zufällig neue Hindernisse
    var x = Math.round(Math.random() * (8)) + 1; //zuffalszahl
    if (x <= hindid.length && dist >= 70) { //verhindern, dass Hindernisse zu nah aufeinander folgen
        x = hindid[x];
        dist = 0;
        if (document.getElementById(x).style.right === "-100px") {
            document.getElementById(x).style.right = "-90px";
        }
    }

    var hindright = new Array();
    var fensterweite = parseInt(window.document.body.clientWidth, 10) + 100;

    hindid.forEach(function (currentValue, index) {
        hindright[index] = document.getElementById(currentValue).style.right;
        hindright[index] = hindright[index].substr(0, (hindright[index]).length - 2);
        hindright[index] = parseInt(hindright[index], 10);

        if (hindright[index] > -100) {
            document.getElementById(currentValue).style.right = hindright[index] + 5 + "px";
        }
        if (hindright[index] >= fensterweite) {
            document.getElementById(currentValue).style.right = "-100px";
        }
    });

    dist++;

    bottomid.forEach(function (currentValue) {
        var posit1 = document.getElementById(currentValue).style.left;
        posit1 = posit1.substr(0, posit1.length - 2);
        posit1 = parseInt(posit1, 10);

        if (posit1 <= -2480) {
            posit1 = 2475;
        } else {
            posit1 = posit1 - 5;
        }
        document.getElementById(currentValue).style.left = posit1 + "px";
    });
}

function dead() { //funktion welcheaufgerufen wird, wenn der spieler stirbt. Sie cleard alle intervalle
    //console.log("tot"); //der Tod wird auf die Webconsole ausgegeben
    sessionStorage.setItem("score", document.besuch.dauer.value); //save score to sessionStorage
    life = 0; //life wird wieder auf null gesetzt, da browser den zustand der variablen von javascript zwischenspeichert
    intervals.forEach(function (currentValue) {
        clearInterval(currentValue);
    });
    //document.getElementById("scoredisplay").value = document.besuch.dauer.value;
    document.getElementById("game").style.visibility = "hidden";
    window.location.href = "/scores/gameOver.html";
}

function lauf() { //delay artige funktion
    intervals[5] = setInterval(function () {
        $(".lauf").toggle(); //wächselt zwischen den beiden bildern, welche in der classe ein (html) hinterlegt sind (lauf1 und lauf2)
    }, 200);
}

//crash
//E = Einhorn; H = Hindernis
function collision(pH, pE) { //kollisionsdetektion für alle vier Ecken
    function checkIntervall(IntervallStart, IntervallEnde, Punkt) { //eigentliche kolliionsdetection
        return IntervallStart <= Punkt && IntervallEnde >= Punkt;
    }

    if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke3.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke3.y)) {
        life++;
    } else {
        if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke4.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke4.y)) {
            life++;
        } else {
            if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke1.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke1.y)) {
                life++;
            } else {
                if (checkIntervall(pH.Ecke1.x, pH.Ecke2.x, pE.Ecke2.x) && checkIntervall(pH.Ecke1.y, pH.Ecke4.y, pE.Ecke2.y)) {
                    life++;
                }
            }
        }
    }

    if (life === 10) { //überprüfen ob schon tot
        dead();
    }
}


var E = null; //aktuelleposition des einhorns //@2Do make einhorn one time and change in sprung()
var H = null; //aktuelle Position des hindernisses
var posHx = new Array();
var fensterweite = new Array(); //displaygröße
var xh = new Array();

function startIntervall(i) {//bewegt die hindernisse und berechnet die Position ihrer Ecken um eine kollisionsdetektions durchzuführen
    xh[i] = document.getElementById(hindid[i]).style.right; //Koordinaten Hindernis[i]
    xh[i] = xh[i].substr(0, xh[i].length - 2); //wandern des hindernisses
    xh[i] = parseInt(xh[i], 10);
    fensterweite[i] = document.body.clientWidth; //innerhalb des intervalls, falls das fenster on the fly resized wird
    fensterweite[i] = parseInt(fensterweite, 10);
    posHx[i] = fensterweite[i] - xh[i] - 100;

    if (sprung) {
        E = {
            Ecke1: { x: 50, y: 450 },
            Ecke2: { x: 150, y: 450 },
            Ecke3: { x: 150, y: 550 },
            Ecke4: { x: 50, y: 550 }
        };
    } else {
        E = {
            Ecke1: { x: 50, y: 650 },
            Ecke2: { x: 150, y: 650 },
            Ecke3: { x: 150, y: 750 },
            Ecke4: { x: 50, y: 750 }
        };
    }

    H = {
        Ecke1: { x: posHx[i], y: 650 },
        Ecke2: { x: xh[i], y: 650 },
        Ecke3: { x: xh[i], y: 750 },
        Ecke4: { x: posHx[i], y: 750 }
    };

    if (!(posHx[i] <= 0 || xh[i] <= 0)) { //wenn das hindernis NICHT hinter dem einhorn oder außerhalb des bildschirms ist
        collision(H, E); //sonst kollision prüfen
    }
}

function background() {
    playgroundid.forEach(function (currentValue) { //bewegt den Hintergrund, um eine bewegung vorzutäuschen
        var pos1 = document.getElementById(currentValue).style.left;
        pos1 = pos1.substr(0, pos1.length - 2);
        pos1 = parseInt(pos1, 10);

        if (pos1 === -3409) { //wenn das bild auserhalb des bildschirmes ist wird es wieder auf die andere seite drangehängt
            pos1 = 3408;
        } else {
            pos1 = pos1 - 1; //sonst wird es um eins weiter bewegt
        }
        document.getElementById(currentValue).style.left = pos1 + "px";
    });
}

var start = new Date();
var startzeit = start.getTime();

function pause() { //pause wird gemacht und der entstehende fehler wird korrigiert
    var aktuell = new Date();
    var correction = aktuell.getTime();
    document.getElementById("music").muted = true; //mute music
    alert("PAUSE");
    document.getElementById("music").muted = false; //reenablemusic
    aktuell = new Date();
    startzeit = startzeit + (aktuell.getTime() - correction);
}

function stoppuhr() { //berechnet die zeit, weche der nutzer auf der seite ist. Daraus entsteht der score. //diese funktion aktualisiert auch den angezeigten score
    var aktuell = new Date();
    var zeit = (aktuell.getTime() - startzeit) / 25;
    document.besuch.dauer.value = Math.round(zeit);
}

function lebenzahl() { //ähnlich wie Stoppuhr wird hier die Lebensanzeige berechnet und aktualisiert
    document.life.lifeinput.value = (((10 - life) * 10) + "%");
}


function onpress(evt) {
    var oImage = null;
    oImage = $("#player"); //reference to Image

    var oPosition = oImage.position(); //reference to Image Position

    switch (evt.keyCode) { //wenn eine Taste gedrückt wird
        case 32: //leertaste
            if (eventon) { //@2Do let playerup return a value so we wouldn't need the eventon lock
                eventon = false; //sperren, des springen, da bereits in sprung
                document.getElementById("horse").muted = true; //galopp sound stumm stellen
                document.getElementById("player").src = "media/sprung1.webp";
                clearInterval(intervals[5]);
                $(".lauf").css({ "display": "none" });
                $("#player").css({ "display": "block" });
                var win = document.body.clientWidth;
                document.getElementById("player").style.top = ("550px");
                playerup();
            }
            break;
        case 80: //p taste
            pause();
            break;
        // s saves
        // r reloads
        case 83: //s taste (suicide)
            dead();
            break;
        case 52: //Was passiert denn hier??
            cheatEnabled = 0.5;
            break;
        case 50: //Oder hier?? Ich habe leider keinen Plan xD
            if (cheatEnabled === 0.5) {
                cheatEnabled += 0.5;
            }
            break;
        case 67: //cheaten
            if (cheatEnabled === 1) {
                life = 0;
            }
            break;
        //default:
        //  alert(evt.keyCode);
    }
}


window.onload = function hindst() { //eher wie ein constructor daher auch der name hindernisSet (inzwischen nicht mehr)

    hindid.forEach(function (currentValue, index) {
        document.getElementById(currentValue).style.right = "-100px";
        intervals[0] = setInterval(startIntervall, 200, index); //ruft startIntervall periodisch auf
    });

    document.getElementById(playgroundid[0]).style.left = "0px";
    document.getElementById(playgroundid[1]).style.left = "3409px";

    document.getElementById(bottomid[0]).style.left = "0px";
    document.getElementById(bottomid[1]).style.left = "2480px";

    intervals[1] = setInterval(background, 75); //ruft background periodisch auf

    intervals[2] = setInterval(lebenzahl, 25); //ruft lebenszahl() periodisch auf

    intervals[3] = setInterval(stoppuhr, 25); //ruft stopuhr() periodisch auf (über stoppuhrIn kann diese wieder gestoppt werden)

    lauf();

    intervals[4] = setInterval(hind, 15); //ruft hind() periodisch auf

    document.addEventListener("keydown", onpress);	// if a key gets pressed the onpress function will be called
};
