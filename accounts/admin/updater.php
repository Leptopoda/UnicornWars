<?php
	function runUpdate(){		
		echo("starting update"); 
		
		/* 
			$latest = $_GET('http://github.com/Leptopoda/UnicornWars/releases/latest'); 
			https://developer.github.com/v3/repos/releases/#get-the-latest-release 
		*/ 
		
		//uncomment this line and set your proxy settings to enable updating behind a proxy 
		//stream_context_set_default(['http'=>['proxy'=>'proxy-host:proxy-port']]); 
		
		delete_files("./UnicornWars/"); //deleting the old version of the game
		download(); //downloading the new version of the game
		extractZip(); //extracting the new version of the game
		cleanup(); //remove temp files and rename to production name
		
	}
	
	function download(){
		echo("downloading update");
		
		$download = file_get_contents("https://github.com/Leptopoda/UnicornWars/zipball/Release"); //download latest zip from :release
		//sys_get_temp_dir()."UnicornWars.zip"
		file_put_contents("UnicornWars.zip",$download, LOCK_EX); //store zip and lock it while doing so
	
		echo("update downloaded");
	}
	
	function extractZip(){
		echo("extracting Update");
		
		$zip = new ZipArchive;
		if ($zip->open('UnicornWars.zip') === TRUE) {
			$zip->extractTo('./');
			$zip->close();
			echo ("extracted the update");
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
	
	function cleanup(){
		delete_files("UnicornWars.zip"); //delete the update zips needed for the update
		$folder = glob( 'Leptopoda-UnicornWars-' . '*'); 
		
		foreach( $folder as $file ){
			echo($file);
            rename( $file, "UnicornWars"); //becauce github zipballs are named based on the commits we have to rename the folder
        }
		
		delete_files("updater.php"); //delete this cool script lool
		header('Location: http://localhost/UnicornWars/accounts/admin/management.php'); //redirect to new instace
	}
?>