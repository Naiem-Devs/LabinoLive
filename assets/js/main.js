(function($) {
    "use strict";

    // menu 
    $('.siteBar-btn').click(function() {
        $('.mobile-menu').toggleClass('siteBar');
    });



    // owlCarousel
    $(".slider-active1").owlCarousel({
        loop: true,
        touchDrag: false,
        mouseDrag: false,
        margin: 30,
        items: 1,
        navText: [
            '<i class="far fa-long-arrow-left"></i>',
            '<i class="far fa-long-arrow-right"></i>'
        ],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // owlCarousel
    $(".mlt_slider_page").owlCarousel({
        loop: true,
        touchDrag: false,
        mouseDrag: false,
        margin: 30,
        items: 1,
        navText: [
        '<img src="assets/img/left.png" alt="">' ,
        '<img src="assets/img/right.png" alt="">'
        ],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // owlCarousel
    $(".s4_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // owlCarousel
    $(".club_m_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });


    // accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    // full page slide
    var elm = document.querySelector('#side_nav');
    var ms = new MenuSpy(elm);

    // Header & Footer hover
    $(".sub_menu_right").hover(function() {
        $(".header-area").toggleClass("back_bg");
    });

    $("footer ul, .fl_left, .ft_right").hover(function() {
        $(".footer").toggleClass("back_bg2");
    })

    $(".ftr_ul").hover(function() {
        $(".footer").toggleClass("back_bg2");
    })
    $("#side_nav").hover(function() {
        $(".footer").removeClass("back_bg2");
    })

    // mobile menu Cilck Event
    $(".man").click(function() {
        $(".mb_form").addClass("show_form");
        $(".mobile-menu").addClass("overflow-hidden");
    });

    $(".manx").click(function() {
        $(".mb_form").removeClass("show_form")
        $(".mobile-menu").removeClass("overflow-hidden")
    });

    $(".opt").click(function() {
        $(".top_cont").addClass("show_form");
        $(".mobile-menu").addClass("overflow-hidden");
    });

    $(".optx").click(function() {
        $(".top_cont").removeClass("show_form")
        $(".mobile-menu").removeClass("overflow-hidden")
    });






    // /* magnificPopup img view */
    // $(".popup-image").magnificPopup({
    //     type: "image",
    //     gallery: {
    //         enabled: true
    //     }
    // });


})(jQuery);