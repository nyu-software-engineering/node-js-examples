let doIt = async () => {
    // the code below creates a Promise that pauses for 2 seconds and then resolves
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000);
    });
    let result = await promise; // wait until the promise resolves
    console.log(result);
    return 'hoorah1'; // any async function returns its value as a Promise resolve automatically, if not specified.
}
// call the function, pass functions to handle its success or failure, whenever it completes
doIt()
  .then( res => { console.log(`Success: ${res}`); } )
  .catch( err => { console.log(`Failure: ${err}`);} );
  