const simpleApi = require('./object.js');
const array = require('./array.js');
const basicFunction = require('./function.js');

console.log(simpleApi.Language);
console.log(simpleApi.Encoding);

// Could inline the call to the array API call if you wanted to return the value
console.log(array);

console.log(basicFunction('Sam'));

