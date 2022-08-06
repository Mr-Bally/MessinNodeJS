const { spawn } = require('child_process');

// Spawn launches a new process taking a command as an argument
// The following function spawns a new child process with the print working dir command
const child = spawn('pwd');

// You can register handlers for these processes
child.on('exit', function(code, signal) {
    console.log(`Child process exit with code ${code} and signal ${signal}`);
});

// Also have the Message event which is how the child/parent communicate

// You can also register handlers for childs standard input, output and error
child.stdout.on('data', (data) => {
    console.log(`Child stdout data ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`Child stderr data ${data}`);
});

// Can do more advanced commands with arrays of arguments
// e.g. find . -type f
const anotherChild = spawn('find', ['.', '-type', 'f']);
