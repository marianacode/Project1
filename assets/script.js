$(document).ready(function () {
  const restaurantList = document.getElementsByClassName(restaurants);
   

    let queryURL = "https://developers.zomato.com/api/v2.1/restaurant?" + APIkey;
    let APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            console.log(queryURL);
            console.log(response);

    });
    let convert = JSON.stringify(response);
    $()

    

// var destinationID = ''
// var locationID = 0;
// var cuisineID = 0;





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
    $('input.white grey-text autocomplete').autocomplete({
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

//         })
})
