const { spawn } = require('child_process');

// Print working dir
// Call spawn with a given command
const pwd = spawn('pwd');
pwd.stdout.pipe(process.stdout);

// List current dir contents with optional arguments passed in as an array
const ls = spawn('ls', ['-l', '.']);
ls.stdout.pipe(process.stdout);

