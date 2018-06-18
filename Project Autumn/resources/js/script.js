$(document).ready(function() {
  
    /* For the sticky navigation */
    $('.js-section-features').waypoint(function(direction) {
        var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav-icon i');
        if (direction == "down") {
            $('nav').addClass('sticky');
            if (icon.hasClass('fa-times')) {
                $('.sticky').height('30%');
            } else {
                $('.sticky').height('11%');
            }
        } else {
            $('nav').removeClass('sticky');
        }
    } , {
        offset: '11%;'
    }); 
   
  /* Main Buttons-example
    
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });
    
    */
    /* Smooth Scrolling-navigation scrolling */
    
    $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);  
              return false;
            }
         }
      });
    });
    
    /* Animations on scroll */
    
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated slideInRight');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated rollIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-5').waypoint(function(direction){
        $('.js-wp-5').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* mobile navigation */
    
    $('.js-mobile-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-mobile-nav-icon i');
        nav.slideToggle(200);
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            $('.sticky').height('30%');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
            $('.sticky').height('11%');
        }
        
    });
    
    
});


