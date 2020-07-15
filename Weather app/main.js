// to make a weather app
// client maregha server ko request 
// wha se aghe marenge metaweather ko request fir wapis ayegha data

// yeh sare export cmds ko require krenge or apply krenge
const today=require("./cmds/today");
const forecast = require("./cmds/forecast");
const version = require("./cmds/version");
const help = require("./cmds/help");
const minimist=require("minimist");

// input => cmd
// proccess.agv lega input run krne ke sth sth hi
// slice(2) => node weather.js htjayegha uske aghe ka ayegha
const input =minimist( process.argv.slice(2));
console.log(input);
// today ayeghi
const cmd =input["_"][0];
// yha pr new delhi hua => new delhi krdenge usko
const location = input.l ||input.location;

// console.log(input);

if(cmd=="today"){
    today.today(location);
}
else if(cmd == "forecast"){
    forecast.forecast(location);
}
else if(cmd=="help"){
    help.help();
}
else if(cmd==="version"){
    version.version();
}
else {

    console.log("WRONG COMMAND");
}
 