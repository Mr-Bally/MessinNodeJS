const http = require('http');

// Passes in a function to the create server method
// We say the createServer function is a higher order function as it takes another function as an argument
// The function passed in contains positional arguments
const server = http.createServer((req, res) => {
    res.end('Hello world');
});

server.listen(4242, () => {
    console.log('Server is running');
});