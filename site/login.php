<!Doctype html>

<html>
    <head>
        <title>login</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<link rel="stylesheet" type="text/css" href="../Styles/gameOver.css">
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
					<img class="item" src="../Images/Password.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" id='textfeldscore' type="password" name="password" placeholder="password" />
				</div>
			</div>
			<div class="container">
				<div class="item">
					<button type="submit" name="submit"><img src="../Images/Login.webp"></button>
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
				
				if(empty($email)){ //is email set??
					echo"Bitte Email eintragen";
				}else{
					if (empty($_POST['password'])){ //do we have a password
						echo"Bitte passwort eintragen";
					}else{
						
						$sql = "SELECT password FROM users WHERE email='$email';";
						
						$result = queryDB($sql);
						if ($result->num_rows > 0) {// output data of each row
							while($row = $result->fetch_assoc()) {
								if (password_verify($_POST['password'], $row['password'])) {
									echo 'Password is valid!';
									header('Location: ../site/Account.php');
								} else {
									echo 'Invalid password.';
								}
							}
						}
						
						
					}
				}
			}
        ?>
    </body>
</html>
