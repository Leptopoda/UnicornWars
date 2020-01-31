<!Doctype html>

<html>
    <head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<link rel="stylesheet" type="text/css" href="../Styles/gameOver.css">
    </head>

    <body>
		<div class="container">
			<div class="item">
				<img class="item" src="../Images/Username.webp" alt="name_schrift">
			</div>
		</div>
		
		<?php
			include_once 'db.php';
			$email = 'rimikis.nikolas@gmail.com';
			
			$sql = "SELECT lastlogin, username FROM users WHERE email='$email';";
			$result = queryDB($sql);
			
			if ($result->num_rows > 0) {// output data of each row
				while($row = $result->fetch_assoc()) {
					
				}
				
				echo 'your email is: ', $email;
					echo 'your username is: ', $row['username'];
					echo 'your last login was: ', $row['lastlogin'];
			}

			
			
		?>
    </body>
</html>
