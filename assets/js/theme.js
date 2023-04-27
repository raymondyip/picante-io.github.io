/*
 Theme Name: picante
 Theme URI: 
 Author: 
 Author URI: 
 Description: Picante
 Version: 1.0
 License:
 License URI: 
*/

/*==================================
    [Table of contents]
===================================
    01. Testimonial Silder
    02. Strech Column
    03. 
    04. 
    05. 
*/

(function ($) {
    'use strict';
    
    /*--- 01. Testimonial Silder ---*/
    if($(".testimonialSlider").length > 0){
       $('.testimonialSlider').owlCarousel({
             autoplay: false,
             loop: true,
             margin: 0,
             active: true,
             autoplayHoverPause: false,
             nav: false,
             mouseDrag: false,
             smartSpeed: 1000,
             autoplayTimeout: 7000,
             animateOut: 'fadeOut', 
             animateIn: 'fadeIn', 
             dots: false,
             items: 1
        });
        $('.prevArrow').click(function(e){
            e.preventDefault();
            $('.testimonialSlider').trigger('next.owl.carousel');
        });
        $('.nextArrow').click(function(e){
            e.preventDefault();
            $('.testimonialSlider').trigger('prev.owl.carousel');
        });
    }
    /*--- 02. Sticky Header ---*/
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".isSticky").addClass("sticky");
            $(".isSticky").removeClass("sticky-out");
        } else if (scroll < lastScrollTop) {
            if (scroll < 500) {
                $(".isSticky").addClass("sticky-out");
                $(".isSticky").removeClass("sticky");
            }
        } else {
            $(".isSticky").removeClass("sticky");
        }
        lastScrollTop = scroll;
    });
    /*--- 03. Mobile Menu ---*/
    $(".header-area.header-2 .main_menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-angle-down"></i>'],
    });

    $(".menuBtn").on("click", function () {
        $(".mobile_menu").addClass("open");
        $("body").addClass("scrollHide");
    });

    $(".closeIcon").on("click", function () {
        $(".mobile_menu").removeClass("open");
        $("body").removeClass("scrollHide");
    });
    /*-- 04. Strech Column --*/
    tj_stretch();
    function tj_stretch() {
        var i = $(window).width();
        $(".row .tj-stretch-element-inside-column").each(function() {
            var $this = $(this),
                row = $this.closest(".row"),
                cols = $this.closest('[class^="col-"]'),
                colsheight = $this.closest('[class^="col-"]').height(),
                rect = this.getBoundingClientRect(),
                l = row[0].getBoundingClientRect(),
                s = cols[0].getBoundingClientRect(),
                r = rect.left,
                d = i - rect.right,
                c = l.left + (parseFloat(row.css("padding-left")) || 0),
                u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                p = s.left,
                f = i - s.right,
                styles = {
                    "margin-left": 0,
                    "margin-right": 0
                };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    
})(jQuery);