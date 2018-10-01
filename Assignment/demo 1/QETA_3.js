/**
 * 	Make a SOAP call. Assert response status code and assert any one node value in response xml
 */

 //Import required modules
var fs = require('fs');
var http = require('http');

//Reads the test data synchronously from codeEnvelope.xml
var input = fs.readFileSync('./codeEnvelope.xml', {
    encoding: 'utf8'
});

//All the requisites of the test data are defined
var options = {
    host: 'www.example.org',
    method: 'POST',
    headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8',
        'Content-Length': input.length
    }
};

//Gets the response
var req = http.request(options, function(res) {
    var msg = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        msg += chunk;
    });
    res.on('end', function() {
        console.log(msg);
    });

    console.log(res.socket.destroyed);
});

//I am encountering following error in it
/**Error: socket hang up
    at createHangUpError (_http_client.js:331:15)
    at Socket.socketOnEnd (_http_client.js:423:23)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:139:11)
    at process._tickCallback (internal/process/next_tick.js:181:9)
 */
