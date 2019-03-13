// --------------------------------------------------------- //
// Drag start function
// --------------------------------------------------------- //
function dragstart_handler(ev) { 

    ev.dataTransfer.setData("text/plain", ev.target.id);

    var img = new Image();
    img.src = 'pic/add_icon.png';
    ev.dataTransfer.setDragImage(img, 0, 0);

}

// --------------------------------------------------------- //
// Drag over function
// --------------------------------------------------------- //
function dragover_handler(ev) {

    if (ev.preventDefault) {
        ev.preventDefault(); // Necessary. Allows us to drop.
    }

    ev.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;

}

// --------------------------------------------------------- //
// Drag end function
// --------------------------------------------------------- //
function drop_handler(ev) {       

    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    var child = ev.target.appendChild(document.getElementById(data));
    console.log('active element => ' + child.id);    

    dyna.activeElement = dyna.findActiveElement(child.id);
    //console.log(dyna.activeElement.id);

    dyna.activeElement.parent = ev.target.id;

    dyna.setElementList();
    dyna.updateStyle();

    console.log('parent of active element => ' + dyna.activeElement.parent);

}