/*
 * This file shows importing as specified by CommonJS, the version traditionally used in Node.js, but not the way indiciated in the ECMASCRIPT specification.
 * Importing allows constructs from a separate file to be made available into this file.
 * Any kind of value can be imported: numbers, strings, arrays, functions, objects, etc
 * 
 * https://eloquentjavascript.net/10_modules.html (Note that Node.js uses CommonJS-style exports/require by default)
 */

// import objects from another file... notice the destructuring upon import
const {foo, bar, baz} = require('./10.exporting.js');

// prove that we have imported
console.log('\n-- Importing --');
console.log(`foo's name is ${foo.name}.`); // access the imported object's properties
bar(); // call the imported function
console.log(`baz = ${baz}`);

