const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const fs = require('fs')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let APIkey = "8ed72bc9e077393211fcb8e5f0153fbd";
let cities = [];

const getData = async(count = "1,2,3,4,5") => {
    const options = {
        method: "GET",
        url: `https://developers.zomato.com/api/v2.1/cities?city_ids=${count}`,
        headers: {
             "user-key": APIkey
        }
    }
    try {
        const {data} = await axios(options);
    cities = [...cities, data];
     console.log(cities.length);
     newCount = count.split(",").map(a=> +a+5).join(",");
     return getData(newCount)
    }catch(err){
        fs.writeFile("cities.json", JSON.stringify(cities), err => {
        console.log(err|| "Success!")
    })
        return;
    }
}




app.listen(PORT , () => {
    console.log("app is running!");
    getData()
})