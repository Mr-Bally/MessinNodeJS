const dns = require('dns');

dns.lookup('www.google.com', (err, address) => {
    console.log(address);
});

// Gives us an array of addresses rather than a single one like lookup
dns.resolve4('www.google.com', (err, addresses) => {
    console.log(addresses);
});
