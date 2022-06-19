// Logs global object
console.log(global, { depth : 0 });

// Generally it's not a good idea to use global variables
// But you can attach new values to the global variables
global.Tester = 'Probably should not do this...';

console.log(global.Tester);