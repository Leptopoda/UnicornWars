<!Doctype html>

<html>
    <head>
        <title>login</title>
        <link rel="stylesheet" type="text/css" href="../main/main.css">
		<?php
			require_once '../main/db.php';
			
			if(isset($_COOKIE["login"])) {
				header('Location: acount.php');
			}
        ?>
    </head>

    <body>
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<img class="item" src="./media/Email.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" type="text" name="email" maxlength='60' placeholder="email"/>
				</div>	
			</div>
			<div class="container">
				<div class="item">
					<img class="item" src="./media/Password.webp" alt="name_schrift">
				</div>
				<div class="item">
					<input class="item" id='textfeldscore' type="password" name="password" placeholder="password" />
				</div>
			</div>
			<div class="container">
				<div class="item">
					<button type="submit" name="submit"><img src="./media/Login.webp"></button>
				</div>
			</div>   
        </form>

        <?php
			if(isset($_POST['submit'])){
				onClick();
			}

			function onClick(){
				$email = $_POST['email'];
				$time = date('Y-m-d H:i:s'); 
				
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
									$sql = "UPDATE users SET lastlogin='$time' WHERE email='$email';";
									queryDB($sql);
									setcookie("login", $email, time() + (86400 * 30), "/UnicornWars/", localhost, isset($_SERVER["HTTPS"]), true); // 86400 = 1 day
									header('Location: account.php');
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
