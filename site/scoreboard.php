<!DOCTYPE html>

<html>
    <head>
        <title>scoreboard</title>
        <link rel="stylesheet" type="text/css" href="../Styles/neu.css">
    </head>

    <body>
        <div id='divplatzt'>
            <img src="../Images/platz.webp" alt="platz_schrift">
        </div>
        <div id='divnamet'>
            <img src="../Images/name.webp" alt="name_schrift">
        </div>
        <div id='divscoret'>
            <img src="../Images/score.webp" alt="score_schrift">
        </div>

        <div id='divplayagain' >
            <a href="../site/game.php"><img src="../Images/playagain.webp" alt="playagain_schrift" /></a>
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
