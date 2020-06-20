// navbar mobile sidebar js 
jQuery(document).ready(function($) {
    $( ".icons" ).click(function() {
      $("#mySidenav").toggleClass('navOpened');
      $("#main").toggleClass('mainOpened');
      $("body").toggleClass('bodyOpened');
      $('.icons').toggleClass('opened');
    });
    $(".demoBody, .nav-link").click(function(){
      $("#mySidenav").removeClass('navOpened');
      $("#main").removeClass('mainOpened');
      $("body").removeClass('bodyOpened');
      $('.icons').removeClass('opened');
    })
    });


        // Navbar transparent
        $(document).ready(function() {
            // Transition effect for navbar 
            $(window).scroll(function() {
              // checks if window is scrolled more than 500px, adds/removes solid class
              if($(this).scrollTop() > 500) { 
                  $('.navbar').addClass('solid');
              } else {
                  $('.navbar').removeClass('solid');
              }
            });
      });