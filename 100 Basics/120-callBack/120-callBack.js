const fs = require('fs');

// Callback is a function which gets executed when the async read file method exits
fs.readFile('./basicText.txt', function basicCallBack(err, data) {
    console.log(data);
});

// As the first iteration of the event loop only defined the callback rather than execute it
console.log('This will get printed first');