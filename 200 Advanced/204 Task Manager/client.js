const EventEmitter = require('events');
const readline = require('readline');

// Calling function with named arguments
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

let command, args;
rl.on('line', (input) => {

    // Command and potentially number of commands passed in and split by space
    [command, ...args] = input.split(' ');

    // Everytime the user types something it emits an event with the text
    client.emit('command', command, args)
});

server.on('response', (resp) => {
    console.log(resp);
});