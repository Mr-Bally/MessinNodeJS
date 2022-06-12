const test = what =>
{
    console.log(what + ' changed?');
};


// Calling set timeout with the test function
// With 'The timeout' being passed as the argument for what
setTimeout(test, 2 * 1000, 'The timeout');
setTimeout(test, 4 * 1000, 'The timeout');