
var playing = false;
var audioElm = $('#player').get(0);
$(window).scroll(function() {
  var pageScroll = $(window).scrollTop();
  if(!playing && pageScroll > 600 && pageScroll < 1200){
    audioElm.play();
    playing = true;
  }else if(pageScroll > 1200 || pageScroll < 600){
    audioElm.pause();
    playing = false;
  }
});

var playing1 = false;
var audioElm1 = $('#player1').get(0);
$(window).scroll(function() {
  var pageScroll = $(window).scrollTop();
  if(!playing1 && pageScroll > 2450 && pageScroll < 3500){
    audioElm1.play();
    playing1 = true;
  }else if(pageScroll > 3500 || pageScroll < 2450){
    audioElm1.pause();
    playing1 = false;
  }
});











// function play(){
//   var audio = new Audio('uchiha_itachi_theme2.mp3');
//   if(document.body.scrollTop>600 && document.documentElement.scrollTop<1200){
//     audio.loop = true;
//   }
//   else{
//     audio.play();
//   }
// }
//
// document.querySelector('.arrow').addEventListener('click', play);
// window.addEventListener("scroll", myFunction);
//
// function myFunction() {
//     if ((document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200)) {
//         document.getElementById("player").pause();
//     } else {
//         document.getElementById("player").play();
//     }
// }
