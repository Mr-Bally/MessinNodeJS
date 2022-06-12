// Requires built in http library as a dependency
const http = require('http');

// Involks function on imported library
// Listener function is called everytime web server is hit
// Two objects are taken, the request and the request it will return
const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

// Task to keep the runtime running (waiting for requests to handle)
server.listen(4242, () => {
    console.log('Server is running')
});

// Navigate to http://localhost:4242/ to test