
(function ($) {
    "use strict";

    var $main_window = $(window);
	/*=======================================
	    mobile menu js
	 ======================================= */

    var $mob_menu = $("#mobile-menu");
    $(".close-menu").on("click", function () {
        $mob_menu.toggleClass("menu-hide");
    });
    $(".menu-toggle").on("click", function () {
        $mob_menu.toggleClass("menu-hide");
    });

    $("ul.navbar-nav").clone().appendTo(".mobile-menu");

    $(".mobile-menu .has-drop .nav-link").on("click",function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('current');
        $(this).next().slideToggle();
    });


	/*=======================================
	   affix  menu js
	 ======================================= */

    $main_window.on('scroll', function () {  
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $(".menubar").addClass("sticky-menu");
        } else {
            $(".menubar").removeClass("sticky-menu");
        }
    });

    /*=======================================
	   mobile affi  menu js
	 ======================================= */
    $main_window.on('scroll', function () {  
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".mobile-affix").addClass("sticky-menu");
        } else {
            $(".mobile-affix").removeClass("sticky-menu");
        }
    });
    

})(jQuery);
