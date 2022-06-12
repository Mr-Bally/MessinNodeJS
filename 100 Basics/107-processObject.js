// Can run command like 'export VAL1=100' prior to execution
// Which will then make the value appear in the log
// Can use this to alter the variables executed within the script
console.log('Current user is ', process.env.VAL1);

// Can also use the process.args object to pass in commands when you execute the script
// e.g. node -p hello 42