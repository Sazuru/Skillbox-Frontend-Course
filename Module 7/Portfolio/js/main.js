'use strict';
$(document).ready(function() {
  // slick слайдер
  $('.main-works__examples').slick({
    infinite: true,
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    speed: 300,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'ease-in-out',
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
      var _href = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(_href).offset().top + 'px',
      });
      return false;
    });

    //Появление мобильного меню
    $('.mobile-menu-button').click(function(e) {
      e.preventDefault();
      $('.mobile__menu').slideToggle();
    });

    $(window).resize(function() {
      $('.mobile__menu').slideUp(0);
    });
  });

  // popups
  $('.callback-button, .mobile-callback-button').click(function(e) {
    e.preventDefault();
    $('.popup-callback').css('display', 'flex');
    $('body').toggleClass('hidden');
  });

  $('.button-buy').click(function(e) {
    e.preventDefault();
    $('.popup-find-out-more').css('display', 'flex');
    $('body').toggleClass('hidden');
  });

  $('.popup-callback, .popup-find-out-more').click(function(e) {
    if (event.target == this) {
      $(this).hide();
      $('body').toggleClass('hidden');
    }
  });

  //Отправка данных
  $('.popup-callback__form, .popup-find-out-more__form').submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function() {
      alert('Спасибо!');
      setTimeout(function() {
        // Done Functions
        th.trigger('reset');
        $('.popup-callback').css('display', 'none');
        $('.popup-find-out-more').css('display', 'none');
        $('body').toggleClass('hidden');
      }, 1000);
    });
    return false;
  });
});
