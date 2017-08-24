var http = require('http'),
  fs = require('fs'), 
  url = require('url'),
  port = 8080; 

var listingData;

var requestHandler = function(request, response) {
  var { headers, method, url } = request;

  console.log(url);
  console.log(method);

  if (url == '/listings')
  {
    response.writeHead(200, {
    'Content-Type': 'application/json',
    });
    response.write(listingData);
  }
  else
  {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("Bad gateway error");
    response.end();
  }

  

  response.end();
};

// a server is created, but not started
var server = http.createServer(requestHandler);


// the server is now started, listening for requests on port 8080
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});
console.log('Is the server started?');

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */

   listingData = data;

});