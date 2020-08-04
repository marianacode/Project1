    // Test code for recipes
    
    var input = document.getElementById("ingredient");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submit3").click();
        }
    });

    $("#submit3").on("click", function (event) {
        event.preventDefault();
        $("#recipeResults").empty();
        recipeSearch();
    })


    function recipeSearch() {
    
        ingredient = $("#ingredient2").val();

        var appid = "3e9dee68";
        var key = "20737797ddbd5868c5c037017379a8e6";

        var recipeUrl = "https://api.edamam.com/search?q=" + ingredient +"&app_id=" + appid + "&app_key=" + key;
    
        $.ajax({
            url: recipeUrl,
            type: "GET",
        }).then(function(response) {
            console.log(response);
    
            recipeArray = response.hits;
            console.log(recipeArray);
    
            for (var k = 0; k < recipeArray.length; k++) {
                $("#recipeResults").append(
    
                "<div class='row'><div class='col s12 m6'><div class='card blue-grey lighten-1'><div class='card-content white-text'><span class='card-title'>"
                
                + response.hits[k].recipe.label + "</span><p>"
            
                + response.hits[k].recipe.ingredientLines + "</p>"
                              
                + "</div><div class='card-action'><a target='_blank' href="
                + response.hits[k].recipe.url + ">Click here for Website!</a></div></div></div>");
            }
    
        })
    }