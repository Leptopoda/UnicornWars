<?php
	function queryDB($query){
		//$conDB = new mysqli('localhost', 'admin','admin','scoreboard');
		$conDB = new mysqli('localhost', 'UnicornWars','QYE8qtv5R8aMV6Rf','unicornwars');
		
		if ($conDB->connect_error) {
			die("Connection failed: " . $db->connect_error);
		}
		
		$result = $conDB->query($query);
		//echo "Query successfull";
		$conDB->close();
		return($result);
	}
?>