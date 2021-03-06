$(document).ready(function () {
  var searchData = $("#searchButton").click(function data() {
    var citySearch = $("#searchBar").val().trim();
    $("#highTemp").empty();

    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      citySearch +
      "&APPID=3962360e63ed61d5bc7374f81a485e9b&units=imperial";
    // ajax call for display of city name, current temp, humidity, windspeed and icon

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var cityName = response.city.name;
      $("#nameDate").html(cityName);

      var cityTemp = response.list[0].main.temp;
      $("#currentTemp").html("Current Temp: " + cityTemp + " F");

      var cityHumid = response.list[0].main.humidity;
      $("#humidity").html("Humidity: " + cityHumid + "%");

      var cityWind = response.list[0].wind.speed;
      $("#windSpeed").html("Wind Speed: " + cityWind + "mph");

      var cityIcon = response.list[0].weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + cityIcon + "@2x.png";
      $("#nameDate").html("<img src=" + iconURL + ">");

      //   for loop for displaying 5 day forecast
      for (i = 0; i < 5; i++) {
        var highList = response.list[i].main.temp_max;
        var lowList = response.list[i].main.temp_min;
        var today = new Date();
        var dateMonth = today.getMonth() + 1;
        var dateDay = "/" + (today.getDate() + i);
        var dateYear = "/" + today.getFullYear();

        $("#highTemp").append(
          "<div>" +
            (dateMonth + dateDay + dateYear) +
            " High:" +
            highList +
            " Low:" +
            lowList +
            "</div>"
        );
      }
      var indexURL =
        "http://api.openweathermap.org/data/2.5/uvi?appid=3962360e63ed61d5bc7374f81a485e9b&lat=" +
        response.city.coord.lat +
        "&lon=" +
        response.city.coord.lon +
        "";

      $.ajax({
        url: indexURL,
        method: "GET",
      }).then(function (response1) {
        var index = response1.value;
        $("#uvIndex").html("UV Index: " + index);
      });

      var cityList = [];
      cityList.push(cityName);
      $("#previous").append(cityList + "<br>");
    });
  });
  // CODE TO MAKE ENTER KEY WORK ON SEARCH BAR
  //   $("#searchBar").keypress(function(e){
  //     if(e.which == 13) {
  //         e.preventDefault()
  //         $("searchButton").click()
  //     }
  // });
});
