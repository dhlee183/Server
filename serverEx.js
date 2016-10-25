var http = require('http');

var PORTONE = 7000;

var PORTTWO = 7500;

function handleRequest1(request, response) {
	response.end('Your Awesome!');
}

function handleRequest2(request, response) {
	response.end('Your Suck!');
}

var serverOne = http.createServer(handleRequest1);

var serverTwo = http.createServer(handleRequest2);

serverOne.listen(PORTONE, function() {
	console.log('Server listening on: http://localhost:%s', PORTONE);
});

serverTwo.listen(PORTTWO, function() {
	console.log('Server listening on: http://localhost:%s', PORTTWO);
});