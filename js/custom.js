

(function ($)
  { "use strict"
  
  /* 1. Proloder */
      $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(850).css({
          'overflow': 'visible'
        });
      });
  
  /* 2. sticky And Scroll UP */
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
          $("#ftco-navbar").removeClass("sticky-bar");
          $('#back-top').fadeOut(500);
        } else {
          $("#ftco-navbar").addClass("sticky-bar");
          $('#back-top').fadeIn(500);
        }
      });
  
    // Scroll Up
      $('#back-top a').on("click", function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    

      

  	
  
  })(jQuery);

  
    function openNav() {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("main").style.marginRight = "300px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
      document.body.style.backgroundColor = "white";
    }
    
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  