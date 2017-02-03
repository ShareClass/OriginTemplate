var navbar_height = 60;
var carousel_height = 500;

//document.getElementById("purpose-id").style.height = purpose_height + "px";

//change navbar
/*
$(window).scroll(function() {
    var x = document.getElementById("navbar-id");
    if($(this).scrollTop() > 10){
        x.style.backgroundColor = "rgba(255, 255, 255, 1)";
        x.style["boxShadow"] = "0 0 20px 5px rgba(0, 0, 0, 0.12)";
    } 
    else{
        x.style.backgroundColor = "rgba(255, 255, 255, 0)";
        x.style["boxShadow"] = "none";        
    }
});
*/

document.getElementById("photo1").style.maxWidth = window.screen.width+ "px";
document.getElementById("photo2").style.maxWidth = window.screen.width+ "px";
document.getElementById("photo3").style.maxWidth = window.screen.width+ "px";

function myFunction() {
    var x = document.getElementById("navbar-id");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//change carousel time
$('.carousel').carousel({
  interval: 6000 //ms
})
//to-top
$(function(){
    $("#to-top").click(function(){
        $('html, body').animate({
            scrollTop:0
        },550);
    });
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#to-top').fadeIn("fast");
        } 
        else{
            $('#to-top').stop().fadeOut("fast");
        }
    });
});