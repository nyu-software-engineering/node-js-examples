/*
 Anonymous functions in Javascript.

 A function definition does not need to have a name... 
 as long as there is still some way to call to it.
 */

// define an anonymous function, but assign a variable to refer to it
const doSomething1 = function () {
    console.log('doSomething1 is running');
}
doSomething1(); // call the function

// define an anonymous function with parameters, but assign a variable to refer to it
const doSomething2 = function (x, y) {
    console.log(`doSomething2 is running with x=${x} and y=${y}.`);
}
doSomething2('hello', 'world'); // call the function with arguments

// define an anonymous function with parameters and a return value, but assign a variable to refer to it
const doSomething3 = function (x, y) {
    const msg = `doSomething3 is running with x=${x} and y=${y}.`;
    return msg;
}
console.log( doSomething3('hello', 'world') ); // call the function and use its return value
