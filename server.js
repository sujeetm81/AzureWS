var http = require('http');
var zmq = require('zmq');
console.log('hello world');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Sujeet Mehta and Azure Web Apps!</h1>');
}).listen(process.env.PORT); 
