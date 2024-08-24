// create web server
// create a web server that listens on port 3000
// when a user sends a request to the server, the server should respond with the following:
// 1. a status code of 200
// 2. a header that says "Content-Type" with a value of "text/plain"
// 3. a response body that is the string "Hello, World!"
// use the http module to create the server

// create server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!');
});

// listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});