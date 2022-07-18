const http = require('http');

const req = http.request(
    {
        host: 'www.google.com'
    },
    (res) => {
        console.log(res);
    }
);

req.on('error', (err) => {
    console.log(`Error ${err}`);
});

req.end();