<!DOCTYPE html><html><head><title>Game Over</title><link href="../../main/main.css"rel="stylesheet"type="text/css"></head><body><?php require_once '../../main/db.php';@$score=$_POST['dauer'];if(empty($score)){$visible="none";$score="Bitte erst spielen";}else{$visible="visible";}if(isset($_COOKIE["login"])){$userid=$_COOKIE["login"];$username=getUsername($userid);}else{$username="Bitte Namen eintragen";} ?><form action=""method="post"><div class="container"><div class="item"><img src="./media/name.webp"alt="name_schrift"class="item"></div><div class="item"><input class="item"name="username"readonly value="<?php echo $username; ?>"maxlength="15"></div></div><div class="container"><div class="item"><img src="./media/score.webp"alt="score_schrift"class="item"></div><div class="item"><input class="item"name="score"readonly value="<?php echo $score; ?>"></div></div><div class="container"><div class="item"><button name="submit"style="display:<?php echo$visible ?>"type="submit"><img src="./media/abschicken.webp"></button></div><div class="item"><a href="scoreboard.php"><img src="./media/scoreboard.webp"alt="continue_schrift"></a></div></div></form><?php if(isset($_POST['submit'])){onClick();}function getUsername($email){$sql="SELECT username FROM users WHERE email='$email';";$result=queryDB($sql);if($result->num_rows>0){while($row=$result->fetch_assoc()){return $row['username'];}}}function onClick(){$username=$_POST['username'];$score=$_POST['score'];if(empty($username)){echo"Bitte Namen eintragen";}else{$sql="INSERT INTO scoreboard (name,score) VALUES ('$username', '$score')";queryDB($sql);header('Location: scoreboard.php');}} ?></body></html>