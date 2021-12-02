$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 20 ) {
    $('nav').addClass('nav_shadow');
    }
    else {
      $('nav').removeClass('nav_shadow');
      
    }
  });

    // $(window).scroll(function(){
    //   if ($(window).scrollTop() >= 20 && $(window).scrollTop() <= 500 ) {
    //   $('nav').addClass('nav_shadow');
    //   }
    //   else if ($(window).scrollTop() >= 500 && $(window).scrollTop() < 950 ) {
    //     $('nav').removeClass('nav_shadow');  
    //     $('nav').addClass('nav_shadow_1');
    //   }
    //   else if($(window).scrollTop() >= 950 ) {
    //     $('nav').removeClass('nav_shadow_1');  
    //     $('nav').addClass('nav_shadow');
    //   }
    //   else {
    //     $('nav').removeClass('nav_shadow');
    //     $('nav').removeClass('nav_shadow_1');
    //   }
    // });
    
});