const { Readable } = require('stream');

const inStream = new Readable();

// Push some data
inStream.push('IOFENSOIEFN\n\n\n');
// Push null to indicate the stream does not have anymore data
inStream.push(null);

// Consume the stream
// Generally not the best way to go
inStream.pipe(process.stdout);

// Instead you can define a read function on the read stream to process partially received data
const newInStream = new Readable({
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));

        // So we don't print out every char code
        if (this.currentCharCode > 90)
        {
            this.push(null);
        }
    }
});

// Set char code to 65
newInStream.currentCharCode = 65;

newInStream.pipe(process.stdout);