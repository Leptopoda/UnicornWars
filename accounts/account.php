<!Doctype html>

<html>
    <head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<link rel="stylesheet" type="text/css" href="../Styles/account.css">
		<?php
			include_once 'db.php';
			
			if(!isset($_COOKIE["login"])) {
				echo "login denied";
				header('Location: ../site/login.php');
			}else{
				$email = $_COOKIE["login"];
			}
        ?>
    </head>

    <body>
		<div class="container">
			<!--<div class="item">
				<img class="item" src="../Images/Username.webp" alt="name_schrift">
			</div>-->
			
			<form action="" method="post">
				<button type="submit" class="item"  id="logout" name="logout"><img src='../Images/button.webp'></button>
			</form>
			
		</div>
		
		<?php
			if(isset($_POST['logout'])){
				logout();
			}
			
			function logout(){
				setcookie("login", "", time() - 3600, "/UnicornWars/");
				echo("you've been loged out");
				header('Location: ../site/login.php');
			}
		
			$sql = "SELECT lastlogin, username FROM users WHERE email='$email';";
			$result = queryDB($sql);
			
			if ($result->num_rows > 0) {// output data of each row
				while($row = $result->fetch_assoc()) {
					echo 'your email is: ', $email;
					echo 'your username is: ', $row['username'];
					echo 'your last login was: ', $row['lastlogin'];
				}
			}
		?>
    </body>
</html>
