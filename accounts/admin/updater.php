<?php
	function runUpdate(){
		//$version = "1_2_1.zip";
		//$url = "http://github.com/Leptopoda/UnicornWars/archive/1.2.1.zip";			
		
		echo("starting update");
		
		delete_files("./UnicornWars-1.2.1/"); //deleting the old version of the game
		download(); //downloading the new version of the game
		extractZip(); //extracting the new version of the game
		
		delete_files("UnicornWars-1.2.1.zip"); //delete the update zips needed for the update
		delete_files("updater.php"); //delete this cool script lool
	}
	
	function download(){
		echo("downloading update");
		
		$download = file_get_contents("http://github.com/Leptopoda/UnicornWars/archive/1.2.1.zip"); //download zip
		//sys_get_temp_dir()."UnicornWars-1.2.1.zip"
		file_put_contents("UnicornWars-1.2.1.zip",$download, LOCK_EX); //store zip and lock it while doing so
	
		echo("update downloaded");
	}
	
	function extractZip(){
		echo("extracting Update");
		
		$zip = new ZipArchive;
		if ($zip->open('UnicornWars-1.2.1.zip') === TRUE) {
			$zip->extractTo('./');
			$zip->close();
			echo 'extracted the update';
			echo("update complete");
		} else {
			die('failed extracting the update, please try again');
		}
	}
	
	function delete_files($target) { //credits to https://paulund.co.uk/php-delete-directory-and-files-in-directory
	echo("removing old files");
    if(is_dir($target)){
        $files = glob( $target . '*', GLOB_MARK ); //GLOB_MARK adds a slash to directories returned

        foreach( $files as $file ){
            delete_files( $file );      
        }

        rmdir( $target );
    } elseif(is_file($target)) {
        unlink( $target );  
    }
	echo("old files removed");
}
?>