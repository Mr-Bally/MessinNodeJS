const EventEmitter = require('events');

// Streams are event emitters
const myEmitter = new EventEmitter();

// Subscribe for a string with a callback to execute when event is received
myEmitter.on('TestEmitString', () => {
    console.log('Emitted event was received');
});

// Emit a string representing an event
// Need to emit the event now as we now have an emitter subscribing to the event
myEmitter.emit('TestEmitString');
