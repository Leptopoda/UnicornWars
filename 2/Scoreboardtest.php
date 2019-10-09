<!DOCTYPE html>

<html>
    <head>
        <title> scoreboard </title>
        <meta charset="ISO-8859-1">
        <link rel="stylesheet" type="text/css" href="eintragen.css">
    </head>

    <body>
        <div id='divplatzt'>
            <img src="platz.png" alt="platz_schrift">
        </div>
        <div id='divnamet'>
            <img src="name.png" alt="name_schrift">
        </div>
        <div id='divscoret'>
            <img src="score.png" alt="score_schrift">
        </div>

        <div id='divplayagain' >
            <a href="game.php"><img src="playagain.png" alt="playagain_schrift" /></a>
        </div>

        <?php
            define('host','localhost');
            define('user','admin');
            define('pass','admin');
            define('db','scoreboard');
            
            $con = mysqli_connect(host, user, pass, db);
                
                if(!$con) {
                
                    echo "Keine verbindung zur DB";
                
                }
                
                $sql = "SELECT * FROM scoreboard_daten ORDER BY Punkte desc";
                
                $ergebnis = $con->query($sql);
                
                if($ergebnis->num_rows > 0){
                    
                    echo "<table><tr></tr>";
                    
                    $Platzierung = 1;
                    while($row=$ergebnis->fetch_assoc()){
                        
                        echo "<tr>";
                        echo "<td>" . $Platzierung . "<a></a>" ."</td>";
                        echo "<td>" . $row['Name'] . "</td>";
                        echo "<td>" . $row['Punkte'] . "</td>";
                        echo "</tr>";
                        $Platzierung++;
                    }
                    
                    echo "</table>";
                    }
                else{
                    echo"nix";
                }
                
                $con->close();
        ?>
    </body>

</html>
