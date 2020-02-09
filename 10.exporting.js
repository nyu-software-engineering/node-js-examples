/*
 * This file shows exporting as specified by CommonJS, the version traditionally used in Node.js, but not the way indiciated in the ECMASCRIPT specification.
 * Exporting allows constructs in one file to be made available in another.
 * Any kind of value can be exported: numbers, strings, arrays, functions, objects, etc
 * 
 * https://eloquentjavascript.net/10_modules.html (Note that Node.js uses CommonJS-style exports/require by default)
 */

// an object
const foo = {
    age: 72, 
    name: "Foo Barstein",
    email: 'fb1258@teleworm.us',
    address: {
        street: '92 Rue Jamil Sedki',
        city: 'Beni Brahim',
        country: 'Tunisia',
        postalCode: 7040
    } 
};

// a function
const bar = () => {
    console.log('Thank you for calling bar!');
};

// a simple value
const baz = 3.14;

// export these all to make them available for import into another file
// see the 11.importing.js file for example
module.exports = {foo , bar, baz};

console.log('\n-- Exporting --');
console.log(module.exports);
