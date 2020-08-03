
// / Start jQuery 

$(document).ready(function() {
  console.log("ready!");
  
// sideNav 

$(document).ready(function () {
  $('.sidenav').sidenav();
});


// Slider 

$(document).ready(function(){
  $('.slider').slider();
});
      


  var locationID = 0;
  var radius = 0;
  var cuisineID = 0;

  var recipeID = 0;



    $('.dropdown-trigger').dropdown();

    //Enter hits first submit button
    var input = document.getElementById("location");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit1").click();
        }
    });
    //Enter hits second submit button
    var input = document.getElementById("quantity");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("radiusSubmit").click();
        }
    });

    $("#submit1").on("click", function(event) {
        event.preventDefault();
        searchCities();
    })

    $("#dropdown1").on("click", function(event) {
        event.preventDefault();
        console.log("click");
        console.log($(event.target));
        cuisineSearch();
    })

    $("#dropdown2").on("click", function(event) {
        event.preventDefault();
        console.log("click");
        console.log($(event.target));
        getCuisines();
    })

    $("#radiusSubmit").on("click", function(event) {
        event.preventDefault();
        $("#restaurantResults").empty();
        restaurantSearch();
    })

    function searchCities() {

        var location = $("#location").val();

        console.log(location);

        var queryUrl = "https://developers.zomato.com/api/v2.1/locations?query=" + location + "&count=10";
        
        $.ajax({
            url: queryUrl,
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('user-key', '067fa32cc752cef03a35707d0aa923c7');}
        })

        .then(function(response){
            console.log(response);

            var locationsArray = response.location_suggestions;

            console.log(locationsArray);

                
            for (var i = 0; i < locationsArray.length; i++) {
                
                $("#dropdown1").append(`<li><a data-id=${locationsArray[i].entity_id} href=#!> ${locationsArray[i].title} </a></li>`)
                $("#dropdown1").append("<li class='divider' tabindex='-1'></li>");
                
            };
            
        })

        $('#locationDrop').removeClass('hide');
    }


    function cuisineSearch() {
        
        
        var choice = $(event.target).text();
        console.log(choice);
        $('#locationBtn').text(choice);
        
       
        locationID = $(event.target).attr("data-id");
        console.log(locationID);
    
        var queryUrl2 = "https://developers.zomato.com/api/v2.1/cuisines?city_id=" + locationID;
            
        $.ajax({
            url: queryUrl2,
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('user-key', '067fa32cc752cef03a35707d0aa923c7');}
        })
    
        .then(function(response) {
            console.log(response)
    
            var cuisineArray = response.cuisines;
    
            console.log(cuisineArray);
    
            
            for (var i = 0; i < cuisineArray.length; i++) {
                
                $("#dropdown2").append(`<li><a data-id=${cuisineArray[i].cuisine.cuisine_id} href=#!> ${cuisineArray[i].cuisine.cuisine_name} </a></li>`)
                $("#dropdown2").append("<li class='divider' tabindex='-1'></li>");
                
            };
        
        })

        $('#cuisineDrop').removeClass('hide');
    }


    function getCuisines() {

        cuisineID = $(event.target).attr("data-id");
        console.log(cuisineID);
    
        
        // Cuisine option 
        var cuisineChoice = $(event.target).text();
        console.log(cuisineChoice);
        $('#cuisineBtn').text(cuisineChoice);

        $('#radiusQuestion').removeClass('hide');
    }
    
    
    function restaurantSearch() {

        console.log("New test: ", cuisineID);
    
        radius = $("#quantity").val();

        var queryUrl3 = "https://developers.zomato.com/api/v2.1/search?entity_id=" + locationID + "&entity_type=city&count=10&radius=" + radius + "&cuisines=" + cuisineID + "&sort=rating&order=desc";
    
        $.ajax({
            url: queryUrl3,
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('user-key', '067fa32cc752cef03a35707d0aa923c7');}
        })
        
        .then(function(response) {
            console.log(response);
    
            restaurantArray = response.restaurants;
            console.log(restaurantArray);
    
            for (var i = 0; i < restaurantArray.length; i++) {
                $("#restaurantResults").append(
    
                "<div class='row'><div class='col s12 m6'><div class='card blue-grey lighten-1'><div class='card-content white-text'><span class='card-title'>"
                
                + response.restaurants[i].restaurant.name + " | " + response.restaurants[i].restaurant.location.locality 
                
                + "</span><p>" + response.restaurants[i].restaurant.location.address + "</p>"
                + "<p>User Rating (Out of 5): "
                + response.restaurants[i].restaurant.user_rating.aggregate_rating
                + " " + response.restaurants[i].restaurant.user_rating.rating_text
                + " (" + response.restaurants[i].restaurant.user_rating.votes + " votes)</p>"
                + "<p> Average Price for Two: $" + response.restaurants[i].restaurant.average_cost_for_two + "</p>"
                + "<p>" + response.restaurants[i].restaurant.phone_numbers + "</p>"
               
                + "</div><div class='card-action'><a target='_blank' href="
                + response.restaurants[i].restaurant.url + ">Click here for Website!</a></div></div></div>");
            }
    
        })
    }






//  $(document).ready(function () {

//   const restaurantList = document.querySelector(".restaurants");
//   //  let APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";
//     let APIkey = "067fa32cc752cef03a35707d0aa923c7"
//     let queryURL1 = "https://developers.zomato.com/api/v2.1/cities?q=seattle";
//     let restaurants;
   

    


//     $.ajax({
//         url: queryURL1,
//         method: "GET",
//         headers: {
//           "user-key": APIkey
//     }
//     }).then(function (response) {
//             console.log(response);
//         $.ajax({
//           url: `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/collections?city_id=${response.location_suggestions[0].id}`,
//           method: "GET",
//           headers: {
//             "user-key": APIkey
//           }
//         }).then(function(response){
//           console.log(response);
//         });

//     // let convert = JSON.stringify(response);
//     // $()
//     //         console.log(queryURL)




//   })
});
