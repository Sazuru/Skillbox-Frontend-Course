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
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });
});
