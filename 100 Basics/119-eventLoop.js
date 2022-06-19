// This code will keep running forever
// Because Node's event loop is now busy
setInterval(() => {
    console.log("This will keep running forever");
}, 5000);

// Event loop is an infinite loop which manages the different async operations
// And working out when the operations are ready to be consumed
// So in the above it will monitor the above code and every 5 seconds send the function to be exectuted by the V8 engine
// If there were no async operations then the Event loop would exit