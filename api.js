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

    $(".firstdDay").text(JSON.stringify(response));
    $(".firstDay .date").text(response.list[0].dt_txt.split(" ")[0]);
    $(".firstDay .weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
   
    var tempF = (response.list[0].main.temp- 273.15) * 1.80 + 32;

    // add temp content to html
    $(".firstDay .temp").text("Temp: " + tempF.toFixed(0));
    
    // $(".firstDay .humidity").text("Wind Speed: " + response.wind.speed);
});

});

});

