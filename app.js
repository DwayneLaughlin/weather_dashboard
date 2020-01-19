$(document).ready(function(){
  

var searchData = $("#searchButton").click(function(){
    var citySearch = $("#searchBar").val().trim();
    $("#highTemp").empty() 
    console.log(citySearch)  

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+citySearch+"&APPID=3962360e63ed61d5bc7374f81a485e9b&units=imperial";
    
    
    var indexURL = "http://api.openweathermap.org/data/2.5/uvi?appid=3962360e63ed61d5bc7374f81a485e9b&lat=41.8756&lon=-87.6245";
       

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){
        var cityName = response.city.name;
        $("#nameDate").html(cityName);
        
        

        var cityTemp = response.list[0].main.temp;
        $("#currentTemp").html("Current Temp: "+ cityTemp + " F");
    
        var cityHumid = response.list[0].main.humidity;
        $("#humidity").html("Humidity: " + cityHumid + "%");
    
        var cityWind = response.list[0].wind.speed;
        $("#windSpeed").html("Wind Speed: " + cityWind + "mph");

        var cityIcon = response.list[0].weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/"+cityIcon+"@2x.png";
        $("#nameDate").html("<img src=" + iconURL +">");

        console.log(iconURL)

        for(i=0; i<5; i++){
            var highList = response.list[i].main.temp_max;
            var lowList = response.list[i].main.temp_min;
            $("#highTemp").append("<div>High:"+highList+" Low:"+lowList+"</div>");
        }


        });
        $.ajax ({
            url:indexURL,
            method:"GET"
        }).then(function (response){
            cityLat = response.city.coord.lat;
            cityLon = response.city.coord.lon;
            
            var index = response.value
            $("#uvIndex").html("UV Index: " + index);        
    
        });
    })
    
    

    

 


    

       
   
    })