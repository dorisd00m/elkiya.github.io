import 'external-svg-loader'
// import 'smooth-scroll'
// import scrollSpy from 'simple-scrollspy'
// import 'bootstrap'
// import 'bootstrap/js/dist/tab'
// import Collapse from 'bootstrap/js/dist/collapse'

// const collapse = new Collapse(document.querySelector('.collapse'))
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//    var  bodyTop =  document.body.scrollTop,
//         docTop = document.documentElement.scrollTop,
//         point = 120
//   if (bodyTop > point || docTop > point) {
//     document.getElementById("navbar").classList.add("scrolling")
//     console.log(bodyTop)
    
//   } else if(bodyTop < 1 || docTop < 1) {
//     document.getElementById("navbar").classList.remove("scrolling")
//     console.log(bodyTop)
//   }
// }


window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar")
    header.classList.toggle("scrolling", window.scrollY > 0)
})

