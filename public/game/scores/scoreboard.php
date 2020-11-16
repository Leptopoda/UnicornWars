<!DOCTYPE html>

<html>
    <head>
        <title>scoreboard</title>
        <link rel="stylesheet" type="text/css" href="../../main/main.css">
		<link rel="stylesheet" type="text/css" href="scoreboard.css">
    </head>

    <body>
        <div id='divplatzt'>
            <img src="./media/platz.webp" alt="platz_schrift">
        </div>
        <div id='divnamet'>
            <img src="./media/name.webp" alt="name_schrift">
        </div>
        <div id='divscoret'>
            <img src="./media/score.webp" alt="score_schrift">
        </div>

        <div id='divplayagain' >
            <a href="../unicornwars/game.php"><img src="./media/playagain.webp" alt="playagain_schrift" /></a>
        </div>

        <?php
			require_once('../../main/db.php');
            
			$sql = "SELECT * FROM scoreboard ORDER BY score desc";
			ausgabe(queryDB($sql));
			
            function ausgabe($daten){
                echo "<table><tr></tr>";
                for ($i = 1; $row=$daten->fetch_assoc(); $i++){
                    echo "<tr>";
                    echo "<td>" . $i . "<a></a>" ."</td>";
                    echo "<td>" . $row['name'] . "</td>";
                    echo "<td>" . $row['score'] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
        ?>
    </body>
</html>
