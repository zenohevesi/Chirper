var http = require('http');
var fs = require('fs');
var port = process.env.port || 3000;
var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/routes/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(port);
console.log('listening on port ' + port.toString);