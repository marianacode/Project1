
// variables 


// var destinationID = ''
// var locationID = 0;
// var cuisineID = 0;





// Start jQuery 



// sideNav 

$(document).ready(function () {
  $('.sidenav').sidenav();
});


// Carousel 

$(document).ready(function () {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
})




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




