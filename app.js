$(document).ready(function(){
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch +"&APPID=3962360e63ed61d5bc7374f81a485e9b&units=imperial"

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){
        var citySearch = $("#searchBar").val();
        // $("#searchButton").on("click", function(){

        // })

       var cityName = response.city.name;
       $("#nameDate").html(cityName);
       
       var cityTemp = response.list[0].main.temp;
       $("#currentTemp").html("Current Temp: "+ cityTemp + " F");

       var cityHumid = response.list[0].main.humidity;
       $("#humidity").html("Humidity: " + cityHumid + "°");

       var cityWind = response.list[3].wind.speed;
       $("#windSpeed").html("Wind Speed: " + cityWind + "mph");
      
       
    });

   














});