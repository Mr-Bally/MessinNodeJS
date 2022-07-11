const dgram = require('dgram');

const server = dgram.createSocket('udp4');

const PORT = 3000;
const HOST = '127.0.0.1';

// Server
server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);

// Client
const client = dgram.createSocket('udp4');

client.send('Ey up', PORT, HOST);