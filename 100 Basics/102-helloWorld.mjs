// Similar to the previous example except the file extension
// Instead of JavaScript this now uses Ecmascript
// So there are some syntax changes in import statement
import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

server.listen(4242, () => {
    console.log('Server is running')
});

// Navigate to http://localhost:4242/ to test