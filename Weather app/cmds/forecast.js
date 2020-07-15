// yha se getrwaweather aya pura export hokr
const getRaweather = require("../utilities/getRaweather");
// getloction export hua hei
const getLocation = require("../utilities/getLocation");

// yha pr await or helper  isliye kr rhe hei kyoki jo export hokr ayegha wo async function hei 
 // yeh export hoghe main ko
module.exports.forecast = async function helper (location){

    if(location == undefined){
        location = await getLocation.getLocation();
         
    }


    const raWeather = await getRaweather.getweather(location);
    // console.log(raWeather);

    for(var i =0;i<5;i++){

      const todaysWeather=raWeather[i];

    const state=todaysWeather["weather_state_name"];

    const temp=Math.floor(todaysWeather["the_temp"]);

    const date =todaysWeather["applicable_date"];  

    console.log(`current Conditions in ${location}

            ${temp}°C ${state} ${date} `);
    }

};