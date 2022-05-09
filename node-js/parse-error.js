//Require https module
const https = require('https');

const http = require('http');
//print Error Messages
function printError(error) {
    console.error(error.message);
}
//function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    try {
        //connect to the API URL (https://teamtreehouse.com/username.json)
        const request = https.get(`https://www.teamtreehouse.com/${username}.json`, response => {
            if (response.statusCode === 200) {
                //Read the data
                // console.dir(response);

                let body = "";
                //Read the data
                response.on(`data`, data => {
                    body += data.toString();
                });

                response.on(`end`, () => {
                    //parse the data
                    try {


                        const profile = JSON.parse(body);
                        //Print the data
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const message = `There was an error getting the profile
                for ${ username } (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        request.on('error', printError);
    } catch (error) {
        printError(error);
    }
}
// getProfile("chalkers");
// getProfile("alenaholligan");


const users = ["chalkers", "alenaholligan", "davemcfarland"];

users.forEach(getProfile);