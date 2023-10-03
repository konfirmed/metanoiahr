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

    // ---------- navbar 9 search  -----------
    $(".text-nav3 .close-btn").on("click" , function(){
        $(this).parent().slideUp(500);
    })


    // ---------- side_menu_style4 submenu -----------
    $(".side_menu_style4 .main_links .links_group").on("mouseenter" , function(){
        $(this).children(".sub_links_menu").slideDown(500);
    })
    $(".side_menu_style4 .main_links .links_group").on("mouseleave" , function(){
        $(this).children(".sub_links_menu").slideUp(500);
    })
    $(".navbar.style4 .side_menu_btn").on("click" , function(){
        $(this).toggleClass("active");
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    })

    // ---------- side_menu_style3 submenu -----------
    // $(".navbar.style16 .side_menu_btn").on("click" , function(){
    //     $(this).toggleClass("active");
    //     $(".side_menu13_overlay").toggleClass("show");
    //     $(".side_menu13_overlay2").toggleClass("show");
    //     $(".side_menu_style13").toggleClass("show");
    // })

    // $(".side_menu_style13 .cls").on("click" , function(){
    //     $(".side_menu13_overlay").removeClass("show");
    //     $(".side_menu13_overlay2").removeClass("show");
    //     $(".side_menu_style13").removeClass("show");
    // })

    // ---------- side_menu_style3 submenu global -----------
    $(".side_menu_btn").on("click" , function(){
        $(this).toggleClass("active");
        $(".side_menu13_overlay").toggleClass("show");
        $(".side_menu13_overlay2").toggleClass("show");
        $(".side_menu_style13").toggleClass("show");
    })

    $(".side_menu_style13 .cls").on("click" , function(){
        $(".side_menu13_overlay").removeClass("show");
        $(".side_menu13_overlay2").removeClass("show");
        $(".side_menu_style13").removeClass("show");
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


    /* ==  priceing_style1  == */
    $('#monthly-input').on('change', function() {
      $(".monthly_price").show();
      $(".monthly_price").siblings(".yearly_price").hide();
    });
    $('#yearly-input').on('change', function() {
        $(".yearly_price").show();
        $(".yearly_price").siblings(".monthly_price").hide();
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

/* =  Preloader page  = */

    // paceOptions = {
    //     ajax: true,
    //     document: true,
    //     eventLag: false
    // };

    // Pace.on('done', function () {
    //     $('#preloader').addClass("isdone");
    //     $('.loading').addClass("isdone");
    // });

    // -------- counter --------
        $('.counter').countUp({
            delay: 10,
            time: 2000
        });
        
});

$(document).ready(function() {
    
    // --------- fav btn ---------
    $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });
});



/* ==  footer effect  == */
 $(document).ready(function() {
  let footerHeight = $(".fixed-footer").height()
  $(".body-fixed-footer").css("padding-bottom", footerHeight);
  $(".body-fixed-footer .smooth-scroll-content").css("padding-bottom", footerHeight);
});

/* ==  pricing effect  == */
$(document).ready(function() {
    $('.tc-pricing-style5 .tabs a').on("click" , function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
});



// ------------ swiper sliders -----------
$(document).ready(function() {

  // ------------ testimonial-slider1 -----------
  var swiper = new Swiper('.tc-testimonial-slider1 .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1000,
      pagination: false,
      navigation: {
          nextEl: '.tc-testimonial-slider1 .swiper-button-next',
          prevEl: '.tc-testimonial-slider1 .swiper-button-prev',
      },
      mousewheel: false,
      keyboard: true,
      autoplay: {
          delay: 5000,
      },
      loop: true,
  });

  // ------------ testimonial-slider2 -----------
  var swiper = new Swiper('.tc-testimonial-slider2 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
        nextEl: '.tc-testimonial-slider2 .swiper-button-next',
        prevEl: '.tc-testimonial-slider2 .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
});
  
  // ------------ clients sliders -----------
  let SwiperBottom = new Swiper('.tc-partners-slider2 .swiper-container', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 6,
      speed: 6000,
      autoplay: {
          delay: 1,
      },
      loop: true,
    //   allowTouchMove: false,
      disableOnInteraction: true,
      breakpoints: {
          0: {
              slidesPerView: 2,
          },
          480: {
              slidesPerView: 2,
          },
          787: {
              slidesPerView: 3,
          },
          991: {
              slidesPerView: 4,
          },
          1200: {
              slidesPerView: 6,
          }
      }
    });

    // ------------ clients sliders -----------
  var swiper = new Swiper('.tc-approach-slider2 .swiper-container', {
    spaceBetween: 30,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: false,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 3.7,
        }
    }
  });

     // ------------ clients sliders -----------
     var swiper = new Swiper('.tc-blog-slider2 .swiper-container', {
      spaceBetween: 30,
      // centeredSlides: true,
      // slidesPerView: 6,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      pagination: {
        el: ".tc-blog-slider2 .swiper-pagination",
        clickable: true ,
      },
      navigation: false,
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          480: {
              slidesPerView: 1,
          },
          787: {
              slidesPerView: 1,
          },
          991: {
              slidesPerView: 2,
          },
          1200: {
              slidesPerView: 2,
          }
      }
    });

    // ------------ features 3 sliders -----------
    var swiper = new Swiper('.tc-features-slider3 .swiper-container', {
        spaceBetween: 10,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ features 3 sliders -----------
    var swiper = new Swiper('.tc-about-slider5 .swiper-container', {
        spaceBetween: 50,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

      // ------------ features 3 sliders -----------
      var swiper = new Swiper('.tc-testimonial-slider3 .swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".tc-testimonial-slider3 .swiper-pagination",
            clickable: true ,
          },
        loop: true,
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
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ tc-header-slider4 -----------
    var swiper = new Swiper('.tc-header-slider4 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        mousewheel: true,
        loop: false, // Not recommended to enable!!!
        // longSwipesRatio: 0.01,
        // followFinger: false,
        // grabCursor: true, 
        // watchSlidesProgress: true,
        parallax: true,
        lazy: {
                loadPrevNext: true,
            },
        navigation: {
            nextEl: '.tc-header-slider4 .swiper-button-next',
            prevEl: '.tc-header-slider4 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ tc-projects-slider4 -----------
    var swiper = new Swiper('.tc-projects-slider4 .swiper-container', {
        // slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
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
                slidesPerView: 2,
            }
        }
    });

    // ------------ features 3 sliders -----------
    var swiper = new Swiper('.tc-get-aquote-slider4 .swiper-container', {
        spaceBetween: 10,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ courses-slider5 -----------
    var swiper = new Swiper('.courses-slider5 .swiper-container', {
        spaceBetween: 30,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    //   allowTouchMove: false,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.courses-slider5 .swiper-button-next',
            prevEl: '.courses-slider5 .swiper-button-prev',
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
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ tc-categores-slider5 -----------
    var swiper = new Swiper('.tc-categores-slider5 .swiper-container', {
        spaceBetween: 30,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    //   allowTouchMove: false,
        observer: true,
        observeParents: true,
        pagination: false,
        navigation: {
            nextEl: '.tc-categores-slider5 .swiper-button-next',
            prevEl: '.tc-categores-slider5 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });

    // ------------ tc-categores-slider5 -----------
    var swiper = new Swiper('.tc-testimonial-slider5 .swiper-container', {
        spaceBetween: 30,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    //   allowTouchMove: false,
        observer: true,
        observeParents: true,
        pagination: {
            el: ".tc-testimonial-slider5 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-testimonial-slider5 .arrow-next',
            prevEl: '.tc-testimonial-slider5 .arrow-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ clients sliders -----------
    var swiper = new Swiper('.tc-partners-slider5 .swiper-container', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 6,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
  //   allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        }
    }
  });

  // ------------ tc-projects-slider6 -----------
  var swiper = new Swiper('.tc-projects-slider6 .swiper-container', {
    spaceBetween: 30,
    // slidesPerView: 6,
    // centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    loop: true,
//   allowTouchMove: false,
    observer: true,
    observeParents: true,
    pagination: false,
    navigation: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        787: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        }
    }
});

// ------------ clients sliders -----------
var swiper = new Swiper('.project-gallery-slider3 .swiper-container', {
    spaceBetween: 30,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    loop: true,
  //   allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        787: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        }
    }
  });

  // ------------ clients sliders -----------
var swiper = new Swiper('.related-projects-slider3 .swiper-container', {
    spaceBetween: 30,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    loop: true,
  //   allowTouchMove: false,
    disableOnInteraction: true,
    navigation: {
        nextEl: '.related-projects-slider3 .swiper-button-next',
        prevEl: '.related-projects-slider3 .swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        787: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
  });

// ------------ post-slider3 -----------
  var swiper = new Swiper('.post-slider3 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    pagination: {
        el: '.post-slider3 .swiper-pagination',
        type: 'fraction',
      },
    navigation: {
        nextEl: '.post-slider3 .swiper-button-next',
        prevEl: '.post-slider3 .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
});

// ------------ columnist slider8 -----------
var swiper = new Swiper('.tc-next-prev-post-slider .swiper-container', {
    // slidesPerView: 2,
    spaceBetween: 60,
    speed: 1000,
    pagination: false,
    navigation: {
        nextEl: '.tc-next-prev-post-slider .swiper-button-next',
        prevEl: '.tc-next-prev-post-slider .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: false,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        }
    }
});

// ------------ related-products-slider3 -----------
var swiper = new Swiper('.related-products-slider3 .swiper-container', {
    spaceBetween: 0,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
        el: ".related-products-slider3 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.related-products-slider3 .swiper-button-next',
        prevEl: '.related-products-slider3 .swiper-button-prev',
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
  });

  // ------------ related-products-slider3 -----------
    var swiper = new Swiper('.tc-projects-slider7 .swiper-container', {
    spaceBetween: 0,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    navigation: {
        nextEl: '.tc-projects-slider7 .swiper-next',
        prevEl: '.tc-projects-slider7 .swiper-prev',
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
    });


    // ------------ related-products-slider3 -----------
    var swiper = new Swiper('.tc-testimonial-slider7 .swiper-container', {
        spaceBetween: 0,
        // centeredSlides: true,
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
        navigation: {
            nextEl: '.tc-testimonial-slider7 .swiper-next',
            prevEl: '.tc-testimonial-slider7 .swiper-prev',
        },
    });

    // ------------ blog-slider7 -----------
    var swiper = new Swiper('.tc-blog-slider7 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: false,
        navigation: {
            nextEl: '.tc-blog-slider7 .swiper-button-next',
            prevEl: '.tc-blog-slider7 .swiper-button-prev',
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
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-products-slider3 -----------
    var swiper = new Swiper('.header-banner-slider8 .swiper-container', {
        spaceBetween: 0,
        // centeredSlides: true,
        effect: "fade",
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.header-banner-slider8 .swiper-next',
            prevEl: '.header-banner-slider8 .swiper-prev',
        },
    });

    // ------------ rooms-slider8 -----------
    var swiper = new Swiper('.rooms-slider8 .swiper-container', {
        spaceBetween: 15,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: false,
        navigation: {
            nextEl: '.tc-rooms-style8 .swiper-next',
            prevEl: '.tc-rooms-style8 .swiper-prev',
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
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ products-slider8 -----------
var swiper = new Swiper('.products-slider8 .swiper-container', {
    spaceBetween: 0,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
        el: ".products-slider8 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.tc-products-style8 .swiper-next',
        prevEl: '.tc-products-style8 .swiper-prev',
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
  });

      // ------------ products-slider8 -----------
var swiper = new Swiper('.products-slider9 .swiper-container', {
    spaceBetween: 30,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
        el: ".products-slider9 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.tc-products-style8 .swiper-next',
        prevEl: '.tc-products-style8 .swiper-prev',
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
  });

  // ------------ products-slider8 -----------
var swiper = new Swiper('.testimonial-slider8 .swiper-container', {
    spaceBetween: 30,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
        el: ".tc-testimonial-style8 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.tc-testimonial-style8 .swiper-next',
        prevEl: '.tc-testimonial-style8 .swiper-prev',
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
    }
  });

  // ------------ tc-blog-style8 -----------
var swiper = new Swiper('.tc-blog-style8 .swiper-container', {
    spaceBetween: 30,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
        el: ".tc-blog-style8 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.tc-blog-style8 .swiper-next',
        prevEl: '.tc-blog-style8 .swiper-prev',
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
  });

  // ------------ clients sliders -----------
  var swiper = new Swiper('.tc-categories-slider10 .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    // slidesPerView: 6,
    speed: 2000,
    autoplay: {
        delay: 5000,
    },
    loop: true,
  //   allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        787: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        }
    }
  });

  // ------------ tc-header-slider4 -----------
  var swiper = new Swiper('.tc-header-style11 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    centeredSlides: true,
    speed: 1500,
    pagination: false,
    mousewheel: true,
    loop: false, // Not recommended to enable!!!
    // longSwipesRatio: 0.01,
    // followFinger: false,
    // grabCursor: true, 
    // watchSlidesProgress: true,
    parallax: true,
    navigation: {
        nextEl: '.tc-header-style11 .swiper-button-next',
        prevEl: '.tc-header-style11 .swiper-button-prev',
    },
    lazy: {
            loadPrevNext: true,
        },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    mousewheel: {
        releaseOnEdges: true,
    },
});

// ------------ tc-projects-slider12 -----------
var swiper = new Swiper('.tc-projects-slider12 .swiper-container', {
    spaceBetween: 50,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: false,
    navigation: false,
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },
    mousewheel: {
        releaseOnEdges: true,
    },
  });

  // ------------ testimonial-slider1 -----------
  var swiper = new Swiper('.main-blog-slider18 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
        nextEl: '.main-blog-slider18 .swiper-button-next',
        prevEl: '.main-blog-slider18 .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
});

 // ------------ testimonial-slider1 -----------
 var swiper = new Swiper('.tc-footer-slider18 .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: {
        el: '.tc-footer-slider18 .swiper-pagination',
        clickable: true,
    },
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
});

// ------------ tc-projects-slider12 -----------
var swiper = new Swiper('.tc-header-slider19 .swiper-container', {
    spaceBetween: 110,
    centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: false,
    navigation: false,
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.9,
        }
    },
    mousewheel: {
        releaseOnEdges: true,
    },
  });


  // ------------ tc-projects-slider12 -----------
var swiper = new Swiper('.tc-header-slider20 .swiper-container', {
    spaceBetween: 100,
    centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: false,
    navigation: false,
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
            slidesPerView: 2,
        }
    },
    mousewheel: {
        releaseOnEdges: true,
    },
  });

  // ------------ tc-projects-slider12 -----------
var swiper = new Swiper('.tc-blog-slider24', {
    spaceBetween: 40,
    // centeredSlides: true,
    // slidesPerView: 6,
    speed: 1000,
    autoplay: {
      delay: 8000,
    },
    loop: false,
    pagination: false,
    navigation: false,
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
    // mousewheel: {
    //     releaseOnEdges: true,
    // },
  });


    // ------------ tc-header-slider22 -----------
    var Vswiper = new Swiper('.tc-header-slider22 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        direction: 'vertical',
        pagination: {
            el: '.tc-header-slider22 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        mousewheel: {
            releaseOnEdges: true,
        },
    });

     // ------------ testimonial-slider23 -----------
    var swiper = new Swiper('.tc-header-slider23 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-header-slider23 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        mousewheel: {
            releaseOnEdges: true,
        },
    });

    // ------------ tc-story-imgs-slider26 -----------
    var swiper = new Swiper('.tc-story-imgs-slider26 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-story-imgs-slider26 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        // mousewheel: {
        //     releaseOnEdges: true,
        // },
    });


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


  // ------------ tc-Testimonials-slider25 -----------
    var swiper = new Swiper('.tc-Testimonials-slider25', {
        spaceBetween: 95,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: false,
        loop: false,
        pagination: false,
        navigation: {
            nextEl: '.tc-Testimonials-style25 .swiper-next',
            prevEl: '.tc-Testimonials-style25 .swiper-prev',
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
                slidesPerView: 2.5,
            }
        },
        // mousewheel: {
        //     releaseOnEdges: true,
        // },
    });


    // ------------ info-marquee-slider27 -----------
    var swiper = new Swiper('.info-marquee-slider27', {
        spaceBetween: 95,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        pagination: false,
        navigation: false,
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
                slidesPerView: 2.5,
            }
        },
        // mousewheel: {
        //     releaseOnEdges: true,
        // },
    });


    // ------------ tc-testimonials-slider27 -----------
    var swiper = new Swiper('.tc-testimonials-slider27', {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        // mousewheel: {
        //     releaseOnEdges: true,
        // },
    });


    // ------------ tc-projects-slider28 -----------
    var swiper = new Swiper('.tc-projects-slider28', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: false,
        loop: false,
        pagination: false,
        navigation: {
            nextEl: '.tc-projects-style28 .swiper-next',
            prevEl: '.tc-projects-style28 .swiper-prev',
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
        // mousewheel: {
        //     releaseOnEdges: true,
        // },
    });

    // ------------ tc-testimonials-slider27 -----------
    var swiper = new Swiper('.tc-testimonials-slider28', {
        slidesPerView: 1,
        spaceBetween: 15,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        // mousewheel: {
        //     releaseOnEdges: true,
        // },
    });

});

// ------------ working in desktop -----------
if ($(window).width() > 991) {
    $('.parallaxie').parallaxie({

    });

    $('.tc-testimonial-style1.parallaxie').parallaxie({
      speed: -0.6,
    });
}

$( function() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');

    if (mode === 'dark') {
    document.body.classList.add('dark-theme');
    } else if (mode === 'light') {
    document.body.classList.add('light-theme');
    }
});

// $( function() {
//     // ---------- hover dropdown -----------
//     const $dropdown = $(".dropdown");
//     const $dropdownToggle = $(".dropdown-toggle");
//     const $dropdownMenu = $(".dropdown-menu");
//     const showClass = "show";
//     $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 768px)").matches) {
//         $dropdown.hover(
//         function() {
//             const $this = $(this);
//             $this.addClass(showClass);
//             $this.find($dropdownToggle).attr("aria-expanded", "true");
//             $this.find($dropdownMenu).addClass(showClass);
//         },
//         function() {
//             const $this = $(this);
//             $this.removeClass(showClass);
//             $this.find($dropdownToggle).attr("aria-expanded", "false");
//             $this.find($dropdownMenu).removeClass(showClass);
//         }
//         );
//     } else {
//         $dropdown.off("mouseenter mouseleave");
//     }
//     }); 
// });