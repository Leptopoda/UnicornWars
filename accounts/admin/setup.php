<!Doctype html>

<html>
    <head>
        <title>setup</title>
        <link rel="stylesheet" type="text/css" href="../Styles/main.css">
		<?php
			require_once 'db.php';
        ?>	
    </head>

    <body>
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<button type="submit" name="submit">Create Tables</button>
				</div>
			</div>   
        </form>

        <?php
			if(isset($_POST['submit'])){
				createTable();
			}
			
			function createTable(){
				$scoreboard = "CREATE TABLE `unicornwars`.`scoreboard` ( `ID` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `name` VARCHAR(15) NOT NULL , `score` INT(255) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB CHARSET=utf16 COLLATE utf16_bin;";
				$users = "CREATE TABLE `unicornwars`.`users` ( `email` VARCHAR(60) NOT NULL , `username` VARCHAR(15) NOT NULL , `password` TINYTEXT NOT NULL , `admin` BOOLEAN NOT NULL DEFAULT FALSE , `signup` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `lastlogin` DATETIME NOT NULL, UNIQUE (`username`(15))) ENGINE = InnoDB;";
				
				queryDB($scoreboard);
				echo "Tabelle scoreboard Erstellt";
				queryDB($users);
				echo "Tabelle users Erstellt";
			}
		?>
    </body>
</html>