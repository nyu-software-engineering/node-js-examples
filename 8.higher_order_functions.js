/**
 * Examples of higher-order functions in Javascript
 *  
 * Read more documentation: https://eloquentjavascript.net/05_higher_order.html
 */

// a simple function
const foo = (val) => { console.log(`val = ${val}`) };
console.log('\n-- Simple function call --')
foo(5); // call it

// another function that takes a function as a parameter
const bar = (func) => {
    func(5); // call the function that was received, whatever it is, and pass it a 5
}
console.log('\n-- Passing function as argument --')
bar(foo);

// another function that takes a function as a parameter
const baz = (func, arg) => {
    func(arg); // call the foo function, whatever it is
}
console.log('\n-- Passing function as argument within a loop --')
// call the function within a loop and pass the loop counter
for (let i=1; i<=10; i++) {
    baz(foo, i);
}
