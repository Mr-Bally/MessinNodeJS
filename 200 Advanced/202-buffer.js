const string = 'test';
const buffer = Buffer.from ('test');

console.log(string, string.length);

// We haven't defined a character encoding for the buffer
// so it will just display the number of bytes
console.log(buffer, buffer.length);

// buffer files are useful for reading binary files
// like videos, images, files etc
