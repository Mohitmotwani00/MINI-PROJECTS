
// this liberary is promise based one
//itise used to make request to server and give response
// here response given have extra keys 
// when we need to print data write response.data

const axios =require("axios");


async function helper(){

    const response =  await axios.get("https://jsonplaceholder.typicode.com/users");
//    console.log(response);
   console.log("***************8");
   console.log(response.data);
}

helper();
