// Array
/* An array is a linear data structure that stores multiple elements of the same data type in contiguous memory locations,
 and each element can be accessed using its index. */
// Array is JavaScript is re - sizeable.

const myArray = [0, 1, 2, 3, 4, 5] 
const cars = ["BMW", "MERCEDES", "FORTUNER"]

// another method of Declaring Array -> 
/* In this method the ciruclar brackets will be converted to square brackets automatically */

const myArray_V2 = new Array(1, 2, 3, 4)

// console.log(myArray[0]);
// console.log(myArray[1]);

// Array methods

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);

// Pop's last element (delete)
// myArray.pop()

// console.log(myArray);

/* adds elements at the start of the array but not good method when there are many array element it consumes more time and gives more load on the CPU */

myArray.unshift(9)

// console.log(myArray);

//  Removes the elements at start. 
myArray.shift()

// console.log(myArray);

/* 
includes => checks if the particular element is present in the array.
it gives result in True | False.
*/

// console.log(myArray.includes(9));

/* works same as includes() but if the element is not prest it gives -1 if present it gives element output 3 */
// console.log(myArray.indexOf(3));

// join converts the array to string
const array_V3 = myArray.join() 

// console.log(myArray);
// console.log(array_V3);
// console.log(typeof array_V3);

// slice, splice

console.log("A Normal: ", myArray);

// slice() => copies portion of array.
const myn1 = myArray.slice(1, 3);

console.log(myn1);

console.log("B Slice :", myArray);

/* splice() => modifies the array,(Add, remove, or replace elements in an array.) */
const myn2 = myArray.splice(1, 3);
console.log("C Splice :", myArray);

console.log(myn2);

