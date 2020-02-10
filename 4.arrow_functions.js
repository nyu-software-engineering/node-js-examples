/*
 Arrow functions in Javascript.

 A reduced syntax for defining functions, using the => arrow.
 */

// an arrow function with no parameters or return value
const doSomething1 = () => {
    console.log('doSomething1 is running');
}
doSomething1(); // call the function

// an arrow function with parameters
const doSomething2 = (x, y) => {
    console.log(`doSomething2 is running with x=${x} and y=${y}.`);
}
doSomething2('hello', 'world'); // call the function with arguments

// an arrow function with parameters and a return value
const doSomething3 = (x, y) => {
    const msg = `doSomething3 is running with x=${x} and y=${y}.`;
    return msg;
}
console.log( doSomething3('hello', 'world') ); // call the function and use its return value

// even further reduced syntax for a function with only a return statement... so no curly braces required
const doSomething4 = (x, y) => `doSomething4 is running with x=${x} and y=${y}.`;
console.log( doSomething4('hello', 'world') ); // call the function and use its return value

// even further reduced syntax with no parentheses around a single parameter
const doSomething5 = x => `doSomething5 is running with x=${x}.`;
console.log( doSomething5('hello') ); // call the function and use its return value
