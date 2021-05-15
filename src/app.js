import 'external-svg-loader'
import scrollSpy from 'simple-scrollspy'
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
window.onload = function () {
  scrollSpy('#navbar', {
    offset: 0, // in pixels
    menuActiveTarget: '.header-nav > a',
    sectionClass: '.scrollspy',
    activeClass: 'active',
    scrollContainer: ''
  })
}
window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar")
    header.classList.toggle("scrolling", window.scrollY > 0)
})

