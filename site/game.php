<!DOCTYPE html>

<html>
    <head>
        <title>GAME</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<link rel="stylesheet" type="text/css" href="../Styles/game.css">
	<script src="../scripts/jquery-3.4.1.min.js"></script>
        <script src="../scripts/Game.js"></script>
    </head>

    <body>
        
		<div class="container" id='gameoverscreen'>
			<div class="item">
				<img class="item" src='../Images/gameover.webp'/>
			</div>
			
			<form action="../site/gameOver.php" method="post">
				<div class="item">
					<input class="item" id="scoredisplay" type="text" name="dauer" readonly="readonly"/>
				</div>

				<div class="item">
					<input class="item" type="image" src='../Images/continue.webp' name="sit">
				</div>
			</form>
		</div>
        

        <div id="game">
			<div id="scli">
				<form name="besuch">
					SCORE <br> <input name="dauer" size="10"/> 
				</form>
				<form name = "life">
					LIFE <br> <input name="lifeinput" size="10"/>
				</form>
			</div>
			
			<img id="playground" src="../Images/Endhintergrund.webp"/>
			<img id="playground2" src="../Images/Endhintergrund.webp"/>
			
			<img id="bottom" src="../Images/Boden.webp"/>
			<img id="bottom2" src="../Images/Boden.webp"/>
			
			<img id="hind1" src="../Images/blumen.webp"/>
			<img id="hind2" src="../Images/lollis.webp"/>
			<img id="hind3" src="../Images/lava.webp"/>
			<img id="hind4" src="../Images/wasser.webp"/>
			<img id="hind5" src="../Images/blumen.webp"/>
			
			<img id="player" src="../Images/sprung2.webp" style="display:none"/>
			
			<img class="lauf" src="../Images/lauf1.webp" style="display:block"/>
			<img class="lauf" id="hilf" src="../Images/lauf3.webp" style="display:none"/>
		</div>
        

        
        <embed id="music" src="../Audio/Musik.mp3" loop="true" autostart="true" hidden="true" width="0" height="0"/>
        <audio id="music" preload="auto" autoplay="true" autoplay="1" loop="true" hidden="true" width="0" height="0"><source src="../Audio/Musik.mp3" type="audio/mpeg"></audio>
        <embed id="horse" src="../Audio/Horse Gallop Sound Effect.mp3" muted="false" loop="true" autostart="true" hidden="true" width="0" height="0"/>
        <audio id="horse" muted="false" preload="auto" autoplay="true" autoplay="1" loop="true" hidden="true" width="0" height="0"><source src="../Audio/Horse Gallop Sound Effect.mp3" type="audio/mpeg"></audio>
    </body>
</html>
