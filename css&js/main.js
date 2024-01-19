var second = 0;
var minute = 0;
var hour = 0;
var hsn = new Date();

setInterval(
function() {
    hsn = new Date();
    second = hsn.getSeconds() * 6;
    minute = hsn.getMinutes()* 6;
    hour = hsn.getHours()* 30;
    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

}, 1000
);

// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//           document.getElementById('navbar-top').classList.add('fixed-top');
//           // add padding top to show content behind navbar
//           navbar_height = document.querySelector('.navbar').offsetHeight;
//           document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//           document.getElementById('navbar-top').classList.remove('fixed-top');
//            // remove padding top from body
//           document.body.style.paddingTop = '0';
//         } 
//     });
//   }); 
