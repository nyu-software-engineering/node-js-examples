/*
 Using arrays in Javascript
 */

// generate an array from a string
let fruits = "avocado,tomato,banana".split(",");
console.log(`Do you love ${fruits[1]}?`); // output "Do you love tomato?"

// add an element to an array
fruits.push("pepper");

// dump the contents of the array to the console
console.log(fruits);

// find index position of element by value
const fruit = 'pepper';
let pos = fruits.indexOf(fruit);
console.log(`${fruit} is located in the array at index ${pos}.`);

// delete last element from the array
fruits.pop();

// indexOf returns -1 if value not found in arraay
pos = fruits.indexOf(fruit); // 'pepper' is no longer there, so -1 is returned
console.log(`${fruit} is now located in the array at index ${pos}.`);

// iterate through each value in array and pass it as an argument to a function
fruits.map( (val) => {
    console.log(`This fruit is ${val}!`);
} );

// create a new array with a subset of the original values
fruits = fruits.filter( (val, i, arr) => {
    return val != 'banana'; // returns true for all fruits except banana
} );
console.log(fruits);

// join all elements in array into a comma-separated string
const stringAgain = fruits.join(',');
console.log(`The fruits are ${stringAgain}.`);

