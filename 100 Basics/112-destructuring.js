const { PI, E, SQRT2 } = Math;

// Is equiv to:

// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// Can also do it with a require
const { readFile } = require('fs');

// Can also destruct properties from objects as arguments
const circle = {
    label: 'circleX',
    radius : 2
};

// We have set a default precision value of 2 and an empty objects as default
// So this argument is optional even with destructing
const circleArea = ({ radius }, { precision = 2} = {}) => (PI * radius * radius).toFixed(2);

console.log(circleArea(circle));

// You can destruct into local variables e.g.
// The double ,, skips destructing of the third item in the array
const [first, second,, fourth] = [10, 20, 30, 40];

// Can destruct some of the array and leave the rest in a new variable
const [justOne, ...restOfArray] = [10, 20, 30, 40];