<?php    
	function writeDB($pDB, $pUname, $pScore){
		$absenden = $pDB -> prepare("INSERT INTO scoreboard (name,score) VALUES(?,?)");
		$absenden->bind_param('ss', $pUname, $pScore);
		$absenden->execute();
		$pDB->close();
		header('Location: /3/site/scoreboard.php');
	}

	function connectDB(){
		$db = new mysqli('localhost', 'UnicornWars','QYE8qtv5R8aMV6Rf','unicornwars');
		//$db = new mysqli('localhost', 'admin','admin','scoreboard');

		if(!$db):
			alert("Keine verbindung zur DB");
		endif;
		
		return $db;
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