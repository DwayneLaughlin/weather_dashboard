$(document).ready(function(){
    // CURRENT CONDITIONS
    // var citySearch = $("#searchBar").val();
    // $("#searchButton").click(function(){
    //     alert(citySearch)
    // })
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=chicago&APPID=3962360e63ed61d5bc7374f81a485e9b&units=imperial";
    var iconURL = "http://openweathermap.org/img/wn/10d@2x.png"
       

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){
         

            var cityName = response.city.name;
            $("#nameDate").html(cityName);

            var cityIcon = response.list[0].weather[0].icon;
            $("#nameDate").append("<img src=" + iconURL +">");
            
            console.log(cityIcon)

            var cityTemp = response.list[0].main.temp;
            $("#currentTemp").html("Current Temp: "+ cityTemp + " F");
     
            var cityHumid = response.list[0].main.humidity;
            $("#humidity").html("Humidity: " + cityHumid + "%");
     
            var cityWind = response.list[3].wind.speed;
            $("#windSpeed").html("Wind Speed: " + cityWind + "mph");

            for(i=0; i<5; i++){
                var tempList = response.list[i].main.temp
                $("#fiveDay").append(tempList + "<br>")
            }


        });

       
   
    })