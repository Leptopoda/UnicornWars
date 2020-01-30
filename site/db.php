<?php
	function queryDB($query){
		$conDB = connectDB();

		$ergebnis = $conDB->query($query);
		if($ergebnis->num_rows > 0){
			return($ergebnis);
			echo "Query successfully";
		}else{
			echo "Error: " . $query . "<br>" . $conDB->error;
		}
		
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