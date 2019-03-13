<?php 
	
	/* json data write to json_data file */
	function saveJsFile($file_name) {

	    $js = $_POST['get_data'];

	    $file = fopen('../code/js/' .$file_name. '.js', 'w');
	    
	    if ($file != null) {
	        fwrite($file, $js);
	        fclose($file);
	    } else {
	        fclose($file);
	        echo '<script type="text/javascript">alert("write error!...");</script>';
	    }

	}
	saveJsFile('script');

?>