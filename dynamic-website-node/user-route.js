//Handle Http route GET / and POST  / i.e. Home
function home(request, response) {

    //if url -- "/" && Get
    if (request.url === "/") {
        //show search
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
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
        response.end("Footer\n");
        //get json from Treehouse
        //on "end"
        //show profile
        //on "error"
        //show error 
    }
}
module.exports.home = home;
module.exports.user = user;