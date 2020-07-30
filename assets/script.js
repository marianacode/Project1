
// variables 


var destinationID = ''
var locationID = 0;
var cuisineID = 0;





// Start jQuery 



// sideNav 



$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        

  $(document).ready(function(){
    $('.slider').slider({
        data: { 
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
    },
  });
});
        
// Autocomplete 

$(document).ready(function(){
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
  

 

// $('.dropdown-trigger').dropdown();

