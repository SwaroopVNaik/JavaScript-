const MY_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Implicit Function (add 10 in each value of array)
const MY_NUMBERS_NEW = MY_NUMBERS.map( (num) => num + 10 )
console.log(MY_NUMBERS_NEW);

// Chaining => two to three methods can be used togather 
const newNums_V1 = MY_NUMBERS
                   .map( (num) => num * 10) // Multiply each value 10 in the array
                   .map( (num) => num  + 1) // the update array ie [10, 20....] => this will be 11, 21, 31....so on till 10
                   .filter( (num) => num >= 40)  

console.log(newNums_V1);
