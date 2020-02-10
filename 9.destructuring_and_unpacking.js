/*
 * Destructuring makes it possible to extract data from arrays or objects into distinct variables.
 * Unpacking allows several distinct values in an array or object to be grouped together in an array
 * 
 * See more documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// asssign the first two values in an array to two variables in one statement
const [a, b] = [10, 20, 30, 40, 50];
console.log('\n-- Simple destructuring --')
console.log(`a = ${a}`); // expected output: 10
console.log(`b = ${b}`); // expected output: 20

// do the same, but also lump all remaining values into an array... this is 'unpacking'
const [c, d, ...rest] = [10, 20, 30, 40, 50];
console.log('\n-- Destructuring and unpacking --')
console.log(`rest = ${rest}`); // expected output: Array [30,40,50]

// pack multiple arguments into a single array
function foo(a, b, ...args) {
    console.log('\n-- Packing function arguments using rest argument --')
    console.log(`a = ${a}`); // expected output: 10
    console.log(`b = ${b}`); // expected output: 20
    console.log(`args = ${args}`); // expected output: Array [10,20,30,40,50]
}
foo(10, 20, 30, 40, 50); // separate arguments

// destructuring can also be done with objects
const person = {
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
const {name, age} = person; // destructure the object to extract just name and age
console.log('\n-- Destructuring an object --')
console.log(`name = ${name}`); // expected output: 'Foo Barstein'
console.log(`age = ${age}`); // expected output: 72

// variable names do not need to match field names in the objects being destructured
const {name : fullName, age : apparentAge} = person;
console.log('\n-- Changing variable names while destructuring an object --')
console.log(`fullName = ${fullName}`); // expected output: 'Foo Barstein'
console.log(`apparentAge = ${apparentAge}`); // expected output: 72

// nested objects can be destructured as well
const {
    email,
    address: {
        city // create a variable for this field only
    }
} = person;
console.log('\n-- Destructuring a nested object --')
console.log(`email = ${email}`); // expected output: 'fb1258@teleworm.us'
console.log(`city = ${city}`); // expected output: 'Beni Brahim''
