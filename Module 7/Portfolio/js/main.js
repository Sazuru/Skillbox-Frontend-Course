"use strict";

var templateMailRecall = "Ваше имя: {{name}}<br />Телефон: {{phone}}";
var uriMailRecall = "mailto:sazuru@gmail.comu?subject=Заказ%20звонка&body=";
var templateMailChat =
  "Ваше имя: {{name}}<br />Телефон: {{phone}}<br />Почта: {{mail}}";
var uriMailChat = "mailto:sazuru@gmail.com?subject=Узнать%20больше&body=";
var template;

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  // Плавный скроллинг к разделам
  $(function() {
    $("a[href^='#']").click(function() {
      var _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top + "px"
      });
      return false;
    });

    $(".main-about__learn-more").on("click", function() {
      var target = $("#skills");
      var pos = $(target).offset().top;
      $("html, body").animate({ scrollTop: pos - 100 });
    });

    var popupChat = $("#popup-chat");
    var popupRecall = $("#popup-recall");
    var popupBG = $("#popup_bg");

    $(".phone-number").mask("+7 (999) 999-99-99");

    //вызов модальных окон
    $(".callback-button").click(function() {
      popupRecall.fadeIn();
      popupBG.fadeIn();
      document.body.style.overflow = "hidden";
    });

    $(".button-buy").click(function() {
      popupChat.fadeIn();
      popupBG.fadeIn();
      document.body.style.overflow = "hidden";
    });

    //Появление мобильного меню
    $(".mobile-menu-button").click(function(e) {
      e.preventDefault();
      $(".mobile__menu").slideToggle();
    });

    $(window).resize(function() {
      $(".mobile__menu").slideUp(0);
    });

    // валидация форм и отправка писем
    $("#button_send-recall").click(function(e) {
      var userName = $("#form-recall_name-input");
      var phoneNumber = $("#form-recall_phone-input");

      validate(userName, phoneNumber);

      if (userName.val() && phoneNumber.val()) {
        (template = templateMailRecall.replace("{{name}}", userName.val())),
          (template = template.replace("{{phone}}", phoneNumber.val()));

        window.open(uriMailRecall + template, "_blank");
      }
      e.preventDefault();
    });

    $("#button_send-chat").click(function(e) {
      var userName = $("#form-chat_name-input");
      var phoneNumber = $("#form-chat_phone-input");
      var email = $("#form-chat_email-input");

      validate(userName, phoneNumber, email);

      if (userName.val() && phoneNumber.val() && email.val()) {
        (template = templateMailChat.replace("{{name}}", userName.val())),
          (template = template.replace("{{phone}}", phoneNumber.val())),
          (template = template.replace("{{mail}}", email.val()));

        window.open(uriMailChat + template, "_blank");
      }
      e.preventDefault();
    });
  });

  function validate() {
    [].forEach.call(arguments, function(element) {
      if (element.attr("required") && !element.val()) {
        element.css("outline", "2px solid red");
      } else {
        element.css("outline", "none");
      }
    });
  }
});
