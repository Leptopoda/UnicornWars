<?php
	include_once 'db.php';
	$sql = "CREATE TABLE `unicornwars`.`scoreboard` ( `ID` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `name` VARCHAR(15) NOT NULL , `score` INT(255) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB CHARSET=utf16 COLLATE utf16_bin; 
";
	queryDB($sql);
	echo "Tabelle scoreboeard Erstellt";
	
	$sql = "CREATE TABLE `unicornwars`.`users` ( `email` VARCHAR(60) NOT NULL , `username` VARCHAR(15) NOT NULL , `password` TINYTEXT NOT NULL , `admin` BOOLEAN NOT NULL DEFAULT FALSE , `signup` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `lastlogin` DATETIME NOT NULL, UNIQUE (`username`(15))) ENGINE = InnoDB; ";
	queryDB($sql);
	echo "Tabelle user Erstellt";
?>