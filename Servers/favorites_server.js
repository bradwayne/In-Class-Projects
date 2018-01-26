// Require dependencies
var http = require("http");
var fs = require("fs");
// Set our port to 8080
var PORT = 8080;
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  // Capture the url the request is made to
  var path = req.url;
  // When we visit different urls, read and respond with different files
  switch (path) {
      case "/favorites_food":
      return fs.readFile(__dirname + "/favorites_food.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      case "/favorites_movies":
          return fs.readFile(__dirname + "/favorites_movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      case "/favorites_framework":
          return fs.readFile(__dirname + "/favorites_framework.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    // default to rendering index.html, if none of above cases are hit
    default:
          return fs.readFile(__dirname + "/favorites_index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  }
}
// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});