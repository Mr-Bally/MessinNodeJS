// Local variable declared with let
let counter = 0;
const intervalId = setInterval(() => {
    console.log('Hello world');
    counter += 1;

    // == converts compared variable to the same type before checking
    // Whereas === does not use this type coercion and instead checks the type as well
    if (counter === 5) {
        console.log('Done');
        clearInterval(intervalId);
    }
}, 1000);