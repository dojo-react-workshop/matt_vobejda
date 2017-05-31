var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  	//console.log('I got hit!');
  	// console.log(request.method);
  	// console.log(request.url);
  	var file;
  	if(request.url === '/'){
  		file = 'index.html';
  	} else if (request.url === '/ninjas'){
	  	file = 'ninjas.html';
		// response.writeHead(302, {
		// 	Location: 'https://en.wikipedia.org/wiki/Ninja'
		// });

  	} else if (request.url === '/dojos/new'){
  		file = 'dojos.html';
  	} else {
  		file = 'error.html';		
  	}
	fs.readFile(file,'utf8', (err, data) => {
		response.write(data);
	})
	//response.end();
	// response.writeHead(301, {
	// 	'https://en.wikipedia.org/wiki/Ninja'
	// }) 

});

server.listen(8000);
