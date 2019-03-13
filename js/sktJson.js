// --------------------------------------------------------- //
// post all json data
// --------------------------------------------------------- //
function postJsonData(jsonData) { 
    
    jQuery.ajax({
        type: "POST",
        //dataType: 'json',
        async: false,
        url: 'php/saveJsonFile.php',
        data: {
            get_data: JSON.stringify(jsonData)

        },
        success: function() {
            //alert('json data save successfuly');
        },
        failure: function() {
            alert("Error!");
        }
    });

}

// --------------------------------------------------------- //
// Post all html data
// --------------------------------------------------------- //
function postHtmlData(htmlData) {
    jQuery.ajax({
        type: "POST",
        dataType: 'text',
        async: false,
        url: 'php/saveHtmlCode.php',
        data: {
            //get_data: JSON.stringify(htmlData)
            get_data: htmlData
        },
        success: function() {
            //alert('json data save successfuly' + htmlData);
        },
        failure: function() {
            alert("Error!");
        }
    });
}

// --------------------------------------------------------- //
// Post all css data
// --------------------------------------------------------- //
function postCssData(cssData) {
    jQuery.ajax({
        type: "POST",
        dataType: 'text',
        async: false,
        url: 'php/saveCssCode.php',
        data: {
            get_data: cssData
        },
        success: function() {
            //alert('json data save successfuly' + cssData);
        },
        failure: function() {
            alert("Error!");
        }
    });
}

// --------------------------------------------------------- //
// Post all javascript data
// --------------------------------------------------------- //
function postJsData(jsData) {
    jQuery.ajax({
        type: "POST",
        dataType: 'text',
        async: false,
        url: 'php/saveJsFile.php',
        data: {
            get_data: jsData
        },
        success: function() {
            //alert('json data save successfuly' + cssData);
        },
        failure: function() {
            alert("Error!");
        }
    });
}