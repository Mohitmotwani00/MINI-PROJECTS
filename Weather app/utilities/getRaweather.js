// YEH EXPORT HOGHE TODAY OR FORECAST KO

const axios =require("axios");


// today => today,s weather
// forecast => five days weather
// => location


module.exports.getweather  =  async  function (location){

    // 1. get ID
 const response = await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
//  console.log(response.data);

 // yeh tb ayegha jb api fail hojayegha location detect
//  krne mei or yha pr koi location nhi aygehi answer mei

if(response.data[0]==undefined){
    return "LOCATION NOT SUPPRTED HERE";
}
const woeid = response.data[0].woeid;



// 2.get raw Weather 
 const rawWeather= await axios.get("https://www.metaweather.com/api/location/" + woeid +"/");
 return rawWeather.data["consolidated_weather"];
};

//3. collect the required info and print tpo console
// helper("Mumbai");