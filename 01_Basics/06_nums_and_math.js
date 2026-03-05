// +++++++++++++++++++++++ Numbers +++++++++++++++++++
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

// used when specially building a e-commerce application
console.log(balance.toFixed(1));

const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(4));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);

console.log(Math.abs); 

// abs = Absolute value to change negative values to Positive

console.log(Math.abs(-4));

// // Rounding of Number 

console.log(Math.round(4.6));

console.log(Math.ceil(4.2)) // Rounding of number above (rarely Used)
console.log(Math.floor(4.2)); // ROunding of number below (rarey used)

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// Math libirary is used more (Math.random)
// Math.random always generate number between 0 -1;
console.log(Math.random());

/* when we multiply Math.floor with *10 the Math.random value shift one bit to left side. 

example => before *10 = 0.98765432
           after *10 = 03.3459876 and avoid it from generating 0 we are adding + 1 cause are minimum case is above 0 ie 1 

similary,we use floor for it to round with below value
*/
console.log(Math.random()*10 + 1); 

// Rounding off 
console.log(Math.floor(Math.random()*10 + 1));

//  sometimes we have to define min and max 
// so use this below method

const min = 10
const max = 20

// formula !important

console.log(Math.floor(Math.random() * (max - min + 1)) + min);