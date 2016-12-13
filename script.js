

$(document).ready(function(){

  $("#scroll-top").click(function() {
      $('html, body').animate({
          scrollTop: $("#short_text").offset().top
        }, 2000);
      });

});
