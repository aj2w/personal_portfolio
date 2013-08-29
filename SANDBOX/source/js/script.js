// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// })

var setScrollAbout = function() {
  if($(document).scrollTop() > 1000) {
    $('.about-fixed').css({'position':'fixed', 'top':'65px'});
  } else {
    $('.about-fixed').css({'position':'absolute', 'top':'65px'});
  }
};

var setScrollPortfolio = function() {
  if($(document).scrollTop() > 2000) {
    $('.portfolio-fixed').css({'position':'fixed', 'top':'65px'});
  } else {
    $('.portfolio-fixed').css({'position':'absolute', 'top':'65px'});
  }
};

var setScrollContact = function() {
  if($(document).scrollTop() > 3500) {
    $('.contact-fixed').css({'position':'fixed', 'top':'65px'});
  } else {
    $('.contact-fixed').css({'position':'absolute', 'top':'65px'});
  }
};

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
  $window.scroll(setScrollContact);
});

/*
 * Create HTML5 elements for IE's sake
 */

 document.createElement("article");
 document.createElement("section");