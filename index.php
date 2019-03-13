<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <title>Dynamic Dom Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/split.css">
    </head>

    <body style="z-index: -1000" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">

        <!-- Main container -->
        <div class="splitContainer">
            <!-- Elements work area -->
            <div id="idWarea" class="split split-horizontal warea"></div>

            <!-- right side area -->
            <div id="rightSide" class="split split-horizontal">

                <!-- Element Section -->
                <section class="section">

                    <label for="ElementText">Active element label</label>
                    <input id="idElementText" type="edit" name="ElementText" />

                </section>

                <section class="section">

                    <!-- All element list -->
                    <label>New Element : <input id="idNewElementInput" type="edit" name=""></input></label>

                    <!-- Create element -->
                    <div id="idCreateNewElement" class="skt_button">
                        <a href="#">Create New Element</a>
                    </div>

                    <!-- Delete element -->
                    <div id="idDeleteElement" class="skt_button">
                        <a href="#">Delete Element</a>
                    </div>

                    <hr>

                    <input id="idCheckBox" type="checkbox" name="" />
                    <label for="idCheckBox">Input Element</label>

                </section>

                <!-- All elements list here -->
                <section id="idElementListSection" class="section">

                    <label style="display:inline; color:rgb(1, 84, 105); font-weight: bold" for="activeElem">ACTIVE ELEMENT ID: <p style="display:inline; color: #ca2c68; font-size: 120%; font-weight:bold; margin-left:10px" name="activeElem" id="IDactiveElement"></label></p><br />

                    <hr>

                    <label>Html Elements : </label>
                    <!-- <ul id="idElementList"></ul> -->

                </section>

                <section class="section">

                    <!-- all input propery name-value -->
                    <label for="">Class Name : <input id="idInputClassName" type="edit" name="InputClassName" value="" /></label>

                    <hr>

                    <input id="idHoverCheckBox" type="checkbox" name="" />
                    <label for="idHoverCheckBox">Hover</label><br />

                    <input id="idMediaQueryCheckBox" type="checkbox" name="" />
                    <label for="idMediaQueryCheckBox">Media Query Code</label><br />

                    <hr>

                    <label>Css Class Name List : </label>
                    <ul id="idCssClassNameList"></ul>

                    <hr>

                    <div id="idAddCssClassName" class="skt_button">
                        <a href="#">Add Css Class Name</a>
                    </div>

                    <div id="idDeleteCssClassName" class="skt_button">
                        <a href="#">Delete Css Class Name</a>
                    </div>

                    <div id="idAttachCssClassName" class="skt_button">
                        <a href="#">Attach Css Class Name</a>
                    </div>

                    <div id="idRemoveCssClassName" class="skt_button">
                        <a href="#">Remove Css Class Name</a>
                    </div>

                </section>

                <section class="section">

                    <label for="">Property Name : <input id="idInputPropertyName" type="edit" name="InputPropertyName" value="" /></label>
                    <label for="">Property Value : <input id="idInputPropertyValue" type="edit" name="InputPropertyValue" value="" /></label>

                    <hr>

                    <label>Css List : </label>
                    <ul id="idCssList"></ul>

                    <hr>

                    <div id="idAddCssStyle" class="skt_button">
                        <a href="#">Add Css Style</a>
                    </div>

                    <div id="idDeleteCss" class="skt_button">
                        <a href="#">Delete Css</a>
                    </div>

                </section>

                <section class="section">

                    <label for="">Add Native Css Tag: <input id="idNativeCodeInput" type="edit" name="nativeCodeInput" value="" /></label>

                    <hr>

                    <label>Native Css Tag List : </label>
                    <ul id="idNativeClassNameList"></ul>

                    <hr><hr>

                    <div id="idAddNativeCodeTag" class="skt_button">
                        <a href="#">Add Native Tag Code</a>
                    </div>

                    <div id="idDeleteNativeCodeTag" class="skt_button">
                        <a href="#">Delete Native Tag Code</a>
                    </div>

                </section>

                <section class="section">

                    <!-- <label for="">Add Native Css Code : <input id="idNativeCodeInput" type="edit" name="nativeCodeInput" value="" /></label> -->
                    <label for="">Property Name : <input id="idNativeCodePropertyNameInput" type="edit" name="nativeCodePropertyNameInput" value="" /></label>
                    <label for="">Property Value : <input id="idNativeCodePropertyValueInput" type="edit" name="nativeCodePropertyValueInput" value="" /></label>

                    <hr>

                    <label>Native Code Css List : </label>
                    <ul id="idNativeCodeCssList"></ul>

                    <hr>

                    <div id="idAddNativeCssStyle" class="skt_button">
                        <a href="#">Add Native Style</a>
                    </div>

                    <div id="idDeleteNativeCodeCss" class="skt_button">
                        <a href="#">Delete Native Style</a>
                    </div>

                </section>

                <section class="section">

                    <input id="file1" type="file" name="myfile" style="display:none">

                    <label for="">Json File Name :</label>
                    <input id="saveFile" type="edit" name="savefile">                    

                    <div id="idLoadPreset" class="skt_button">
                        <a href="#">Load Preset</a>
                    </div>

                    <div id="idSaveButton" class="skt_button">
                        <a href="#">Save</a>
                    </div>
                    
                </section>

                <section class="section">

                    <label>Event Name : <input id="idFunctionNameInput" type="edit" name="functionNameInput" value="" /></label>
                    <!-- <label>Event Function Block : <input id="idFunctionBlockInput"  type="edit" name="functionBlockInput" value="" /></label> -->
                    <label>Event Function Block : <textarea style="width:100%;" rows="10" id="idFunctionBlockInput" type="edit" name="functionBlockInput" value=""></textarea></label>

                    <hr>

                    <form id="idRadioForm">

                        <label for="idRadioButtonJS"><input id="idRadioButtonJS" type="radio" name="jsradio" value="javascript" checked> JavaScript</label><br>
                        <label for="idRadioButtonJQ"><input id="idRadioButtonJQ" type="radio" name="jsradio" value="jquery"> jQuery</label><br>
                        <!-- <label for=""><input id="idRadioButtonFunction" type="radio" name="gender" value="function">Function</label><br> -->

                    </form>

                    <!-- <hr>

                    <input id="idFunctionCheckBox" type="checkbox" name="" />
                    <label for="idFunctionCheckBox">Regular Function</label><br /> -->

                    <hr>
                    
                    <label>Event List : </label>
                    <ul id="idEventList"></ul>

                    <div id="idsetEventListenerButton" class="skt_button">
                        <a href="#">Set Event</a>
                    </div>

                    <div id="idDeleteEventListenerButton" class="skt_button">
                        <a href="#">Delete Event</a>
                    </div>

                </section>

            </div>            
        </div>

        <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
        <script type="text/javascript" src="js/sktJson.js"></script>
        <script type="text/javascript" src="js/dragDrop.js"></script>
        <script type="text/javascript" src="js/dyna.js"></script>
        <script type="text/javascript" src="js/split.js"></script>
        <script type="text/javascript" src="js/sktSplit.js"></script>
    </body>

</html>