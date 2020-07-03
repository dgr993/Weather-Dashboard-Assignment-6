$(document).ready(function() {
    
    $(".findCity").on("click", function(event){
    event.preventDefault();

    var searchBox = $(".searchBox").val();

    var APIKey = "cc3b19a5e219530ad82c36718f50e8c7";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + searchBox + ",us&appid=" + APIKey;



$.ajax({
    url:queryURL,
    method: "GET"
})
.then(function(response){
    console.log(queryURL);
    console.log(response);

    //info for first day of the 5 day forecast
    $(".firstDay .date").text(response.list[0].dt_txt.split(" ")[0]);
    $(".firstDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
    var tempF = (response.list[0].main.temp- 273.15) * 1.80 + 32;
    $(".firstDay .temp").text("Temp: " + tempF.toFixed(0));
    $(".firstDay .humidity").text("Humidity: " + response.list[0].main.humidity);

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

});

});

