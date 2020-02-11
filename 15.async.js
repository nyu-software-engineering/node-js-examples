let doIt = async () => {
    // imagine this function performed a task that took a long time...
    // ultimately, it returns a promise, even without saying so
    let rand = parseInt(Math.random() * 10) + 1;
    if (rand < 5) return Promise.resolve('hooraah!'); // success!
    else return Promise.reject('boo!'); // failure!
}
// call the function, pass functions to handle its success or failure, whenever it completes
doIt()
  .then( res => { console.log(`Success: ${res}`); } )
  .catch( err => { console.log(`Failure: ${err}`);} );
  