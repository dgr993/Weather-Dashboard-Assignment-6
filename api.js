$(document).ready(function() {
    var APIKey = "cc3b19a5e219530ad82c36718f50e8c7";
    
    $(".findCity").on("click", function(event){
    event.preventDefault();
    var searchBox = $(".searchBox").val();
    fiveDay(searchBox);
    today(searchBox);

    var newCity=$("<button>")
    newCity.attr("class", "btn btn-secondary col-12")
    newCity.text(searchBox)
    $(".searchHistory").append(newCity)
});
$(".searchHistory").on("click", function(event){
   var cityToSearch =event.target.textContent
    today(cityToSearch)
    fiveDay(cityToSearch)
})



function fiveDay(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + city + ",us&appid=" + APIKey;
$.ajax({
    url:queryURL,
    method: "GET"
})
.then(function(response){
    console.log(queryURL);
    console.log(response);

    //info for first day of the 5 day forecast
    $(".firstDay .date").text(response.list[4].dt_txt.split(" ")[0]);
    $(".firstDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + ".png");
    var tempF = (response.list[4].main.temp- 273.15) * 1.80 + 32;
    $(".firstDay .temp").text("Temp: " + tempF.toFixed(0));
    $(".firstDay .humidity").text("Humidity: " + response.list[4].main.humidity);

    //info for second day of the 5 day forecast
    $(".secondDay .date").text(response.list[9].dt_txt.split(" ")[0]);
    $(".secondDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[9].weather[0].icon + ".png");
    var tempF = (response.list[9].main.temp- 273.15) * 1.80 + 32;
    $(".secondDay .temp").text("Temp: " + tempF.toFixed(0));
    $(".secondDay .humidity").text("Humidity: " + response.list[9].main.humidity);

    //info for third day of the 5 day forecast
    $(".thirdDay .date").text(response.list[17].dt_txt.split(" ")[0]);
    $(".thirdDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[17].weather[0].icon + ".png");
    var tempF = (response.list[17].main.temp- 273.15) * 1.80 + 32;
    $(".thirdDay .temp").text("Temp: " + tempF.toFixed(0));
    $(".thirdDay .humidity").text("Humidity: " + response.list[17].main.humidity);

    //info for fourth day of the 5 day forecast
    $(".fourthDay .date").text(response.list[25].dt_txt.split(" ")[0]);
    $(".fourthDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[25].weather[0].icon + ".png");
    var tempF = (response.list[25].main.temp- 273.15) * 1.80 + 32;
    $(".fourthDay .temp").text("Temp: " + tempF.toFixed(0));
    $(".fourthDay .humidity").text("Humidity: " + response.list[25].main.humidity);

    //info for fifth day of the 5 day forecast
    $(".fifthDay .date").text(response.list[33].dt_txt.split(" ")[0]);
    $(".fifthDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[33].weather[0].icon + ".png");
    var tempF = (response.list[33].main.temp- 273.15) * 1.80 + 32;
    $(".fifthDay .temp").text("Temp: " + tempF.toFixed(0));
    $(".fifthDay .humidity").text("Humidity: " + response.list[33].main.humidity);


});
}

function today(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + ",us&appid=" + APIKey;
$.ajax({
    url:queryURL,
    method: "GET"
})
.then(function(response){
    console.log(queryURL);
    console.log(response);

    //info for first day of the 5 day forecast
    $(".todayForecast .cityName").text(response.name);
    $(".todayForecast .date").text(moment().format('MMMM Do YYYY'));
    $(".todayForecast .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
    var tempF = (response.main.temp- 273.15) * 1.80 + 32;
    $(".todayForecast .temp").text("Temp: " + tempF.toFixed(0));
    $(".todayForecast .humidity").text("Humidity: " + response.main.humidity);
    $(".todayForecast .windSpeed").text("Wind Speed: " + response.wind.speed);
    
    var lat = (response.coord.lat)
    var lon = (response.coord.lon)


    var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
    $.ajax({
        url:queryURL2,
        method: "GET"
    })
    .then(function(response2){
        console.log(queryURL2);
        console.log(response2);
        $(".todayForecast .uvIndex").text("UV Index: " + response2.value);
        var uvColor = response2.value;
        console.log(uvColor)
        if (uvColor < 3){
            $(".todayForecast .uvIndex").css("background-color", "green");
        }
        else if (uvColor > 5){
           uvColor.css("background-color", "red");
        }
        else {
            $(".todayForecast .uvIndex").css("background-color", "yellow");
        }

    });

});
}
});

