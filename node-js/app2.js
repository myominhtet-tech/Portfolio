//Require https module
const https = require('https');

//function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    //connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

        //Read the data
        // console.dir(response);

        let body = "";
        //Read the data
        response.on(`data`, data => {
            body += data.toString();
        });

        response.on(`end`, () => {
            //parse the data
            const profile = JSON.parse(body);
            //Print the data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        });
    });
}

// getProfile("chalkers");
// getProfile("alenaholligan");

console.log(process.argv);
// const users = ["chalkers", "alenaholligan", "davemcfarland"];

// users.forEach(getProfile);