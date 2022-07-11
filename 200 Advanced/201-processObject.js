// process is an event emitter

process.on('exit', (code) => {
    // do one final synchronus operation
    // before the node app terminates
    console.log('I am exiting');
});

process.on('uncaughtException', (err) => {
    // will catch an uncaught exception rather than the app terminating
    // generally it's better just to let the app terminate
    console.log(err);
});

// keep the event loop busy
process.stdin.resume();

// trigger type exception
console.dog();