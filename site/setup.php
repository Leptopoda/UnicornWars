<?php
	include_once 'db.php';
	$connection = connectDB();
	$sql = "CREATE TABLE `unicornwars`.`scoreboard` ( `ID` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `name` VARCHAR(15) NOT NULL , `score` INT(255) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB CHARSET=utf16 COLLATE utf16_bin; 
";
	writeDB($connection, $sql);
	echo "Tabelle Erstellt";

?>