<?php
	function queryDB($query){
		//$conDB = new mysqli('localhost', 'admin','admin','scoreboard');
		//echo'hello in db.php';
		$conDB = new mysqli('172.17.0.1', 'UnicornWars','QYE8qtv5R8aMV6Rf','UnicornWars');
		//echo'connectet to db';
		if ($conDB->connect_error) {
			die("Connection failed: " . $conDB->connect_error);
		}
		//echo'trying to query';
		$result = $conDB->query($query);
		//echo "Query successfull";
		$conDB->close();
		return($result);
	}
?>
