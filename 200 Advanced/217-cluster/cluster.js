const cluster = require('cluster');
const os = require('os');

// Checks if Node is being run on the master process
if (cluster.isMaster) {
    // We can spin up as many processes as we have CPUs
    const cpus = os.cpus().length;

    console.log(`Spinning up ${cpus} processes`);

    // Forking as many processes as there are CPUs
    for(let x=0; x < cpus; x++) {
        cluster.fork();
    }
} else {
    // Else spin up a new server as it's not the master process (IE not the one spinning up the threads)
    require('./egServer');
}