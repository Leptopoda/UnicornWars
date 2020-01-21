<!DOCTYPE html>

<html>
    <head>
        <title>GAME</title>
        <link rel="stylesheet" type="text/css" href="/3/Styles/Neu.css">
        <script src="/3/scripts/jquery-1.11.3.js"></script>
        <script src="/3/scripts/Game.js"></script>
    </head>

    <body>
        <div id="scli">
            <form name="besuch">
                SCORE <br> <input name="dauer" size="10"/> 
            </form>
            <form name = "life">
                LIFE <br> <input name="lifeinput" size="10"/>
            </form>
        </div>
        <div id='gameoverscreen'>
            <div id='gameover'>
                <img src='/3/Images/gameover.png'/>
            </div>
            <div id="sw" style="visibility:collapse;">
                <form action="/3/site/gameOver.php" method="post">
                    <input id="scoredisplay" type="text" name="dauer" readonly="readonly"/>
            </div>
                <div id='retry' >
            
                <input type="image" src='/3/Images/continue.png' name="sit">
                    </div>
                </form>
        </div>

        
        <img id="playground" src="/3/Images/Endhintergrund.png"/>
        <img id="playground2" src="/3/Images/Endhintergrund.png"/>
        
        <img id="bottom" src="/3/Images/Boden.png"/>
        <img id="bottom2" src="/3/Images/Boden.png"/>
        
        <img id="hind1" src="/3/Images/blumen.png" />
        <img id="hind2" src="/3/Images/lollis.png" />
        <img id="hind3" src="/3/Images/lava.png" />
        <img id="hind4" src="/3/Images/wasser.png" />
        <img id="hind5" src="/3/Images/blumen.png" />
        
        <img id="player" src="/3/Images/sprung2.png" style="display:none"/>
        
        <img class="ein" src="/3/Images/lauf1.png" style="display:block"/>
        <img class="ein" id="hilf" src="/3/Images/lauf3.png" style="display:none"/>

        
        <embed src="/3/Audio/Musik.mp3" loop="true" autostart="true" hidden="true" width="0" height="0"/>
        <audio preload="auto" autoplay="true" autoplay="1" loop="true" hidden="true" width="0" height="0"><source src="/3/Audio/Musik.mp3" type="audio/mpeg"></audio>
        <embed id="horse" src="/3/Audio/Horse Gallop Sound Effect.mp3" muted="false" loop="true" autostart="true" hidden="true" width="0" height="0"/>
        <audio id="horse" muted="false" preload="auto" autoplay="true" autoplay="1" loop="true" hidden="true" width="0" height="0"><source src="/3/Audio/Horse Gallop Sound Effect.mp3" type="audio/mpeg"></audio>
    </body>
</html>
