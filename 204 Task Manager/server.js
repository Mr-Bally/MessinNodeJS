const EventEmitter = require('events');

class Server extends EventEmitter {
    // Call base constructor
    constructor(client) {
        super();

        this.tasks = {};
        this.taskId = 1;

        process.nextTick(() => {
            this.emit('response', 'Enter a command:');
        });

        client.on('command', (command, args) => {
            console.log(`Command: ${command}`);
            console.log(`Args: ${args}`);

            switch(command) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command...');
            }
        });
    }

    taskString() {
        return Object.keys(this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`;
        });
    }

    // Defining instance methods for each of the command we want to react to
    help() {
        this.emit('response', 'Help...there is none....');
    };
    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    };
    ls() {
        this.emit('response', 'ls....');
    };
    delete(args) {
        delete(this.tasks[args[0]])
        this.emit('response', `Deleted task ${args[0]}`);
    };
}

module.exports = (client) => new Server(client);