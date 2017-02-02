var navbar_height = 60;
var carousel_height = 500;
var purpose_height = screen.height - navbar_height - carousel_height - 100;

document.getElementById("purpose-id").style.height = purpose_height + "px";

//change carousel time
$('.carousel').carousel({
  interval: 6000 //ms
})
/*
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#homePage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      //$(selector).animate(styles,speed,easing,callback)
      $('html, body').animate({
        scrollTop: $(hash).offset().top//catch the first hash tag and offset from top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
*/
//change navbar
$(window).scroll(function() {
	var title = document.getElementById("title-id");
	var navbar = document.getElementById("navbar-id");
    if ( $(this).scrollTop() > 100){
    //	title.style.fontSize = "25px";
    //	navbar.style.height = "50px";
    } else {
    //    title.style.fontSize = "30px";
    //    navbar.style.height = "60px";
    }
});
$(function(){
    $("#to-top").click(function(){
        $('html, body').animate({
            scrollTop:0
        },550);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 100){
            $('#to-top').fadeIn("fast");
        } else {
            $('#to-top').stop().fadeOut("fast");
        }
    });
});
