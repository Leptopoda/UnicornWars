<?php
	Class Connecttion
	{ 
		public function connect()
		{
            require_once 'Config_class.php';

			$config = new Config;

			$config->load('config.php');

            return mysqli_connect(($config->exists('db.host'), $config->exists('db.username'),$config->exists('db.password'),$config->exists('db.name'));
		}
	}
	
?>
