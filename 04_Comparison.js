// Basic conversion
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 2);
console.log(2 == 1);
console.log(2 != 1);


// case 1 =>
console.log("2" > 1);
console.log("02" > 1);


//  case 2 =>
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// case 3 =>
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// most cases we avoid case 1, 2, and 3 cases ! always follow clean and readable code

// === strict check (" it not only compares values it also checks there datatype ")

console.log("2" === 2); 