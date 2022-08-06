const { Writable } = require('stream');

// Define a new writable stream stream with chunk being the buffer
// write is the only parameter which is mandatory
const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// Pipe anything entered via standard input to the writable stream
process.stdin.pipe(outStream);