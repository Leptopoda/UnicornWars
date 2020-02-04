<!Doctype html>

<html>
    <head>
        <title>setup</title>
        <link rel="stylesheet" type="text/css" href="../../main/main.css">
		<?php
			require_once '../../main/db.php';
        ?>	
    </head>

    <body>
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<button type="submit" name="submit">Update Game</button>
				</div>
			</div>   
        </form>

        <?php
			if(isset($_POST['submit'])){
				update();
			}
			
			function update(){
				$version = "1_2_1.zip";
				$url = "http://github.com/Leptopoda/UnicornWars/archive/1.2.1.zip";
				/*
				$file = fopen("my-zip.zip", "w+");
				if (flock($file, LOCK_EX)) {
					fwrite($file, fopen("http://github.com/Leptopoda/UnicornWars/archive/1.2.1.zip", 'r'));
					$zip = new ZipArchive;
					$res = $zip->open('my-zip.zip');
					if ($res === TRUE) {
					  $zip->extractTo('./extract-here');
					  $zip->close();
					  //
					} else {
					  //
					}
					flock($file, LOCK_UN);
				} else {
					die("Couldn't download the zip file.");
				}
				fclose($file);*/
				
				
				download();
				extractZip();
				

			}
			
			function download(){
				$download = file_get_contents("http://github.com/Leptopoda/UnicornWars/archive/1.2.1.zip"); //download zip
				file_put_contents("UnicornWars-1.2.1.zip",$download); //store zip
			}
			
			function extractZip(){
				$zip = new ZipArchive;
				if ($zip->open('UnicornWars-1.2.1.zip') === TRUE) {
					$zip->extractTo('./UnicornWars-1.2.1/');
					$zip->close();
					echo 'extracted the file';
				} else {
					die('failed extracting the file');
				}
			}
		?>
    </body>
</html>