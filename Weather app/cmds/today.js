// yha se getrwaweather aya pura export hokr
const getRaweather = require("../utilities/getRaweather");
// getloction export hua hei
const getLocation = require("../utilities/getLocation");

 // yha pr await or helper  isliye kr rhe hei kyoki jo export hokr ayegha wo async function hei 
 // yeh export hoghe main ko
 module.exports.today = async function helper (location){
  
   // jb  location mentioned nhi hei to getlocation se location legha
   if(location == undefined){
      location = await getLocation.getLocation();
    }
    // get location inmumbai
    //23* c
    
    const raWeather = await getRaweather.getweather(location);

    if(raWeather=="LOCATION NOT SUPPRTED HERE"){
      console.log("LOCATION NOT SUPPRTED HERE"); 
      return;
    }

    // yha prdata se  otday wala display kradia bss
    const todaysWeather=raWeather[0];

    const state=todaysWeather["weather_state_name"];

    const temp=Math.floor(todaysWeather["the_temp"]);

    console.log(`current Conditions in ${location}

            ${temp}°C ${state} `);
    

};

//steps
// 1. check => location?getlocation
// 2.getRaweather
//3.MODIFY the data