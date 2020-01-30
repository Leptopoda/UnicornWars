<?php
	function queryDB($query){
		$conDB = connectDB();
		
		if ($conDB->connect_errno) {
			echo("Connect failed: %s\n" +  $conDB->connect_error);
			exit();
		}
		
		return($conDB->query($query));
		echo "Query successfully";		
		
		$conDB->close();
	}

	function connectDB(){
		//$db = new mysqli('localhost', 'admin','admin','scoreboard');
		$db = new mysqli('localhost', 'UnicornWars','QYE8qtv5R8aMV6Rf','unicornwars');

		if ($db->connect_error) {
			die("Connection failed: " . $db->connect_error);
		} else {
			return $db;
		}
	}
?>