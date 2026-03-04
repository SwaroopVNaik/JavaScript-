/* A string is a sequence of characters (letters, numbers, 
symbols, or spaces) enclosed in quotation marks. */

// Method 1 of Declaring String 
const name = "hitesh"
const repoCount = 50 

//  Do not prefer this Syntax
// console.log(name + repoCount + " Value");

console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

// Method 2 of declaring String 

const gameName = new String('swaroop-vn')

// Accessing Key Value Pairs
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('o'));

// we can't give negative values in substring f()
const new_string = gameName.substring(0, 4)
console.log(new_string);

// can give negative value in slice f()
const another_String = gameName.slice(-9, 4)
console.log(another_String);

const newStringOne = "  Swaroop  "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim's the White-spaces

const url = "https://swaroop.com/swaroop%20naik"
console.log(url.replace('%20', '-'));
console.log(url.includes('v')); // checks if value is present in the URL

console.log(gameName.split('-'));