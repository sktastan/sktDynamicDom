<?php 

	/* html code write to json_data file */
	function saveHtmlCode($file_name){

		$htmlData = $_POST['get_data'];

		if (!is_dir('../code/js')) {
		    mkdir('../code/js', 0777, true);
		}

		if (!is_dir('../code/css')) {
		    mkdir('../code/css', 0777, true);
		}

		$htmlfile = fopen('../code/' . $file_name . '.html','w');
		
		if ($htmlfile != null) {
			fwrite($htmlfile, $htmlData);
			fclose($htmlfile);		    	    	
		}
		else{
			fclose($htmlfile);
			echo '<script type="text/javascript">alert("write error!...");</script>';
		}
		   	 
	}
	saveHtmlCode('index');
	
?>

