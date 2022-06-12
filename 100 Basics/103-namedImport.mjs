// Instead of importing whole HTTP objects we can just import what the script needs
import { createServer } from 'http';

const server = createServer((req, res) => {
    res.end('Hello World\n');
});

server.listen(4242, () => {
    console.log('Server is running')
});

// Navigate to http://localhost:4242/ to test