<?php
	function update(){			
		rename("updater.php","../../../updater.php"); //backup (move) update.php to complete the update 
		require_once("../../../updater.php"); //include the moved file
		chdir ("../../../"); //change the current directorry, php is working in
		runUpdate(); // call the update hook in the mooved file
	}
	
	function createTable(){ //creates the for the games needed tables
		echo("creating tables");
		$scoreboard = "CREATE TABLE `unicornwars`.`scoreboard` ( `ID` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `name` VARCHAR(15) NOT NULL , `score` INT(255) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB CHARSET=utf16 COLLATE utf16_bin;";
		$users = "CREATE TABLE `unicornwars`.`users` ( `email` VARCHAR(60) NOT NULL , `username` VARCHAR(15) NOT NULL , `password` TINYTEXT NOT NULL , `admin` BOOLEAN NOT NULL DEFAULT FALSE , `signup` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `lastlogin` DATETIME NOT NULL, UNIQUE (`username`(15))) ENGINE = InnoDB;";
		
		queryDB($scoreboard);
		echo "Tabelle scoreboard Erstellt";
		queryDB($users);
		echo "Tabelle users Erstellt";
	}
?>