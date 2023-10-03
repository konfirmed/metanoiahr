$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // ---------- close button -----------
    $(".navbar .search_btn").on("click" , function(){
        $(".nav-search-box").toggleClass("show");
    })
    
    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    /* ==  float_box_container button  == */
  $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    /* ==  Button Animation  == */
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  
  $( ".button_su_inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  // -------- counter --------
  $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // --------- fav btn ---------
    $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

    
    // -------- parralax img mouse move -------
    $(function () {
        
        var b = document.getElementsByTagName("BODY")[0];  

        b.addEventListener("mousemove", function(event) {
        parallaxed(event);

        });

        function parallaxed(e) {
            var amountMovedX = (e.clientX * -0.3 / 10);
            var amountMovedY = (e.clientY * -0.3 / 10);
            var x = document.getElementsByClassName("parallaxed");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            }
        }
    });

});

// ------------ working in desktop -----------
if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
    });
}

// ------------ swiper sliders -----------
$(document).ready(function() {    

    // ------------ testimonial-slider24 -----------
    var galleryTop = new Swiper(".tc-testimonials-style24 .testimonials-main-slider", {
        spaceBetween: 40,
        grabCursor: true,
        speed: 1000,
        navigation: false,
        loop: true,
        loopedSlides: 9,
        // autoplay: false,
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: ".tc-testimonials-style24 .swiper-pagination",
            clickable: true,
        },
        // other parameters
        on: {
        click: function() {
            /* do something */
        }
        },
        keyboard: {
        enabled: true,
        onlyInViewport: false
        }
    });

    /* thumbs */
    var galleryThumbs = new Swiper(".tc-testimonials-style24 .testimonials-sub-slider", {
        spaceBetween: 10,
        centeredSlides: true,
        speed: 1000,
        slidesPerView: "3",
        touchRatio: 0.4,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 9,
        keyboard: {
        enabled: true,
        onlyInViewport: false
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
  
    /* set controller  */
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
    

});


