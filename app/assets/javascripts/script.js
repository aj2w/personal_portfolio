// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// })

// The below shows/hides the home button depending on window position
var setAlternateNavbar = function() {
  if($(document).scrollTop() > 999) {
    $('.home-link').css({'visibility':'visible'});
  } else {
    $('.home-link').css({'visibility':'hidden'});
  }
};
// The below sets the title in the upper right
var setScrollAbout = function() {
  if($(document).scrollTop() > 1000) {
    $('.about-fixed').css({'position':'fixed', 'top':'65px'});
  } else {
    $('.about-fixed').css({'position':'absolute', 'top':'65px'});
  }
};

var setScrollPortfolio = function() {
  if($(document).scrollTop() > 1900) {
    $('.portfolio-fixed').css({'position':'fixed', 'top':'65px'});
  } else {
    $('.portfolio-fixed').css({'position':'absolute', 'top':'65px'});
  }
};



// Sets the window to be ready, calls the functions
$(document).ready(function(){

  // Cache the Window object
  $window = $(window);
  $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
     $(window).scroll(function() {
      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
  }); // window scroll Ends

   });
  $window.scroll(setScrollAbout);
  $window.scroll(setScrollPortfolio);
  $window.scroll(setAlternateNavbar);

  $(".about-link").click(function(){
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 2000);
  });

  $(".home-link").click(function(){
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 1000);
  });

  $(".portfolio-link").click(function(){
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 1500);
  });

  $(".contact-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 2000);
  });
$(window).on('resize', function(event){
  var windowSize = $(window).width(); // Could've done $(this).width()
  if ($window.width() < 1028) {
    // $('.main-title').css({'margin-left':'0','font-size':'50px'});
    $('.screenshots').hide();
  } else {
    // $('.main-title').css({'margin-left':'43%','font-size':'80px'});
    $('.screenshots').show();
  }
  if ($window.width() < 1200) {
    $('.screenshots').css({'width':'80%'});
  } else {
    $('.screenshots').css({'width':'100%'});
  }
});
});



/*
 * Create HTML5 elements for IE's sake
 */

 document.createElement("article");
 document.createElement("section");