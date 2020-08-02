
// Start jQuery 
console.log(json[1])

// sideNav 

$(document).ready(function () {
  $('.sidenav').sidenav();
});


// Slider 

$(document).ready(function(){
  $('.slider').slider();
});
      





  // Autocomplete 

  $(document).ready(function () {
    $('input.autocomplete').autocomplete({
      data: {
        "Rome": null,
        "Paris": null,
        "Rio de Janeiro": null,
        "Cancun": null,
        "Madrid": null,
        "London": null,
        "Turkey": null,
        "Mykonos": null
      },
    });
  });




//         })


//flight scanner with flight time and price
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/?",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "f1fdcadb38msha75cd0753c494d3p12675cjsnf7f9a71d3d34"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
 $("<p>").text(response.Quotes.MinPrice);
 $("<p>").text(response.Carriers.CarrierId.Name);
 $("<p>").text(response.Quotes.OutboundLeg.DepartureDate);
});



// Display flight information from Seattle
 $("#flightInfo").on("click", function(event) {
  event.preventDefault();
 })


//  Travel Ban/Restaurant
 $(document).ready(function () {

  const restaurantList = document.querySelector(".restaurants");
   let APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";
    let queryURL1 = "https://developers.zomato.com/api/v2.1/cities?city_ids=20000";
    let restaurants;
   

    


    $.ajax({
        url: queryURL1,
        method: "GET",
        headers: {
          "user-key": APIkey
        }
    }).then(function (response) {
            console.log(response);

    });
    let convert = JSON.stringify(response);
    $()
            console.log(queryURL)


var destinationID = ''
var locationID = 0;
var cuisineID = 0; 

  })
