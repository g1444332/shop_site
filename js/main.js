function onButtonClick() {
    console.log("fff")
    var filter = document.getElementById('filter_2');
    if (filter.style.display == "flex") {
        filter.style.display = "none";
    }
    else {
        filter.style.display = "flex";
    }
}
