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
			</div>   
        </form>

        <?php
			include_once 'db.php';
			
			if(isset($_POST['submit'])){
				onClick();
			}

			function onClick(){
				$email = $_POST['email'];
				$username = $_POST['username'];
				$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
				
				if(empty($email)){
					echo"Bitte Email eintragen";
				}else{
					if (empty($username)){
						echo"Bitte username eintragen";
					}else{
						if (empty($username)){
							echo"Bitte username eintragen";
						}else{ 
							if (empty($username)){
								echo"Bitte username eintragen";
							}else{
								$sql = "INSERT INTO users (email,username,password) VALUES ('$email', '$username', '$password')";
								queryDB($sql);
								echo($password);
								//header('Location: ../site/scoreboard.php');
							}
						}
					}
				}
			}
        ?>
    </body>
</html>
