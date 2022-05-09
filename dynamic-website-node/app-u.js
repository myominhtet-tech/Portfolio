var router = require("./user-route.js");
//Problem: we need a simple way to look at a user`s badge count and javaScript point from a web browser
//Solution: use js to perform th profile look up and serve our template via http

//create a web server 
const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, response) => {

    router.home(request, response);
    router.user(request, response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//rouer exex
//Handle Http route GET / and POST  / i.e. Home
function home(request, response) {

    //if url -- "/" && Get
    if (request.url === "/") {
        //show search
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write("Header\n");
        response.write("Search\n");
        response.write("Footer\n");
    }
    //if url == "/" && Post
    //redirect to /:username
}

//Handle http route Get /:username ie./chalkers

function user(request, response) {

    //if url -- "/" && Get
    var username = request.url.replace("/", "");
    if (username.length > 0) {

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write("Header\n");
        response.write(username + "\n");
        response.write("Footer\n");
        //get json from Treehouse
        //on "end"
        //show profile
        //on "error"
        //show error 
    }
}
module.exports.home = home;
module.exports.user = user;