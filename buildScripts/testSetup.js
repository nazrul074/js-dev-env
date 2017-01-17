//This file isn't transpiled, so muct use CommonJs and ES5

//Register babel to transpile before out tests run.

require('babel-register')();

//disable webpack features that Mocha doesn't understand.
require.extensions['.css']=function(){};
