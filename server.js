const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Too Basic!');
    } else if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Hello");
    } else if(req.url === '/login') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("You can Login");
    } else if(req.url === '/exit') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Goodby");
    } else if(req.url === '/valar_morghulis') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Valar Dohaeris");
    } else {
      res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Sorry");
    }
});


httpServer.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Server is up and running");
});