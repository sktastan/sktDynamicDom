<?php 
	
	/* json data write to json_data file */	
	function saveJsonFile(){
		
	 	$json = $_POST['get_data'];

	 	$str = $json;

	 	$str = json_decode($str,true);

	 	
		    $file = fopen('../json/' . $str['fileName'] .'.json' ,'w');
			if ($file != null) {
				fwrite($file, $json);
			    fclose($file);		    	    	
			}
			else{
			  	fclose($file);
			   	echo '<script type="text/javascript">alert("write error!...");</script>';
			}		    
		
	}

	saveJsonFile();

?>