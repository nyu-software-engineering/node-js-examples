/*
 * An example of fetching data from an online API using only the built-in https module.
 * Note that there are 3rd-party modules for node that make this easier.
 *
 * The mock API used here returns an array of product objects, in the following format:
 * [
 *   {
 *     id: 1,
 *     title: 'Boa, emerald green tree',
 *     country: 'Russia',
 *     price: '$31.82',
 *     description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.'
 *   },
 *   {
 *     id: 2,
 *     title: 'Bleu, blue-breasted cordon',
 *     country: 'Ethiopia',
 *     price: '$35.66',
 *     description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
 *   },
 *   ...
 * ]
 * 
 */

// we will use node's built-in https module to make requests over the internet
const https = require('https');

// the URL of a mock API of products for demonstration purposes
const apiUrl = "https://my.api.mockaroo.com/users.json?key=d9ddfc40"

https.get(apiUrl, (response) => {
  let data = ''; // this will hold the data received from the server's response

  // A chunk of data has been recieved.
  response.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  response.on('end', () => {
    let products = JSON.parse(data); // convert string to object

    console.log( products ); // output the raw data

    // loop through each product
    products.map( (product) => {
        // print the title and price of each product
        console.log(`${product.title} - ${product.price}`)
    });

  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
