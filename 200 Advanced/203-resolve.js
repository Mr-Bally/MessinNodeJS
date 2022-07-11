// when you require a package node first resolves the package
// all this means is locate where the module is located
// the following will throw an error as it doesn't exist

require.resolve('package-which-does-not-exist');
// can use it to see if an optional file exists