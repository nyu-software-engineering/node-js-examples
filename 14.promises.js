// a function that returns a Promise
let doIt = () => {
    // imagine this function performed a task that took a long time...

    // ultimately, it returns a promise
    return new Promise( (resolve, reject) => {
        let rand = parseInt(Math.random() * 10) + 1;

        if (rand < 5) resolve('hooraah!'); // success!
        else reject('boo!'); // failure!
    });
}

// call the function, pass functions to handle its success or failure, whenever it completes
console.log('starting');
doIt()
  .then( res => { console.log(`Success: ${res}`); } )
  .catch( err => { console.log(`Failure: ${err}`); } )
console.log('ending');
