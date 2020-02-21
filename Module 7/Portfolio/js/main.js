"use strict";
$(document).ready(function() {
  // slick слайдер
  $(".main-works__examples").slick({
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "ease-in-out",
    dots: false,
    nextArrow: '<button class="next"></button>',
    prevArrow: '<button class="prev"></button>',
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  // Плавный скроллинг к разделам
  $(function() {
    $("a[href^='#']").click(function() {
      var _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top + "px",
      });
      return false;
    });

    $(".main-about__learn-more").on("click", function() {
      var target = $("#skills");
      var pos = $(target).offset().top;
      $("html, body").animate({
        scrollTop: pos - 100,
      });
    });

    //Появление мобильного меню
    $(".mobile-menu-button").click(function(e) {
      e.preventDefault();
      $(".mobile__menu").slideToggle();
    });

    $(window).resize(function() {
      $(".mobile__menu").slideUp(0);
    });
  });
  
  // popups
  $(".callback-button, .mobile-callback-button").click(function(e) {
    e.preventDefault();
    $(".popup-callback").css("display", "flex");
    $("body").toggleClass("hidden");
  });

  $(".button-buy").click(function(e) {
    e.preventDefault();
    $(".popup-find-out-more").css("display", "flex");
    $("body").toggleClass("hidden");
  });

  $(".popup-callback, .popup-find-out-more").click(function(e) {
    if (event.target == this) {
      $(this).hide();
      $("body").toggleClass("hidden");
    }
  });

  $(".popup-callback__submit, .popup-find-out-more__submit").click(function(e) {
    e.preventDefault();
  });
});
