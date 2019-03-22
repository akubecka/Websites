$(document).scroll(function(){
    $(".main").css("opacity", 1 - $(window).scrollTop() / 350);
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 600);
  });