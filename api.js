$(document).ready(function() {
    
    $("#findCity").on("click", function(event){
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
})

})

})