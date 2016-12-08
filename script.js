

$(document).ready(function(){

  $("#scroll_down").click(function() {
      $('html, body').animate({
          scrollTop: $("#space").offset().top
        }, 2000);
      });

});
