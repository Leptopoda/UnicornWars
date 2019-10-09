<!Doctype html>

<html>
<head>

<title> Name bidde</title>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="eintragen.css">
   
</head>

<body>



<?php
	@$dauer = $_POST['dauer'];
?>

<div id="divname">
	<img src="name.png" alt="name_schrift">
</div>

<div id="divscore">
	<img src="score.png" alt="score_schrift">
</div>
<form action="" method="post">
<input id='divtextfeldn' type="text" name="Username" maxlength='15' />

	
<input id='divtextfelds' readonly="readonly" type="text" name="score" value="<?php echo $dauer; ?>" />

<button id='buttoneintragen' type="submit" name="submit"><img src="abschicken.png"></button>

</form>

<div id='divcon'>
	<a href="Scoreboardtest.php"><img src="scoreboard.png" alt="continue_schrift"></a>
</div>

<?php


$db = new mysqli('localhost', 'admin','admin','scoreboard');


if(!$db): 
	echo "Keine verbindung zur DB";
endif;


if(isset($_POST['submit'])):
	
	$Username = $_POST['Username'];
	$score = $_POST['score'];
	

	
	$absenden = $db -> prepare("INSERT INTO scoreboard_daten (Name,Punkte) VALUES(?,?)");
	$absenden->bind_param('ss', $Username, $score);
	$absenden->execute();
	
endif;

?>
	





</body>
</html>