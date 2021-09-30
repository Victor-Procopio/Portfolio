$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

jQuery("document").ready(function($){
  var pos = $('.navegation-static').offset().top;
  var nav = $('.navegation-static');

    $(window).scroll(function () {
      if ($(this).scrollTop() > pos) {
      nav.removeClass("navegation-static");
      nav.addClass("navegation-static-scroll");
    } else {
      nav.removeClass("navegation-static-scroll");
      nav.addClass("navegation-static");
    }
  });
});

jQuery("document").ready(function($){
  var pos = $('.logo').offset().top;
  var nav = $('.logo');

    $(window).scroll(function () {
      if ($(this).scrollTop() > pos) {
      nav.removeClass("logo");
      nav.addClass("logo-scroll");
    } else {
      nav.removeClass("logo-scroll");
      nav.addClass("logo");
    }
  });
});