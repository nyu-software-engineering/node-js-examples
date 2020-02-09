/*
 * An example of iterating through an array of objects.
 * Data is often transferred between clients and servers in such a format.
 *
 */

// an array of objects, where each object represents a product for sale
const products = [
   {
     id: 1,
     title: 'Boa, emerald green tree',
     country: 'Russia',
     price: '$31.82',
     description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.'
   },
   {
     id: 2,
     title: 'Bleu, blue-breasted cordon',
     country: 'Ethiopia',
     price: '$35.66',
     description: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
   },
   {
    id: 3,
    title: 'Southern elephant seal',
    country: 'Kuwait',
    price: '$31.06',
    description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
  }
];

//console.log( products ); // output the raw data

// loop through each product
products.map( (product) => {
    // print the title and price of each product
    console.log(`${product.title} - ${product.price}`)
});
