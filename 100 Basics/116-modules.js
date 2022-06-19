function dynamicFunctionsArgs()
{
    // Use keyword arguments to output the args
    console.log(arguments);
}

dynamicFunctionsArgs(1, 5, 6, 7);

// You can log arguments from the "top level"
// As Node wraps all calls in a function
console.log(arguments);

/**
 * Full wrapper would look something like
 * 
 * function (exports, module, require, __filename, __dirname) {
 * 
 *  exports.a = 999;
 * 
 *  return module.exports;
 * }
 * 
 */