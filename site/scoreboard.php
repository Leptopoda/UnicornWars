<!DOCTYPE html>

<html>
    <head>
        <title>scoreboard</title>
        <link rel="stylesheet" type="text/css" href="/3/Styles/Neu.css">
    </head>

    <body>
        <div id='divplatzt'>
            <img src="/3/Images/platz.png" alt="platz_schrift">
        </div>
        <div id='divnamet'>
            <img src="/3/Images/name.png" alt="name_schrift">
        </div>
        <div id='divscoret'>
            <img src="/3/Images/score.png" alt="score_schrift">
        </div>

        <div id='divplayagain' >
            <a href="/3/site/game.php"><img src="/3/Images/playagain.png" alt="playagain_schrift" /></a>
        </div>

        <?php
			include_once 'db.php';
            
            $con = connectDB();
			$sql = "SELECT * FROM scoreboard_daten ORDER BY Punkte desc";
            $ergebnis = queryDB($con, $sql);
			ausgabe($ergebnis);
			
            function ausgabe($daten){
                echo "<table><tr></tr>";
                for ($i = 1; $row=$daten->fetch_assoc(); $i++){
                    echo "<tr>";
                    echo "<td>" . $i . "<a></a>" ."</td>";
                    echo "<td>" . $row['Name'] . "</td>";
                    echo "<td>" . $row['Punkte'] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
        ?>
    </body>
</html>
