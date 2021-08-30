(function ($) {
  "use strict";

  /*javaScript for Toggler
   *******************************************************************************************/
  $(".navbar-toggler").on("click", function () {
    $(
      ".menu_box_area .nav-tabs li:first-child a, .menu_box_area #menu"
    ).addClass("active show");
    $(
      ".menu_box_area .nav-tabs li:last-child a, .menu_box_area #categories"
    ).removeClass("active show");
  });


  $(document).ready(function ($) {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li.header_tabs").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({
            'opacity': opacity
          });
        },
        duration: 600
      });
    });

    $(".previous").click(function () {

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li.header_tabs").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({
            'opacity': opacity
          });
        },
        duration: 600
      });
    });

    $('.radio-group .radio').click(function () {
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
    });

    $(".submit").click(function () {
      return false;
    })

    /*javaScript for Single Product Zoom
     *******************************************************************************************/
    $('#product_image_zoom').imagezoomsl();

    /*javaScript for Banner Slider
     *******************************************************************************************/
    $(".owl-carousel.banner-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      touchDrag: true,
      mouseDrag: true,
      navText: [
        "<span class='fal fa-angle-left'></span>",
        "<span class='fal fa-angle-right'></span>"
      ],
      autoplay: false,
      items: 1
    });

    /*javaScript for Service Slider
     *******************************************************************************************/
    $(".owl-carousel.latest-news-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      touchDrag: true,
      mouseDrag: true,
      navText: [
        "<span class='fal fa-angle-left'></span>",
        "<span class='fal fa-angle-right'></span>"
      ],
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        728: {
          items: 3
        }
      }
    });
    /*javaScript for Brand Slider
     *******************************************************************************************/
    $(".owl-carousel.brand-slider, .owl-carousel.related-product-slider").owlCarousel({
      loop: true,
      nav: true,
      dot: false,
      dots: false,
      navText: [
        "<span class='fal fa-angle-left'></span>",
        "<span class='fal fa-angle-right'></span>"
      ],
      autoplay: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        728: {
          items: 3
        },
        960: {
          items: 6
        }
      }
    });
    /*javaScript for Service Slider
     *******************************************************************************************/
    $(".owl-carousel.services-slider").owlCarousel({
      loop: true,
      nav: true,
      navText: [
        "<span class='fal fa-angle-left'></span>",
        "<span class='fal fa-angle-right'></span>"
      ],
      autoplay: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        728: {
          items: 3
        },
        960: {
          items: 4
        }
      }
    });

    /*javaScript for Sticky
     *******************************************************************************************/
    $("#sticker").sticky({
      topSpacing: 0
    });

  });
})(jQuery);