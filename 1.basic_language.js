/*
 Some basic features of the Javascript language executed by the Node.js engine.

 Execute this script with either commend:
 - node 1.basic_language.js
 - node 1.basic_language
 */

// make a variable and print it to the console
const message = "hello world!";  // a variable holding a constant!
console.log(message); // output!

// variables can hold any kind of data
const daysInWeeek = 7; // a Number
const pi = 3.14; // a Number
const youWillLoveJavascript = true; // a boolean
const myFavoriteLanguage = "Javascript"; // etc, etc...

// constants are declared with the const keyword
const data = [10, 20, 30];  // a variable that can't be reassigned!
message[1] = 'ha!'; // but this is not variable reassignment!
console.log(`data = ${data}!`); // expected output: [10, 'ha!', 30]

// non-constant variables are declared with the keyword let
let it = true; // it's true!
it = (it) ? false : true; // reassign it to be its opposite using the ternary operator
console.log(`It is ${it}!`); // expected output: 'It is true!'

// for loop
for (let i=1; i<6; i++) {
    console.log(`For loop iteration #${i}`);
}

// while loop
let i = 1;
while (i < 6) {
    console.log(`While loop iteration #${i}`);
    i++;
}

// an object (no classes necessary - JavaScript uses prototypal inheritance instead)
const me = {
    name: "Foo Barstein",
    phone: "212-666-1212",
    age: 63,
    isRobot: false
};
console.log(`My name is ${me.name}.`); // expected output: "My name is Foo Barstein"

// make a copy of an object - this is prototypal inheritance
const robotMe = Object.create(me); // creates a new object based on the original prototype
robotMe.isRobot = true; // modify this new object in some way
console.log(`me ${me.isRobot ? 'is indeed' : 'is not'} a robot.`); // expected output: "My name is Foo Barstein"
console.log(`robotMe ${robotMe.isRobot ? 'is indeed' : 'is not'} a robot.`); // expected output: "My name is Foo Barstein"

// an object with a method belonging to it written in shorthand syntax
const fido = {
    name: "Fido",
    breed: "Schnauzer",
    bark(message) {
        console.log(`${this.name} the ${this.breed} says, '${message}'`);
    }
}
fido.bark('Woof!'); //expected output: "Fido the Schnauzer says, 'Woof!'"

