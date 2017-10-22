var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/stylesheets/index.css") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    	else if(request.url === '/stylesheets/cars.css'){
		fs.readFile('stylesheets/cars.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
    else if (request.url === "/cars/new") {
         fs.readFile('views/cars_new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    	else if(request.url === '/images/tesla.png'){
		fs.readFile('images/tesla.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		})
	}
    	else if(request.url === '/images/lambo.png'){
		fs.readFile('images/lambo.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		})
	}
    else if(request.url === '/images/masarati.png'){
		fs.readFile('images/masarati.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		})
	}	
	else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
	else if(request.url === '/stylesheets/cats.css'){
		fs.readFile('stylesheets/cats.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/kittens.png'){
		fs.readFile('images/kittens.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/kittens.png'){
		fs.readFile('images/kittens.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/kittens.png'){
		fs.readFile('images/kittens.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		})
	}
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");