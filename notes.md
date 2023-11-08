# Node.js Notes

## History

- 2009: Node.js created
- 2011: [manager](./npm-package-manager.md] created to help distribute Node.js
- 2014: io.js project forked (over an ideological dispute about how/who to manage the project)
- 2015: io.js and node.js merged (reconciliation) and v4 (current) released

## Internals

Compare Node.js to a traditional web server, such as Apache.

Apache (example of a traditional web server)

- multi-threaded: each requests has its own thread - there are a finite number of threads
- blocking: if a thread is busy doing something, for example pulling data from the file system or a database, all other tasks are delayed until this completes
- scaling takes a lot of resources as it requires more threads

Node.js

- single-threaded: one thread shared by all requests
- asynchonous: events handled in the order they are raised. doesn't have to wait for resources to free up before doing next task
- allows faster service and seamless scaling

## Testing

Show currently installed version from the command line:
node -v

If not the latest, then [latest](https://stackoverflow.com/questions/10075990/upgrading-node-js-to-latest-version install the)!

## Dependencies

Any project with a [package.json settings file](./npm-package-manager.md#package.json_configuration_file) may have dependencies that need to be installed before the project will build or execute.

Automatically install all dependencies outlined in the package.json file:
npm install

To execute a Node.js project named app.js (note the .js extension is not needed):
node app

## Global variables

### global object

The 'global' object in Node.js serves a purpose similar to 'window' object in web browsers' implementations of Javascript

### =Implicit usage=

The global object is implied even if it's not written. For example:

```js
console.log("foobar");' //this actually is interpreted as global.console.log("foobar");
```

The global object also contains some useful child objects:

- the console object, which belongs to the global object, performs functions related to messages shown in the command line.

The global object contains a few useful properties, including:

- `__dirname` - folder where code is located
- `__filename` - full filename, including path

The global object also contains a few useful methods, including:

- `setTimeout()` and `setInterval()` / `clearInterval()` work as they do in a web browsers' Javascript implementation

Bear in mind:

- all Javascript files in Node.js are treated as modules themselves
- by default variables written in a file belong to that module (file) that they are written in, not to the 'global' object

### process object

The process object contains some useful properties related to info about the program execution

- `process.argv` - contains any command-line arguments passed to the program as an array
- `process.argv.indexOf('--name');` - returns the index in the argv array of the command-line argument '--name'
- `process.exit();` - quit program

The process object also contains some useful event handling methods:

```js
process.on("exit", function () {
  process.stdout.write("Bye bye!\n");
});
```

## Standard input and output

Print output to the console - there are various ways to do this:

```js
console.log("Hello"); //includes line break
process.stdout.write("Hello"); //doesn't include line break
process.stdout.clearLine(); //wipes out current output line
process.stdout.cursorTo(0); //resets the cursor to beginning of current line
```

Event handling on user input:

```js
//add each link of user input to an array
var responses = []
process.stdin.on('data', function() {
//echo the input to the output for example
process.stdout.write('\n' + data.toString().trim() + \'n');
responses.push(data.toString().trim());
});
```

## Modules

- core modules come with node.js
- other modules can be installed with npm
- all JS files are considered modules

## Path module

Using path library gives some convenient methods to generate or disassemble file paths.

```js
var path = require("path"); // import the library
path.basename(__filename) // returns just the filename without the path
path.join(__dirname, 'www', 'files, 'uploads'); //concatenates all strings together into valid path
```

## Util debugging module

Outputting timestamps to the console can be useful for debugging.

```js
var util = require("util");
util.log("Hello"); //outputs a String to the console, but unlike console.log(), this includes a timestamp
```

## v8 module

The v8 library gives access to some internals of Google's v8 Javascript processor that powers Node.js.

```js
var v8 = require("v8");
v8.getHeapStatistics(); //returns all memory usage stats
```

## readline module

The readline module is primarily used as a wrapper around stdin and stdout to abstract some of the functionality.

Set up the readline module to wrap around stdin and stdout

```js
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
```

Basic event handlers

```js
rl.question("What is your name?", function (answer) {
  //echo the user's response to the console
  console.log(answer);
});
```

Another example:

```js
//ask user for their name, and then echo it to the console
rl.setPrompt("What is your name?");
rl.prompt(); //output the prompt

//when the user response, a 'line' event will trigger
rl.on("line", function (answer) {
  //echo the user's response to the console
  console.log(answer.trim());
});
rl.close();

//when the readline connection closes, a 'close' event will trigger
rl.on("close", function () {
  console.log("Bye!");
});
```

## String manipulation

```js
var name = "origami";
"origami".slice(1, 4); // returns the substring 'rig'
```

```js
var name = "fetuccini";
var message = `hello ${name}`; //this String is created using template syntax that inserts the name variable into the string, similar to PHP
console.log(message); //outputs 'hello fetuccini'
```

## Event emitter module

The event emmitter is Node.js's implementation of the pubsub design pattern. This allows us to create listeners for custom events.

Instantiate an event emitter object

```js
var events = require("events");
var emitter = new events.EventEmitter();
```

Trigger a custom event:

```js
emitter.emit("macaroniSaladEvent", "Mayonnaise!", "200"); //emit custom event with a message and a status as arguments
```

Handle the custom event:

```js
emitter.on("macaroniSaladEvent", function (message, status) {
  console.log(`${status}: ${message}`); //outputs 'Mayonnaise: 200'
});
```

Inheritance example:

```js
var EventEmitter = require("events").EventEmitter; //shorthand way to get emitter
var util = require("util");

//create a custom Person class
var Person = function (name) {
  this.name = name;
};

//use util object to take care of JS inheritance
util.inherits(Person, EventEmitter); //now the Person class inherits from EventEmitter

//create a new Person object, which will also be an EventEmitter object
var satoshi = new Person("Satoshi Nakamoto");

//handle 'speak' events from this object:
satoshi.on("speak", function (said) {
  console.log(`${this.name} says, '${said}'.`);
});

//trigger a 'speak' event to be emitted from this object:
satoshi.emit(
  "speak",
  "Lost coins only make everyone else’s coins worth slightly more. Think of it as a donation to everyone."
); //trigger event
```

You can save the basic class definition code into a custom file named 'Person.js' within a subfolder named 'lib'

```js
var EventEmitter = require("events").EventEmitter; //shorthand way to get emitter
var util = require("util");

//create a custom Person class
var Person = function (name) {
  this.name = name;
};

//use util object to take care of JS inheritance
util.inherits(Person, EventEmitter); //now Person inherits from EventEmitter
```

Now use this module from another js file within a subfolder named 'lib':

```js
var Person = require("./lib/Person"); //import custom module. js extension implicit
var satoshi = new Person("Satoshi Nakamoto");

//handle 'speak' events from this object:
satoshi.on("speak", function (said) {
  console.log(`${this.name} says, '${said}'.`);
});

//trigger a 'speak' event to be emitted from this object:
satoshi.emit(
  "speak",
  "If you don’t believe me, or don’t get it, then I haven’t the time to try convincing you."
); //trigger event
```

## child process module

The child process contains some useful methods for controlling child processes of various sorts

- exec() function is good for processes that run and then end quickly
- spawn() function is good for processes that have a large amount of output or take a long time to perform

Run command-line background processes:

```js
var exec = require("child_process").exec;
exec("open https://knowledge.kitchen"); //or any valid command-line command
```

Same idea, but done in event handler style:

```js
exec("ls -la", function (err, stdout) {
  if (error) {
    throw err;
  }
  console.log(stdout);
});
```

spawn() example:

```js
var spawn = require("child_process").spawn;

//spawn a child process with an argument (the name of the node script to run in this case)
var cp = spawn("node", ["alwaysTalking"]);

//when the child process produces output, have this process print that output
cp.stdout.on("data", function (data) {
  console.log(`STDOUT: ${data.toString()}`);
});

//when the child process finishes, stop this one as well
cp.on("close", function () {
  console.log("Child Process has ended");
  process.exit();
});

setTimeout(function () {
  //write to the child processes's stdin
  cp.stdin.write("stop");
});
```

## File system fs module

TBD

## References

- Lynda.com - [Node.JS Essential Training](https://www.lynda.com/Node-js-tutorials/Node-js-Essential-Training/417077-2.html?org=nyu.edu)
- Heroku.com - [Node Best Practices](https://devcenter.heroku.com/articles/node-best-practices#use-a-smart-npmrc)
