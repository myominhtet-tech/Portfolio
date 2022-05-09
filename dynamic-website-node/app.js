//Problem: we need a simple way to look at a user`s badge count and javaScript point from a web browser
//Solution: use js to perform th profile look up and serve our template via http

//1.create a web server 
var http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((request, response) => {
    homeRoute(request, response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//2.Handle HTTP route Get / and POST / i.e. Home
function homeRoute(request, response) {
    //if url == "/" && GET 
    // if (request.url === "/") {
    //show search
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
    //  }

}