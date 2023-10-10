const http = require("http");
 
http.createServer(function(request, response){
    response.end("qq");
}).listen(3000);