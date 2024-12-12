function changeBg(){
 var js = document.getElementById('js');   
var scrollValue = window.scrollY;
if (scrollValue < 50 ) {
    js.classList.remove('bgcolor');
} else{
    js.classList.add('bgcolor');
}



}

window.addEventListener('scroll', changeBg);





// window.onscroll = function(){
//     scroll();
// };
// function scroll(){
// if (document.body.scrollTop < 149 || document.documentElement.scrolltop > 149){
//     document.getElementById("nav").style.top = "70px";
// } else{
//     document.getElementById("nav").style.top = "-70px";
// }
// }
