<!Doctype html>

<html>
    <head>
        <title> Setup</title>
        <meta charset="ISO-8859-1">
        <!--<link rel="stylesheet" type="text/css" href="eintragen.css">-->
    </head>

    
    <body>
        <form action="" method="post">
			<?php

				require_once 'Config_class.php';
				
				$config = new Config;
				
				$config->load('config.php');
				
				
					function initializeDB ()
					{	
						$host = $config->get('db.host');
						$uname = $config->get('db.username');
						$pwd = $config->get('db.password');
						$name = $config->get('db.name');
						
						$db = new mysqli($host, $uname, $pwd, $name);
						
						//Fehlermeldungen aktivieren
						//$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
						//Datenbank erstellen
						$sql = "CREATE TABLE `scoreboard`.`scoreboard_daten` ( `id` INT(5) NOT NULL AUTO_INCREMENT , `Name` VARCHAR(15) NOT NULL , `Punkte` INT(15) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
						$db ->exec($sql);
						
						echo 'Die Tabelle "score" wurde erfolgreich erstellt!';
					}

					//$db = new PDO('mysql:host=localhost;dbname=meineDatenbank', $user, $pass );
				
				
			?>
			
			<?php if ($config->exists('db')): ?>

				<input id='textfeld_uname' readonly="readonly" type="text" name="username" value="<?php echo $config->exists('db.username');?>" />
				<input id='textfeld_pwd' readonly="readonly" type="password" name="password" value="<?php echo $config->exists('db.password');?>" />
				<input id='textfeld_name' readonly="readonly" type="text" name="name" value="<?php echo $config->exists('db.name');?>" />
				<input id='textfeld_Host' readonly="readonly" type="text" name="host" value="<?php echo $config->exists('db.host');?>" />
				
				<button id='buttoneintragen' type="submit" name="submit"><img src="abschicken.png"></button>
				<?php
					if(isset($_POST['submit'])):
						$this->initializeDB();
					endif;	
				?>
				
			<?php else: ?>

			<input id='textfeld_Error' readonly="readonly" type="text" name="score" value="<?php echo "Bitte 'conf.php' bearbeiten";?>" />

			<?php endif ?>
        </form>

    </body>
    
</html>
