<?php    
	function writeDB($pDB, $querry){
		if ($pDB->query($querry) === TRUE) {
			echo "New record created successfully";
			header('Location: ../site/scoreboard.php');
		} else {
			echo "Error: " . $querry . "<br>" . $pDB->error;
		}
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
	
	function queryDB($conDB, $querry){
		$ergebnis = $conDB->query($querry);

		if($ergebnis->num_rows > 0){
			return($ergebnis);
		}else{
			alert("DB Leer");
		}
		$conDB->close();
    }

	function alert($message) {
		echo "<script type='text/javascript'>alert('$message');</script>";
	}
?>