<?php function runUpdate(){echo("starting update");delete_files("./UnicornWars/");download();extractZip();cleanup();}function download(){echo("downloading update");$download=file_get_contents("https://github.com/Leptopoda/UnicornWars/zipball/Release");file_put_contents("UnicornWars.zip",$download,LOCK_EX);echo("update downloaded");}function extractZip(){echo("extracting Update");$zip=new ZipArchive;if($zip->open('UnicornWars.zip')===TRUE){$zip->extractTo('./');$zip->close();echo("extracted the update");echo("update complete");}else{die('failed extracting the update, please try again');}}function delete_files($target){echo("removing old files");if(is_dir($target)){$files=glob($target.'*',GLOB_MARK);foreach($files as $file){delete_files($file);}rmdir($target);}elseif(is_file($target)){unlink($target);}echo("old files removed");}function cleanup(){delete_files("UnicornWars.zip");$folder=glob('Leptopoda-UnicornWars-'.'*');foreach($folder as $file){echo($file);rename($file,"UnicornWars");}delete_files("updater.php");header('Location: http://localhost/UnicornWars/accounts/admin/management.php');} ?>