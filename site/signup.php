<!Doctype html>

<html>
    <head>
        <title>sign up</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<?php
			require_once 'db.php';
				
            if(isset($_COOKIE["login"])) {
				header('Location: ../site/Account.php');
			}
        ?>	
    </head>

    <body>
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<img class="item" src="../Images/Email.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" type="text" name="email" maxlength='60' placeholder="email"/>
				</div>	
			</div>
			<div class="container">
				<div class="item">
					<img class="item" src="../Images/Username.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" type="text" name="username" maxlength='15' placeholder="username"/>
				</div>	
			</div>
			<div class="container">
				<div class="item">
					<img class="item" src="../Images/Password.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" id='textfeldscore' type="password" name="password" placeholder="password" />
				</div>
			</div>
			<div class="container">
				<div class="item">
					<button type="submit" name="submit"><img src="../Images/Signup.webp"></button>
				</div>
			</div>   
        </form>

        <?php
			if(isset($_POST['submit'])){
				onClick();
			}

			function onClick(){
				$email = $_POST['email'];
				$username = $_POST['username'];
				$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
				
				if(empty($email)){ //is email set??
					echo"Bitte Email eintragen";
				}else{
					if (empty($username)){ // is username set??
						echo"Bitte username eintragen";
					}else{
						if (empty($password)){ //do we have a password
							echo"Bitte username eintragen";
						}else{
							//$sql = "SELECT IF((NOT EXISTS(SELECT username FROM users WHERE email='rimikis.nikolas@gmail.com')),true,false)";
							/*$sql = "INSERT INTO users (email, username, password) 
								SELECT '$email','$username','$password' FROM DUAL
								WHERE NOT EXISTS 
								  (SELECT username FROM users WHERE email='$email');";*/
							
							$sql = "SELECT username FROM users WHERE email='$email';";
							
							$result = queryDB($sql);
							if ($result->num_rows > 0) {// output data of each row
								while($row = $result->fetch_assoc()) {
									echo("User already exist with username: ");
									echo($row['username']);
									header('Location: ../site/login.php');
								}
							} else {
								$sql = "INSERT INTO users (email, username, password) VALUES ('$email','$username','$password');";
								queryDB($sql);
								echo("User was created");
								header('Location: ../site/Account.php');
							}
						}
					}
				}
			}
        ?>
    </body>
</html>
