<!Doctype html>

<html>
    <head>
        <title>sign up</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<link rel="stylesheet" type="text/css" href="../Styles/gameOver.css">
    </head>

    <body>
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<img class="item" src="../Images/name.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" type="text" name="email" maxlength='60' placeholder="email"/>
				</div>	
			</div>
			<div class="container">
				<div class="item">
					<img class="item" src="../Images/name.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" type="text" name="username" maxlength='15' placeholder="username"/>
				</div>	
			</div>
			<div class="container">
				<div class="item">
					<img class="item" src="../Images/name.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" id='textfeldscore' type="password" name="password" placeholder="password" />
				</div>
			</div>
			<div class="container">
				<div class="item">
					<button id='buttoneintragen' type="submit" name="submit" style="display:<?php echo$visible?>"><img src="../Images/abschicken.webp"></button>
				</div>
				<div class="item">
					<a href="../site/scoreboard.php"><img src="../Images/scoreboard.webp" alt="continue_schrift"></a>
				</div>
			</div>   
        </form>

        <?php
			if(isset($_POST['submit'])){
				onClick();
			}

			function onClick(){
				$Username = $_POST['Username'];
				$score = $_POST['score'];
				
				if(empty($Username)){
					echo"Bitte Namen eintragen";
				}else{
					$sql = "INSERT INTO scoreboard (name,score) VALUES ('$Username', '$score')";
					queryDB($sql);
					header('Location: ../site/scoreboard.php');
				}
			}
        ?>
    </body>
</html>
