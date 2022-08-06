const { Transform } = require('stream');

// This type of stream allows us to modify the incoming data
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);