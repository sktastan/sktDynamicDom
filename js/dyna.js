// --------------------------------------------------------- //
// Get element by id
// --------------------------------------------------------- //
function getElement(elemID) {

    return document.getElementById(elemID);

}

// --------------------------------------------------------- //
// Get all children id and put in array (all dom tree array)
// --------------------------------------------------------- //
function getAllChildrenID(elemID) {

    var childrenArr = [];

    var elem = getElement(elemID);

    if (elem.childElementCount > 0) {

        for (var i = 0; i < elem.childElementCount; i++) {

            childrenArr.push(elem.children[i].id);

            if (elem.children[i].childElementCount > 0) {

                childrenArr.push(getAllChildrenID(elem.children[i].id));

            }

        }

    }

    if (elem.childElementCount == 0) childrenArr.push(elem.id);

    return childrenArr;

}

// --------------------------------------------------------- //
// dyna object
// --------------------------------------------------------- //
var dyna = {

    element: [{

        id: '',

        tagName: '', 

        textContent:'',

        attachClassName: [],

        cssClassName: [],

        css: [],

        js: {

            functionName:[],
            functionBlock:[]

        },

        mediaQuery: {

            cssClassName: [],
            css: []

        }

    }],

    nativeCodeTag: [],
    nativeCodeCss: [],   

    jsonFileName: 'json/data.json',

    cssCode: '',
    jsCode: '',

    activeElement: ' ',

    idName: "idWarea",
    className: " ",
    tagname: " ",
    varElementName: '',

    varCssListIndexNo: 0,
    varNativeCodeListIndexNo: 0,
    varNativeCodeCssListIndexNo: 0,
    varEventListIndexNo: 0,

    objCount: 0,
    elementCount: 0,
    cssClassNameListIndexNo: 0,
    //mediaQueryCssClassNameListIndexNo: 0,

    radioTxt: 'jquery',

    // Console Write
    consoleWrite: function(txt) {
        console.log(txt);
    },

    // Get Element name from input = > #idNewElementInput
    getElementNameInputEvent: function() {
        dyna.varElementName = $(this).val();
    },

    // Make array to unordered list
    arrToUl: function(arr) {
        var ul = document.createElement('ul');

        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                li.appendChild(this.arrToUl(arr[i]));
            } else {
                li = document.createElement('li');
                // a = document.createElement('a');
                // li.appendChild(a);
                li.appendChild(document.createTextNode(arr[i]));
                ul.appendChild(li);
            }
        }
        return ul;
    },

    // Set element list
    setElementList: function() {

        var Arr = [];
        Arr = getAllChildrenID(dyna.idName);
        $('#idElementListSection ul').remove();
        $('#idElementListSection').append(dyna.arrToUl(Arr));
        return Arr;

    },

    // Create New Htmtl element
    createElementClickEvent: function() {

        if (jQuery('#idCheckBox').is(':checked')) {

            var createInput = '<input type=' + dyna.varElementName + ' draggable="true" ondragstart="dragstart_handler(event);" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" id="' + dyna.varElementName + '_' + dyna.elementCount + '"></input>';
           
            $('#' + dyna.idName).append(createInput);

        } else {

            var selected_style_Res = '<' + dyna.varElementName + ' draggable="true" ondragstart="dragstart_handler(event);" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" style="text-align: center" id="' + dyna.varElementName + '_' + dyna.elementCount + '">' + dyna.varElementName + '_' + dyna.elementCount + '</' + dyna.varElementName + '>';
            
            $('#' + dyna.idName).append(selected_style_Res);

        }

        dyna.element[dyna.objCount] = [];
        dyna.element[dyna.objCount].parent = $('#' + dyna.varElementName + '_' + dyna.elementCount).parent().attr('id');
        dyna.element[dyna.objCount].id = dyna.varElementName + '_' + dyna.elementCount;
        dyna.element[dyna.objCount].tagName = dyna.varElementName;
        dyna.element[dyna.objCount].cssClassName = [];
        dyna.element[dyna.objCount].css = [];

        dyna.element[dyna.objCount].textContent = dyna.varElementName + '_' + dyna.elementCount;

        dyna.element[dyna.objCount].js = [];
        dyna.element[dyna.objCount].js.functionName = [];  
        dyna.element[dyna.objCount].js.functionBlock = [];

        dyna.element[dyna.objCount].mediaQuery = [];
        dyna.element[dyna.objCount].mediaQuery.cssClassName = [];
        dyna.element[dyna.objCount].mediaQuery.css = [];

        dyna.element[dyna.objCount].attachClassName = [];

        dyna.consoleWrite(dyna.element[dyna.objCount].js);

        dyna.setElementList();

        dyna.objCount++;
        dyna.elementCount++;

        // dyna.consoleWrite(dyna.element);

    },

    // Delete Htmtl element
    deleteElementClickEvent: function() {       

        for (var i = 0; i < dyna.element.length; i++) {

            if (dyna.element[i].id == dyna.idName) {

                dyna.element.splice(i, 1);

                $('#' + dyna.idName).remove();

                dyna.objCount--;

                if (dyna.objCount == 0) {

                    dyna.idName = 'idWarea';
                }

                dyna.updateStyle();

            }

        }
        //dyna.setElementList();
    },

    // Get object of active element
    findActiveElement: function(elemID) {

        for (var i = 0; i < dyna.element.length; i++) {

            if (dyna.element[i].id == elemID) {

                return dyna.element[i]

            }

        }

    },

    getElementListVal: function(listItems) {

        var index = $(listItems).index();
        var val = $(listItems).val(index);

        var str = val.prop('innerText');       
        str = str.replace(/[^a-zA-Z0-9_ ]/g, "*");
        str = str.split("*");

        var rstr = str[0];

        str = [];

        return rstr;

    },     

    getTextContent : function(activeElement){

        var el = getElement(activeElement);
      
        var str = el.innerText;

        str = str.replace(/\n/g, "*");
        str = str.split("*");

        var rstr = str[0];

        if(rstr == ''){
            rstr = ' ';
            dyna.consoleWrite(rstr);
        }

        str = []; 

        return rstr;

    },

    selectElementFromListHoverEvent: function(event) {

        // event.stopPropagation();
        // event.preventDefault();

        var val = dyna.getElementListVal(event.target);
        $('#' + val).css({
            'border': '1px dashed #ca2c68',
            // 'color': 'orange'
        });

        dyna.activeElement = dyna.findActiveElement(val);

        $('#idElementText').val($('#'+dyna.activeElement.id)[0].childNodes[0].nodeValue );  
        //$('#idElementText').val( dyna.activeElement );  
        
        //console.log(event.target.firstChild.textContent); 
        console.log($('#'+dyna.activeElement.id)); 

       
    },

    selectElementHoverEvent: function() {
       
        $('#' + this.id).css({
            'border': '1px solid #ca2c68',
            // 'color': 'orange'
        });

        dyna.activeElement = dyna.findActiveElement(this.id);
        //console.log(this.id);

    },

    selectElementFromListEvent: function() {

        var val = dyna.getElementListVal(this);
        $('#' + val).removeAttr('style');

    },

    selectElementFromListClickEvent: function(event) { 
        
        event.stopPropagation();
        
        var val = dyna.getElementListVal(this);
        dyna.idName = val;

        $('#' + val).css({
            'border': '2px solid orange',
            'color': 'orange'
        });

        console.log('#' + val);

    },

    removeAllAttr: function() {

        var attrArr1 = ["draggable", "ondragstart", "ondrop", "ondragover"];

        for (var a = 0; a < dyna.element.length; a++) {

            for (var i = 0; i < attrArr1.length; i++) {

                $('#' + dyna.element[a].id).removeAttr(attrArr1[i]);

            }

        }

    },

    addAllAttr: function() {

        var attrArr1 = ["draggable", "ondragstart", "ondrop", "ondragover"];
        var attrArr2 = ["true", "dragstart_handler(event)", "drop_handler(event)", "dragover_handler(event)"];

        for (var a = 0; a < dyna.element.length; a++) {

            for (var x = 0; x < attrArr2.length; x++) {

                $('#' + dyna.element[a].id).attr(attrArr1[x], attrArr2[x]);

            }
        }

    },

    getHtmlCode: function() {

        var htmlCode = '';

        htmlCode += '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<title>Demo Page</title>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n\t\t<link rel="stylesheet" href="css/style.css">\n\t</head>\n\t<body>\n\t\t';

        dyna.removeAllAttr();

        htmlCode += $('#idWarea').html();

        dyna.addAllAttr();

        htmlCode += '\n\t<script type="text/javascript" src="js/jquery-3.1.1.js"></script>\n\t<script type="text/javascript" src="js/script.js"></script>\n\t</body>\n</html>';

        return htmlCode;

    },

    // Selected html element get property info
    getElementInfoClickEvent: function(event) {

        dyna.tagname = event.target;

        dyna.className = $(dyna.tagname).attr("class");
        dyna.idName = $(dyna.tagname).attr("id");

        dyna.setElementList();
        $('#idCssList li').remove();
        $('#idNativeCodeCssList li').remove();
        $('#idNativeClassNameList li').remove();

        $('#idEventList li').remove();

        if (dyna.idName != 'idWarea') {

            dyna.activeElement = dyna.findActiveElement(dyna.idName);

            $('#idCssClassNameList li').remove();

            if(jQuery('#idMediaQueryCheckBox').is(':checked')){

                for (var a = 0; a < dyna.activeElement.mediaQuery.cssClassName.length; a++) {

                    $('#idCssClassNameList').append('<li><a href="#">' + dyna.activeElement.mediaQuery.cssClassName[a] + '</a>');

                }

            }
            else{
                for (var a = 0; a < dyna.activeElement.cssClassName.length; a++) {

                    $('#idCssClassNameList').append('<li><a href="#">' + dyna.activeElement.cssClassName[a] + '</a>');

                }
            }

            for (var b = 0; b < dyna.activeElement.js.functionName.length; b++) {

                $('#idEventList').append('<li><a href="#">' + dyna.activeElement.js.functionName[b] + '</a>');

            }
            
            $('#idElementText').val(dyna.getTextContent(dyna.activeElement.id));

        } 
        dyna.updateStyle();

        $('#IDactiveElement').html(dyna.activeElement.id);

    },

    updateStyle() {

        $("head > script").detach();
       
        $("head > style").detach();
        $("<style type='text/css'> </style>").appendTo("head");

        var str = [];
        var natstr = [];
        dyna.cssCode = '';
        
        dyna.jsCode = '';
        var appendjsCode = [];
        var jsBind = '';

        var mediaStr = [];
        var mediaQueryCode = '';
   
        $('#idNativeClassNameList li').remove();

        for (var c = 0; c < dyna.nativeCodeTag.length; c++) {

            for (var d = 0; d < dyna.nativeCodeCss[c].length; d++) {

                natstr.push(dyna.nativeCodeCss[c][d][0] + ':' + dyna.nativeCodeCss[c][d][1]);

            }

            var natcode = dyna.nativeCodeTag[c] + '{' + natstr.join(';') + '}\n';

            dyna.cssCode += natcode;

            $("head > style ").append(natcode);

            $('#idNativeClassNameList').append('<li><a href="#">' + dyna.nativeCodeTag[c] + '</a>');

            natstr = [];
        }       

        for (var i = 0; i < dyna.element.length; i++) {            

            for (var a = 0; a < dyna.element[i].cssClassName.length; a++) {

                for (var x = 0; x < dyna.element[i].css[a].length; x++) {

                    str.push(dyna.element[i].css[a][x][0][0] + ':' + dyna.element[i].css[a][x][0][1]);

                }

                var code = '.' + dyna.element[i].cssClassName[a] + '{' + str.join(';') + '}\n';

                $('#' + dyna.element[i].id).addClass(dyna.element[i].cssClassName[a]); 
               
                dyna.cssCode += code;

                str = [];                 

            }

            for (var w = 0; w < dyna.element[i].mediaQuery.cssClassName.length; w++) {

                for (var z = 0; z < dyna.element[i].mediaQuery.css[w].length; z++) {

                    mediaStr.push(dyna.element[i].mediaQuery.css[w][z][0][0] + ':' + dyna.element[i].mediaQuery.css[w][z][0][1]);

                }

                mediaQueryCode += '\t.' + dyna.element[i].mediaQuery.cssClassName[w] + '{' + mediaStr.join(';') + '}\n';

                $('#' + dyna.element[i].id).addClass(dyna.element[i].mediaQuery.cssClassName[w]);                

                mediaStr = []; 

            }           

            jsBind += '$("#' + dyna.element[i].id +'").unbind();';

            for (var f = 0; f < dyna.element[i].js.functionName.length; f++) {
               
                if(dyna.radioTxt == 'javascript'){

                    appendjsCode.push('var ' + dyna.element[i].id + '_elem = document.getElementById("' + dyna.element[i].id + '");\n' + dyna.element[i].id + '_elem.addEventListener("'+ dyna.element[i].js.functionName[f] +'", function (){' + dyna.element[i].js.functionBlock[f] + '}, false);\n');

                    dyna.consoleWrite(dyna.radioTxt);

                }

                if(dyna.radioTxt == 'jquery'){

                    appendjsCode.push('$("#' + dyna.element[i].id +'").'+ dyna.element[i].js.functionName[f] +'(function(){'+ dyna.element[i].js.functionBlock[f] +'});\n');
                
                    dyna.consoleWrite(dyna.radioTxt)

                }          
                
                dyna.jsCode += appendjsCode;
            
                jsBind += '$("#' + dyna.element[i].id +'").bind("'+ dyna.element[i].js.functionName[f] +'", function(){'+ dyna.element[i].js.functionBlock[f] +'});';
                
                appendjsCode = []; 

            }   

            for (var n = 0; n < dyna.element[i].attachClassName.length; n++) {

                $('#' + dyna.element[i].id).addClass(dyna.element[i].attachClassName[n]); //dyna.consoleWrite(dyna.element[i].attachClassName);                                

            }  

            if ($("#" + dyna.element[i].id).length == 0) {

                dyna.element.splice(i, 1);

                dyna.objCount--;

            }

            $('#' + dyna.element[i].id).removeAttr('style');

        } 

        //dyna.cssCode += '@media screen and (max-width: 768px){\n' + mediaQueryCode + '}\n</style>' ;
        dyna.cssCode += '@media screen and (max-width: 768px){\n' + mediaQueryCode + '}' ;
        $("head > style ").append(dyna.cssCode);

        $('head').append( '<script type="text/javascript"> '+ jsBind +' </script>' );

    },

    // --------------------------------------------------------- //
    // Css Class & css style section
    // --------------------------------------------------------- //
    // Add Css class name
    addClasNameClickEvent: function() {

        dyna.className = $("#idInputClassName").val();

        if(jQuery('#idMediaQueryCheckBox').is(':checked')){

            if (jQuery('#idHoverCheckBox').is(':checked')){

                dyna.activeElement.mediaQuery.css.push([]);
                dyna.activeElement.mediaQuery.cssClassName.push(dyna.className + ':hover');

                $('#idCssClassNameList').append('<li><a href="#">' + dyna.className + ':hover </a>');              

                dyna.consoleWrite('idHoverCheckBox + idMediaQueryCheckBox are checked!');                
                
            }
            else {

                dyna.activeElement.mediaQuery.css.push([]);
                dyna.activeElement.mediaQuery.cssClassName.push(dyna.className);

                dyna.consoleWrite('idMediaQueryCheckBox is checked!  ' + dyna.activeElement.mediaQuery.cssClassName);
            }

            dyna.updateStyle();

        }

        else if (jQuery('#idHoverCheckBox').is(':checked')) {

            if (jQuery('#idHoverCheckBox').is(':checked')){
                dyna.activeElement.css.push([]);
                dyna.activeElement.cssClassName.push(dyna.className + ':hover');

                $('#idCssClassNameList').append('<li><a href="#">' + dyna.className + ':hover </a>');
                dyna.updateStyle();

                dyna.consoleWrite('idHoverCheckBox is checked!');
            }

        } else {

            if (dyna.idName != 'idWarea') {

                dyna.activeElement.css.push([]);
                dyna.activeElement.cssClassName.push(dyna.className);

                $('#idCssClassNameList').append('<li><a href="#">' + dyna.className + '</a>');

                dyna.updateStyle();

            }
        }

        $("#idInputClassName").val('');

    },

    selectCssClassNameListClickEvent: function() {

        dyna.cssClassNameListIndexNo = $(this).index();

        $('#idCssList li').remove();

        if(jQuery('#idMediaQueryCheckBox').is(':checked')){

            for (var a = 0; a < dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo].length; a++) {

                $('#idCssList').append('<li><a href="#">' + dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo][a][0][0] + ' : ' + dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo][a][0][1] + '</a>');
                
            }

            $("#idInputClassName").val(dyna.activeElement.mediaQuery.cssClassName[dyna.cssClassNameListIndexNo]);

        }
        else {

            for (var b = 0; b < dyna.activeElement.css[dyna.cssClassNameListIndexNo].length; b++) {

                $('#idCssList').append('<li><a href="#">' + dyna.activeElement.css[dyna.cssClassNameListIndexNo][b][0][0] + ' : ' + dyna.activeElement.css[dyna.cssClassNameListIndexNo][b][0][1] + '</a>');

            }

            $("#idInputClassName").val(dyna.activeElement.cssClassName[dyna.cssClassNameListIndexNo]);
        }

        dyna.consoleWrite(dyna.cssClassNameListIndexNo);

    },

    deleteCssClassNameClickEvent: function() {

        if (dyna.idName != 'idWarea') {

            $('#idCssClassNameList li:nth-child(' + (dyna.cssClassNameListIndexNo + 1) + ')').remove();

            if(jQuery('#idMediaQueryCheckBox').is(':checked')){

                $('#' + dyna.idName).removeClass(dyna.activeElement.mediaQuery.cssClassName[dyna.cssClassNameListIndexNo]);               

                dyna.activeElement.mediaQuery.css.splice([dyna.cssClassNameListIndexNo], 1);
                dyna.activeElement.mediaQuery.cssClassName.splice([dyna.cssClassNameListIndexNo], 1);

            }
            else{                               

                $('#' + dyna.idName).removeClass(dyna.activeElement.cssClassName[dyna.cssClassNameListIndexNo]);               

                dyna.activeElement.css.splice([dyna.cssClassNameListIndexNo], 1);
                dyna.activeElement.cssClassName.splice([dyna.cssClassNameListIndexNo], 1);

            }

            $('#' + dyna.idName).removeAttr('style');

            $('#idCssList li').remove();

            dyna.updateStyle();

        }

    },

    attachClassNameClickEvent: function() {

        $('#' + dyna.idName).addClass($("#idInputClassName").val());
        dyna.activeElement.attachClassName.push($("#idInputClassName").val()); dyna.consoleWrite(dyna.activeElement);          
        dyna.updateStyle();

    },

    removeClassNameClickEvent: function() {

        $('#' + dyna.idName).removeClass($("#idInputClassName").val());

        dyna.activeElement.attachClassName.forEach(function(item, index) {

            if ($("#idInputClassName").val() == item) {
                
                dyna.activeElement.attachClassName.splice([index], 1);

            }

        });
        dyna.updateStyle();

    },

    // Add Css Style
    addCssStyleClickEvent: function() {

        var varPropertyName = $("#idInputPropertyName").val();
        var varPropertyValue = $("#idInputPropertyValue").val();

        var cssArr = [];
        cssArr.push(varPropertyName);
        cssArr.push(varPropertyValue);

        if(jQuery('#idMediaQueryCheckBox').is(':checked')){

            dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo].push([cssArr]);
           
                $('#' + dyna.idName).css(varPropertyName, varPropertyValue);

            $('#idCssList').append('<li><a href="#">' + varPropertyName + ' : ' + varPropertyValue + '</a>');

        }
        else{
            dyna.activeElement.css[dyna.cssClassNameListIndexNo].push([cssArr]);

            if (jQuery('#idHoverCheckBox').is(':checked')) {} else {
                $('#' + dyna.idName).css(varPropertyName, varPropertyValue);
            }

            $('#idCssList').append('<li><a href="#">' + varPropertyName + ' : ' + varPropertyValue + '</a>');
        }

        // when press botton clear input boxes
        $('#idInputPropertyName').val('');
        $('#idInputPropertyValue').val('');

        dyna.updateStyle();

    },

    getPropertyValue: function(){
            
        if('idWarea'!= dyna.idName)
        {

            var varPropertyValue = $(this).val();   
            $('#' + dyna.idName).css($('#idInputPropertyName ').val(),varPropertyValue);

        }       

    },

    selectCssListClickEvent: function() {

        dyna.varCssListIndexNo = $(this).index();

        if(jQuery('#idMediaQueryCheckBox').is(':checked')){

            $('#idInputPropertyName').val(dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo][dyna.varCssListIndexNo][0][0]);
            $('#idInputPropertyValue').val(dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo][dyna.varCssListIndexNo][0][1]);

        }
        else{

            $('#idInputPropertyName').val(dyna.activeElement.css[dyna.cssClassNameListIndexNo][dyna.varCssListIndexNo][0][0]);
            $('#idInputPropertyValue').val(dyna.activeElement.css[dyna.cssClassNameListIndexNo][dyna.varCssListIndexNo][0][1]);

         }

    },

    deleteCssStyleClickEvent: function() {

        $('#idCssList li:nth-child(' + (dyna.varCssListIndexNo + 1) + ')').remove();

        if(jQuery('#idMediaQueryCheckBox').is(':checked')){

            dyna.activeElement.mediaQuery.css[dyna.cssClassNameListIndexNo].splice(dyna.varCssListIndexNo, 1);

        }
        else{

            dyna.activeElement.css[dyna.cssClassNameListIndexNo].splice(dyna.varCssListIndexNo, 1);

        }        

        $('#' + dyna.idName).css($("#idInputPropertyName").val(), '');

        dyna.updateStyle();

    },

    // --------------------------------------------------------- //
    // Native Code & css style section
    // --------------------------------------------------------- //
    addNativeCodeTagClickEvent: function() {

        $('#idNativeClassNameList li').remove();

        var natCodeInput = $('#idNativeCodeInput').val();

        dyna.nativeCodeCss.push([]);
        dyna.nativeCodeTag.push(natCodeInput);
        $('#idNativeClassNameList').append('<li><a href="#">' + natCodeInput + '</a></li>');

        dyna.updateStyle();

        dyna.consoleWrite(natCodeInput);

    },

    deleteNativeCodeTagClickEvent: function() {

        $('#idNativeClassNameList li:nth-child(' + (dyna.varNativeCodeListIndexNo + 1) + ')').remove();

        dyna.nativeCodeCss.splice([dyna.varNativeCodeListIndexNo], 1);
        dyna.nativeCodeTag.splice([dyna.varNativeCodeListIndexNo], 1);

        dyna.updateStyle();

        dyna.consoleWrite('idDeleteNativeCodeTag');

    },

    selectNativeCodeListClickEvent: function() {

        dyna.varNativeCodeListIndexNo = $(this).index();

        $('#idNativeCodeCssList li').remove();

        for (var a = 0; a < dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo].length; a++) {

            $('#idNativeCodeCssList').append('<li><a href="#">' + dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo][a][0] + ' : ' + dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo][a][1] + '</a>');

        }

        $("#idNativeClassNameList").val(dyna.nativeCodeTag[dyna.varNativeCodeListIndexNo]);

        dyna.consoleWrite(dyna.varNativeCodeListIndexNo);

    },

    getNativeCodePropertyName: function(){      

        var varPropertyValue = $(this).val();   
        $('#idWarea > div').css($('#idNativeCodePropertyNameInput').val(),varPropertyValue);   

    },

    addNativeCssCodeClickEvent: function() {

        var natVal1 = $('#idNativeCodePropertyNameInput').val();
        var natVal2 = $('#idNativeCodePropertyValueInput').val()

        dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo].push([natVal1, natVal2]);

        $('#idNativeCodeCssList').append('<li><a href="#">' + natVal1 + ' : ' + natVal2 + '</a>');

        dyna.updateStyle();

    },

    selectNativeCodeCssListClickEvent: function() {

        dyna.varNativeCodeCssListIndexNo = $(this).index();

        $('#idNativeCodePropertyNameInput').val(dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo][dyna.varNativeCodeCssListIndexNo][0]);
        $('#idNativeCodePropertyValueInput').val(dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo][dyna.varNativeCodeCssListIndexNo][1]);

        dyna.consoleWrite('selectNativeCodeCssListClickEvent');

    },

    //
    deleteNativeCodeCssListClickEvent: function() {

        $('#idNativeCodeCssList li:nth-child(' + (dyna.varNativeCodeCssListIndexNo + 1) + ')').remove();

        dyna.nativeCodeCss[dyna.varNativeCodeListIndexNo].splice(dyna.varNativeCodeCssListIndexNo, 1);

        dyna.updateStyle();

    },

    // --------------------------------------------------------- //
    // Misc function section
    // --------------------------------------------------------- //
    selectLibClickEvent: function(){

        var radioButton = document.forms[0];
        // var radioTxt='';

        for (var i = 0; i < radioButton.length; i++) {

            if (radioButton[i].checked) {

                dyna.radioTxt = radioButton[i].value;dyna.consoleWrite(dyna.radioTxt);

            }

        } 

    },

    // Convert array (elements) to json object
    makeJsonObject: function() {

        var jsonObj = {};
        var data = [];

        for (var a = 0; a < dyna.element.length; a++) {

            if(dyna.element[a].textContent==''){
                dyna.element[a].textContent = ' ';
            }

            data[a] = {

                'parent': dyna.element[a].parent,
                "id": dyna.element[a].id,
                'tagName': dyna.element[a].tagName,
                'textContent' : dyna.element[a].textContent,
                'attachClassName': dyna.element[a].attachClassName,
                'cssClassName': dyna.element[a].cssClassName,
                'css': dyna.element[a].css,                
                'js': { 

                    'functionName': dyna.element[a].js.functionName,
                    'functionBlock': dyna.element[a].js.functionBlock               
                    
                },

                'mediaQuery': {

                    'cssClassName': dyna.element[a].mediaQuery.cssClassName,
                    'css': dyna.element[a].mediaQuery.css,

                }

            }

        }

        dyna.jsonFileName = $('#saveFile').val();       

        jsonObj = {

            data,
            'nativeCodeTag': dyna.nativeCodeTag,
            'nativeCodeCss': dyna.nativeCodeCss,           
            "fileName": dyna.jsonFileName

        }        

        return jsonObj;

    },

    saveCode: function() {

        var htmlCode = dyna.getHtmlCode();
        postHtmlData(htmlCode);
        postCssData(dyna.cssCode);
        postJsonData(dyna.makeJsonObject());
        postJsData(dyna.jsCode);  
        
        dyna.consoleWrite(dyna.element);

    },

    loadPreset: function() {

        //document.location.reload(true);       
        dyna.element = {};        

        var fileName = $("#file1").val();
        fileName = fileName.substr(fileName.lastIndexOf('\\') + 1);

        dyna.objCount = 0;
        dyna.elementCount = 0;

        jQuery.ajaxSetup({
            async: false
        });

        jQuery.getJSON('json/' + fileName, function(jsonDATA) {

            dyna.element = jsonDATA.data;
            dyna.nativeCodeTag = jsonDATA.nativeCodeTag;
            dyna.nativeCodeCss = jsonDATA.nativeCodeCss;
            jsonDATA = {};

        });             

        var selected_style_Res;

        $("#" + dyna.idName).children().remove();

        for (var a = 0; a < dyna.element.length; a++) { 

            //selected_style_Res = '<' + dyna.element[a].tagName + ' draggable="true" ondragstart="dragstart_handler(event);" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" id="' + dyna.element[a].id + '">' + dyna.element[a].id + '</' + dyna.element[a].tagName + '>';
            selected_style_Res = '<' + dyna.element[a].tagName + ' draggable="true" ondragstart="dragstart_handler(event);" ondrop="drop_handler(event);" ondragover="dragover_handler(event);" id="' + dyna.element[a].id + '">' +  dyna.element[a].textContent + '</' + dyna.element[a].tagName + '>';

            $("#idWarea").append(selected_style_Res);

            dyna.objCount++;
            dyna.elementCount++;

        }

        for (var b = 0; b < dyna.element.length; b++) {

            var htmlElem = getElement(dyna.element[b].id);

            $("#" + dyna.element[b].parent).append(htmlElem);

            htmlElem.nodeValue = dyna.element[b].textContent;
            
        } 

        dyna.updateStyle();        
        dyna.setElementList();
        //dyna.consoleWrite(dyna.element); 
        $('#saveFile').val(fileName.split('.')[0]);
    },

    openFileOption: function() {

        document.getElementById("file1").click();

    },

    setElementTextInputEvent: function() {

        dyna.activeElement.textContent = $('#'+dyna.activeElement.id)[0].childNodes[0].nodeValue = $('#idElementText').val();
       
    },

    // --------------------------------------------------------- //
    // Javascript section
    // --------------------------------------------------------- //
    setEventListener: function(){  
        
        var funcName = $("#idFunctionNameInput").val();
        var funcBlock = $("#idFunctionBlockInput").val();

        dyna.activeElement.js.functionName.push(funcName);  
        dyna.activeElement.js.functionBlock.push(funcBlock);  
        dyna.consoleWrite(dyna.activeElement.js);     
       
        $('#idEventList').append('<li><a href="#">' + funcName + '</a>');
              
        dyna.updateStyle();              

    }, 

    selectEventListClickEvent: function(){

        dyna.varEventListIndexNo = $(this).index();
        dyna.consoleWrite(dyna.varEventListIndexNo); 

        $('#idFunctionNameInput').val(dyna.activeElement.js.functionName[dyna.varEventListIndexNo]);
        $('#idFunctionBlockInput').val(dyna.activeElement.js.functionBlock[dyna.varEventListIndexNo]);

    }, 

    deleteEventListener: function(){ 

        $('#idEventList li:nth-child(' + (dyna.varEventListIndexNo + 1) + ')').remove();

        dyna.activeElement.js.functionName.splice(dyna.varEventListIndexNo, 1);
        dyna.activeElement.js.functionBlock.splice(dyna.varEventListIndexNo, 1);       

        $('#'+dyna.idName).unbind($('#idFunctionNameInput').val());         

        dyna.consoleWrite(dyna.element[dyna.objCount-1].js); 
            
        dyna.updateStyle();

    },

    // Run all events
    runEvent: function() {

        $("#idWarea").on('click', dyna.getElementInfoClickEvent);
        $("#idNewElementInput").keyup(dyna.getElementNameInputEvent);
        $('#idCreateNewElement').on('click', dyna.createElementClickEvent);
        $('#idDeleteElement').on('click', dyna.deleteElementClickEvent);

        $("#idAddCssClassName").on('click', dyna.addClasNameClickEvent);
        $("#idCssClassNameList").on("click", "li", dyna.selectCssClassNameListClickEvent);
        $("#idDeleteCssClassName").click(dyna.deleteCssClassNameClickEvent);

        $("#idElementListSection").on("click", "li", dyna.selectElementFromListClickEvent);

        $(document).on({
            mouseenter: dyna.selectElementFromListHoverEvent,
            mouseout: dyna.selectElementFromListEvent
        }, "#idElementListSection ul > li");

        // Add Css Style when press botton
        $('#idAddCssStyle').on('click', dyna.addCssStyleClickEvent);       
        $("#idInputPropertyValue").keyup(dyna.getPropertyValue);
        $('#idCssList').on("click", "li", dyna.selectCssListClickEvent);
        $('#idDeleteCss').on("click", dyna.deleteCssStyleClickEvent);

        $('#idSaveButton').on('click', dyna.saveCode);
        $('#idLoadPreset').click(dyna.openFileOption);

        $("#file1").change(dyna.loadPreset);

        $('#idAttachCssClassName').click(dyna.attachClassNameClickEvent);
        $('#idRemoveCssClassName').click(dyna.removeClassNameClickEvent);
        $('#idAddNativeCssStyle').click(dyna.addNativeCssCodeClickEvent);

        $("#idElementText").keyup(dyna.setElementTextInputEvent);

        $('#idAddNativeCodeTag').on('click', dyna.addNativeCodeTagClickEvent);
        $('#idDeleteNativeCodeTag').on('click', dyna.deleteNativeCodeTagClickEvent);

        $('#idNativeClassNameList').on('click', 'li', dyna.selectNativeCodeListClickEvent);
        $("#idNativeCodePropertyValueInput").keyup(dyna.getNativeCodePropertyName);
        $('#idNativeCodeCssList').on('click', 'li', dyna.selectNativeCodeCssListClickEvent);
        $('#idDeleteNativeCodeCss').on('click', dyna.deleteNativeCodeCssListClickEvent);

        $('#idsetEventListenerButton').on('click',dyna.setEventListener);
        $('#idDeleteEventListenerButton').on('click',dyna.deleteEventListener);

        $('#idFunctionNameInput').keyup(dyna.getFunctionName);

        $('#idEventList').on('click', 'li', dyna.selectEventListClickEvent);
        
        $('#idRadioForm').on('click', dyna.selectLibClickEvent); 
    
    }

}

// --------------------------------------------------------- //
// Page ready
// --------------------------------------------------------- //
jQuery(document).ready(function() {
 
    //------ Split layout ------// 
    new sktSplit();
    dyna.runEvent();

});