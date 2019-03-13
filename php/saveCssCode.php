<?php 

	/* html code write to json_data file */
	function saveCssCode($file_name){

		$cssData = $_POST['get_data'];
	
		    $cssfile = fopen('../code/css/' . $file_name . '.css','w');
			
			if ($cssfile != null) {
			    fwrite($cssfile, $cssData);
			    fclose($cssfile);		    	    	
			}
			else{
				fclose($cssfile);
			    echo '<script type="text/javascript">alert("write error!...");</script>';
			}
			   	 
	}
	saveCssCode('style');
	
?>