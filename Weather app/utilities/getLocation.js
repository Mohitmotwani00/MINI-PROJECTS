// yha pr hmne dusre server pr request mari jo response ke data mei location degha 
const axios= require("axios");

// yeh hmhe location degha ip adddress dekh kr machine ka jo request ma rhe hei uska
module.exports.getLocation = async function (){

    //give reponse as object
    const response = await axios.get("http://ip-api.com/json/");
    // city return krdi bs
    return response.data["city"];
}