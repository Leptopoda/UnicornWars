<?php
	function queryDB($query){
		$conDB = connectDB();
		$result = $conDB->query($query);
		//echo "Query successfull";
		$conDB->close();
		return($result);
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