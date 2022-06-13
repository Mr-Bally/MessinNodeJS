const https = require('https');
const { resolve } = require('path');

// Functionr returns a Promse object
function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

// We then call the function and use 'then' to consume the returned Promise object
fetch('https://www.javascript.com/')
    .then(data => { 
        console.log(data.length);
    });

// Or we can use the async await syntax
(async function read() {
    const data = await fetch('https://www.javascript.com/');
    console.log(data.length);
})();