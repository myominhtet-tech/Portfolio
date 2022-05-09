// import { response } from "express";

// console.log("hello world");
// console.error("oops somethong went wrong");
// console.dir({ name: "Andrew", age: 33 });

//Require https module
const https = require('https');
const username = "chalkers";
//function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}
//connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

    //Read the data
    // console.dir(response);
    console.log(response.statusCode);
    let body = "";
    //Read the data
    response.on(`data`, data => {
        body += data.toString();
    });

    response.on(`end`, () => {
        //print data
        console.log(body);
        console.log(typeof body);
    });
});