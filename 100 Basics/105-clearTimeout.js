// Capturing the timer Id
const timerId = setTimeout(
    () => console.log('You will not see this'),
    0
);

// Call clearTimeout right after to stop the timer firing
clearTimeout(timerId);