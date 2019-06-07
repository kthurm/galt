$(window).scroll(function() {  

      var scroll = $(window).scrollTop();

      var objectSelect = $("#part1");

      var objectPosition = objectSelect.offset().top;

      if (scroll > objectPosition) {

          $(".revealOnScroll").addClass("slide-out-right");


      } else {

          $(".revealOnScroll").removeClass("slide-out-right");

      }

  });