$(function() {
  $.get(
    "http://data.fixer.io/api/latest?access_key=b0e15e016830f80f4c6895be19bf2663",
    function(response) {
      var rate_rub = response.rates.RUB;
      var rate_usd = response.rates.RUB / response.rates.USD;
      $(".usd-value").text("Доллар: " + rate_usd.toFixed(2) + " руб.");
      $(".eur-value").text("Евро: " + rate_rub.toFixed(2) + " руб.");
    }
  );
});
