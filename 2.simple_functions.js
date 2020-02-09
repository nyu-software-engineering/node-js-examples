/*
 Simple ways of defining a Javascript functions.
 */

// define a function the most simple way
function doSomething1() {
    console.log('doSomething1 is running');
}
doSomething1(); // call the function

// define a function the most simple way with two parameters
function doSomething2(x, y) {
    console.log(`doSomething2 is running with x=${x} and y=${y}.`);
}
doSomething2('hello', 'world'); // call the function with arguments

// define a function the most simple way with two parameters and a return value
function doSomething3(x, y) {
    const msg = `doSomething3 is running with x=${x} and y=${y}.`;
    return msg;
}
console.log( doSomething3('hello', 'world') ); // call the function and use its return value
