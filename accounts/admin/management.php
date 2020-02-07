<!Doctype html>

<html>
    <head>
        <title>management</title>
        <link rel="stylesheet" type="text/css" href="../../main/main.css">
		<?php
			require_once 'management_bakend.php';
        ?>	
    </head>

    <body>
        <form action="" method="post">
			<div class="container">
				<div class="item">
					<button type="submit" name="createTables">Create Tables</button>
				</div>
				
				<div class="item">
					<button type="submit" name="updateGame">Update Game</button>
				</div>
			</div>
        </form>

        <?php
			if(isset($_POST['createTables'])){
				createTable(); //call create table
			}
			
			if(isset($_POST['updateGame'])){
				update(); //call update
			}	
		?>
    </body>
</html>