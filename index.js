function toggle() {
  
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

function show() {
  
    var menu = document.getElementById('side-Menu');
    if (menu.classList == "") {
        menu.classList = "operational";
        
    }
    else {
        menu.classList = "";
    }
}

