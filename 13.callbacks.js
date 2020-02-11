// a function that accepts two callbacks - one for success, one for failure
let doIt = (callbackSuccess, callbackFailure) => {
    // imagine this function performed a task that took a long time...

    // ultimately, when it's done, it calls the function that was passed to it
    let rand = parseInt(Math.random() * 10) + 1;

    if (rand < 5) callbackSuccess('hooraah!'); // success!
    else callbackFailure('boo!'); // failure
}

// call the function, pass two callback functions to handle its success or failure
console.log('starting');
doIt( 
    res => { console.log(`Success: ${res}`); },
    err => { console.log(`Failure: ${err}`); } 
);
console.log('ending');
