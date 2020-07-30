$(document).ready(function)(){
 let restaurants

let queryURL = "https://developers.zomato.com/api/v2.1/search" + APIkey;
let APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
    console.log(queryURL)

})   
}
