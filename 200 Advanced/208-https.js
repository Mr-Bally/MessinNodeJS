const httpsServer = require('https').createServer({
    // here you would plug in a reference to properly configured cert
    key: 'TestKey',
    cert: 'TestCert'
});

httpsServer.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plane' });
    res.end('Hello, this is a HTTPS enabled web server');
});