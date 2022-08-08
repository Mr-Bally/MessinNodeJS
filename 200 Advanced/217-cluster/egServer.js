const http = require('http');

const server = http.createServer((req, res) => {
    // Simulate server work
    for(let x=0; x < 1e7; x++)
    res.end('Hello World\n');
}).listen(4242, () => {
    console.log('Server is running');
});

// Navigate to http://localhost:4242/ to test