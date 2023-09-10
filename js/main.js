function onButtonClick() {
    var filter = document.getElementById('filter_2');
    var main = document.getElementById('main');
    if (filter.style.display == "flex") {
        filter.style.display = "none";
    }
    else {
        var main = document.getElementById('main');
        filter.style.display = "flex";
    }
}
