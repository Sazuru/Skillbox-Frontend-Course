$(function() {
  let citychangeWindow = $(".js-city-change");
  let citychangeButton = $(".js-close-button");
  let currentCity = $(".js-current-city");
  let currentCityText = $(".js-current-city__text");
  let body = $("body");
  let city;

  //Открытие модального окна

  currentCity.on("click", function() {
    event.preventDefault();

    citychangeWindow.toggleClass("city-change_open");
    citychangeWindow.toggleClass("city-change_close");
    citychangeButton.attr("aria-expanded", "true");
    citychangeWindow.attr("aria-modal", "true");
    body.addClass("modal-active");
  });

  //Закрытие модального окна при нажатии кнопки "закрыть"

  citychangeButton
    .children()
    .addBack()
    .on("click", function() {
      citychangeWindow.toggleClass("city-change_open");
      citychangeWindow.toggleClass("city-change_close");
      citychangeButton.attr("aria-expanded", "false");
      citychangeWindow.attr("aria-modal", "false");
      body.removeClass("modal-active");
    });

  //Выбор значения и закрытие модального окна

  citychangeWindow.children().on("click", function(e) {
    city = $(e.target).data("city");
    currentCityText.html(city);
    citychangeWindow.toggleClass("city-change_open");
    citychangeWindow.toggleClass("city-change_close");
    citychangeButton.attr("aria-expanded", "false");
    citychangeWindow.attr("aria-modal", "false");
    body.removeClass("modal-active");
  });

  //Закрытие модального окна при клике вне его

  $(document).click(function(e) {
    if (
      citychangeWindow.hasClass("city-change_open") &&
      !currentCity
        .children()
        .addBack()
        .is(e.target) &&
      !citychangeButton.is(e.target) &&
      !citychangeWindow.is(e.target) &&
      citychangeWindow.has(e.target).length === 0
    ) {
      citychangeWindow.toggleClass("city-change_open");
      citychangeWindow.toggleClass("city-change_close");
      citychangeButton.attr("aria-expanded", "false");
      citychangeWindow.attr("aria-modal", "false");
      body.removeClass("modal-active");
    }
  });
});
