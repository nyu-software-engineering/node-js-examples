/*
 * This file shows importing as specified by CommonJS, the version traditionally used in Node.js, but not the way indiciated in the ECMASCRIPT specification.
 * This is a variation of the file, 11.importing.js.
 * In this version, we do not use destructuring in the import statement.
 * Notice how this changes how we must refer to objects from the imported module.
 */

// import objects from another file... notice we do not use destructuring in this version
const data = require('./10.exporting.js').default.default.default;

// prove that we have imported... notice in this version we must prefix all imported objects with 'data.'
console.log('\n-- Importing --');
console.log(`foo's name is ${data.foo.name}.`); // access the imported object's properties
data.bar(); // call the imported function
console.log(`baz = ${data.baz}`);
