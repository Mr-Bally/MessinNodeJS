// Streams are just collections of data that might not be available all at once and don't have to fit into memory
const filePath = './210-streamExample.txt';
const fs = require('fs');
const file = fs.createWriteStream(filePath);

for (let x = 0; x < 1000; x++)
{
    file.write('Repeat this line a lot, like I mean a lot\n');
}


// In this approach we buffer the entire file in memory (could be a lot if the file is large)
fs.readFile(filePath, (error, data) => {
    if (error) throw error;

    // In this e.g. we just read the data for the sake of it
});

// This streams the data rather than buffering the entire file in memory
const src = fs.createReadStream(filePath);
// Then we can pipe the stream into another process
//src.pipe()


file.end();