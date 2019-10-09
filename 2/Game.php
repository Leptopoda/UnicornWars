<!DOCTYPE html>

<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>GAME</title>
        <link rel="stylesheet" type="text/css" href="CSS.css">
        <script src="jquery-1.11.3.js"></script>
        <script src="Javascript.js"></script>
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
				<img src='gameover.png'/>
			</div>
			<div id="sw" style="visibility:collapse;">
                <form action="TestScoreEintrag.php" method="post">
					<input id="scoredisplay" type="text" name="dauer" readonly="readonly"/>
			</div>
				<div id='retry' >
            
				<input type="image" src='continue.png' name="sit">
					</div>
				</form>
			
        </div>

        
        <img id="playground" src="Endhintergrund.jpg"/>
        <img id="playground2" src="Endhintergrund.jpg"/>
        
        <img id="bottom" src="Boden.jpg"/>
        <img id="bottom2" src="Boden.jpg"/>
        
        <img id="hind1" src="blumen.png" />
        <img id="hind2" src="lollis.png" />
        <img id="hind3" src="lava.png" />
        <img id="hind4" src="wasser.png" />
        <img id="hind5" src="blumen.png" />
        
        <img id="player" src="sprung2.png" style="display:none"/>
        
        <img class="ein" src="lauf1.png" style="display:block"/>
        <img class="ein" id="hilf" src="lauf3.png" style="display:none"/>

        
        <embed src="Musik.mp3" loop="true" autostart="true" hidden="true" width="0" height="0"/>
        <audio preload="auto" autoplay="true" autoplay="1" loop="true" hidden="true" width="0" height="0"><source src="Musik.mp3" type="audio/mpeg"></audio>
        <embed id="horse" src="Horse Gallop Sound Effect.mp3" muted="false" loop="true" autostart="true" hidden="true" width="0" height="0"/>
        <audio id="horse" muted="false" preload="auto" autoplay="true" autoplay="1" loop="true" hidden="true" width="0" height="0"><source src="Horse Gallop Sound Effect.mp3" type="audio/mpeg"></audio>
    </body>
</html>
