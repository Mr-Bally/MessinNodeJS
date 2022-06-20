const fs = require('fs');
const util = require('util');

// Here we promisify so that readfile doesn't need a callback but returns a promise
const readFile = util.promisify(fs.readFile);

async function main() {
    // So now we can use the await syntax
    const data = await readFile(__filename);
    console.log(data);
}

main();

console.log('Test');

// Could also do the following for shorter syntax
// const { readFile } = require('fs').promises;