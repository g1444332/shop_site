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

// function onButtonClick1(num) {
//     var list1 = [
//     document.getElementById('all'), 
//     document.getElementById('new'), 
//     document.getElementById('see'), 
//     document.getElementById('symku'),
//     document.getElementById('odayg'),
//     document.getElementById('sezon')
//     ];
//     var list2 = [
//     document.getElementById('all_menu'), 
//     document.getElementById('new_menu'), 
//     document.getElementById('see_menu'), 
//     document.getElementById('symku_menu'),
//     document.getElementById('odayg_menu'),
//     document.getElementById('sezon_menu')
//     ];

//     var el1 = list1[num];
//     var el2 = list2[num];

//     if (el2.style.display == "block") {
//         el1.setAttribute('src', 'image/down.png');
//         el2.style.display = "none";
//     }
//     else {
//         el2.style.display = "block";
//         el1.setAttribute('src', 'image/up.png');
//     }
// }




$('#all').hover( function(){
    $('#all_menu').toggleClass('active');
})

$('#new').hover( function(){
    $('#new_menu').toggleClass('active');
})

$('#see').hover( function(){
    $('#see_menu').toggleClass('active');
})

$('#symku').hover( function(){
    $('#symku_menu').toggleClass('active');
})

$('#odayg').hover( function(){
    $('#odayg_menu').toggleClass('active');
})

$('#sezon').hover( function(){
    $('#sezon_menu').toggleClass('active');
})
