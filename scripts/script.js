



// var content = document.getElementsByClassName('content')
// var menuList = document.getElementsByClassName('menu_list')
// console.log(menuList);

// for (var i = 0; i < menuList.lenght; i++){
//     menuList[i].addEventListener('click', function () {
//         var currentActive = document.getElementsByClassName('active')
//         menuList[0].className = menuList[0].className.replace("active", "")
//         currentActive.className += 'active'
//     })
// }

// // var content = document.getElementsByClassName("myDIV");
// // var menuList = document.getElementsByClassName("btn");
// // for (var i = 0; i < btns.length; i++) {
// //   btns[i].addEventListener("click", function() {
// //   var current = document.getElementsByClassName("active");
// //   current[0].className = current[0].className.replace(" active", "");
// //   this.className += " active";
// //   });
// // }


// click able menu bars

var menu_bar = document.getElementById('menu_bar')
var left_div = document.getElementById('left_div')
var content_div = document.getElementById('content_div')



menu_bar.addEventListener('click', function () {
    
    left_div.style.display = 'block'
    left_div.style.width = '50%'
    content_div.style.width = '50%'
    menu_bar.style.display = 'none'
})

var cross_bar = document.getElementById('cross_bar')


cross_bar.addEventListener('click', function () {
    left_div.style.display = 'none'
    content_div.style.width = '100%'
    menu_bar.style.display = 'block'
})