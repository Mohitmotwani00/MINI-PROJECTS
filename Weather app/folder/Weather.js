// to make a weather app
// client maregha server ko request 
// wha se aghe marenge metaweather ko request fir wapis ayegha data

const axios =require("axios");


// today => today,s weather
// forecast => fibe days weather
// => location

// input => cmd
// proccess.agv lega input run krne ke sth sth hi
// slice(2) => node weather.js htjayegha uske aghe ka ayegha
const input = process.argv.slice(2);
// today ayeghi
const cmd =input[0];
// yha pr new delhi hua => new delhi krdenge usko
const location = input.slice(1).join(" ");
console.log(input);

async  function helper(){

    // 1. get ID
 const response = await axios.get("https://www.metaweather.com/api/location/search/?query=london");
 console.log(response.data);
 const woeid = response.data.woeid;

// 2.get raw Weather 
 const rawWeather= await axios.get(`https://www.metaweather.com/api/location/44418/${woeid}`);
 console.log(rawWeather.data["consolidated_weather"][0]);
};

helper();