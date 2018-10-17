// This .on("click") function will trigger the AJAX Call
  $("#find-food").on("click", function (event) {
    event.preventDefault();
    // Here we grab the text from the input box
    var food = $("#food-input").val();
    var exclude = $("#exclude-input").val();
    var results = $("#results-input").val();
    if (results < 1) {results=8}
    // Here we construct our URL
    
    var queryURL = "https://api.edamam.com/search?q=" + food + "&excluded=" + exclude +
      "&app_id=44b11e80&app_key=37ff2a49a5f86602913a54d1f39187bf&to=" + results
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //loop for response
    for (var i = 0; i < response.hits.length; i++){
      var newDiv = $('<div class="recipe-display">');
      
      var labelDisplay = $("<p>" + response.hits[i].recipe.label + "</p>").addClass("label");
      newDiv.append(labelDisplay);
      var imgdisplay = $("<img>").attr("src", response.hits[i].recipe.image).addClass("recipe-img");
      newDiv.append(imgdisplay);
      var urlDisplay = $("<a>").attr("href", response.hits[i].recipe.url).addClass("url-link").text("Make this recipe!");
      newDiv.append(urlDisplay);
      $(".food-contents").append(newDiv);
      console.log(response.hits[i].recipe.label)
    }});
      $("#find-food").on("click", function (event) {
        event.preventDefault();
        // Here we grab the text from the input box
        var location = $("#location-input").val();
        var queryURL = "http://openweathermap.org/data/2.5/weather?q=" + location + "&appid=b6907d289e10d714a6e88b30761fae22&key=d7dc075f987d485c5db4c6f55bda31d6"
       $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          JSON.stringify(response); truetemp =(response.main.temp)*(1.8) + 32;
           if (truetemp < 70) {
            $("#weather-view").html("it is currently" + " " + truetemp + " degrees"  + " " + "you should stay inside and get cozy, or go out dancing")}
          else { $("#weather-view").html("it is currently" + " " + truetemp + " degrees" + " " + "you should have a picnic!!")}})})})