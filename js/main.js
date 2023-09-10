function onButtonClick() {
    var filter = document.getElementById('filter_2');
    var down = document.getElementById('down');
    if (filter.style.display == "flex") {
        down.setAttribute('src', 'image/down.png');
        filter.style.display = "none";
    }
    else {
        filter.style.display = "flex";
        down.setAttribute('src', 'image/up.png');
    }
}
