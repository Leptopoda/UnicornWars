<!Doctype html>

<html>
    <head>
        <title>Game Over</title>
        <link rel="stylesheet" type="text/css" href="/3/Styles/Neu.css">
    </head>

    <body>
        <?php
			include_once 'db.php';
            @$score = $_POST['dauer'];
            
            if(empty($score)):
				$visible = "none";
                $score = "Bitte erst spielen";
            else:
                $visible = "visible";
            endif;
        ?>
		
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<img class="item" src="/3/Images/name.png" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" id='textfeldname' type="text" name="Username" maxlength='15' placeholder="Bitte Name Eintragen"/>
				</div>	
			</div>
			<div class="container">
				<div class="item">
					<img class="item" src="/3/Images/score.png" alt="score_schrift">
				</div>
				<div class="item">
					<input class="item" id='textfeldscore' readonly="readonly" type="text" name="score" value="<?php echo $score; ?>" />
				</div>
			</div>
			<div class="container">
				<div class="item">
					<button id='buttoneintragen' type="submit" style="display:<?php echo$visible?>" name="submit"><img src="/3/Images/abschicken.png"></button>
				</div>
				<div class="item">
					<a href="/3/site/scoreboard.php"><img src="/3/Images/scoreboard.png" alt="continue_schrift"></a>
				</div>
			</div>
            
        </form>

        <?php    
        if(isset($_POST['submit'])):
            onClick();
        endif;
            
        function onClick(){            
            $Username = $_POST['Username'];
            $score = $_POST['score'];
            
            if(empty($Username)){
				alert("Bitte Namen eintragen");
			}else{
                $connection = connectDB();
                writeDB($connection, $Username, $score);    
            }
        }
        ?>
    </body>
</html>
