let score = "33"
let Anonymous_Value = "33abc"

//console.log(typeof score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);

let Anonymous_ValueInNumber = Number(Anonymous_Value)
//console.log(typeof Anonymous_ValueInNumber);

let testing_1 = undefined

//console.log(testing_1);

//console.log(typeof testing_1);

let testing_2 = true

//console.log(testing_2);

//console.log(typeof testing_2);

let converstion_testing_1 = Number(testing_1)

//console.log(converstion_testing_1)

//console.log(typeof converstion_testing_1)


// when we convert "33" to Number => it easily converts to 33
// similalry "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false 
// "" => false ; "swaroop"  => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************************** operations ************************************

// A string is a sequence of characters (letters, numbers, symbols, or spaces) enclosed in quotation marks.

// An array is a collection of elements stored in contiguous memory locations and accessed using an index.

let Value = 3
let Neg_Value = -Value

// console.log(Neg_Value);

// console.log(2 + 2);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello"
let str2 = " Swaroop"

let str3 = str1 + str2

// console.log(str3);

// case 1 =>
// console.log("1" + 2);

// case 2 =>
// console.log(1 + "2");

// case 3 =>
// console.log("1" + "2");

// case 4 =>
// console.log("1" + 2 + 2);

// case 5 =>
// console.log(1 + 2 + "2");

// case 6 =>
// console.log(+true);

// // case 7 
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++

console.log(gameCounter);


// don't follow the above conversion syntax methods , this is just for showing how messy code will confuse us, so always write a good readable code

// Prefix and Postfix Example in One Program

let a = 5;
let b = 5;

// Postfix increment
// First uses the value, Then increases it


let resultPostfix = a++;
console.log("Postfix:");
console.log("Value of resultPostfix:", resultPostfix); // 5
console.log("Value of a after increment:", a); // 6

console.log("-------------------");

// Prefix increment
// First increases the value Then uses it


let resultPrefix = ++b;
console.log("Prefix:");
console.log("Value of resultPrefix:", resultPrefix); // 6
console.log("Value of b after increment:", b); // 6

// Types of Operation :-

// Arithematic Operation -> + , -, *, /, %    
// Logical Operation -> &&(AND),  ||(OR)
// Relational Operation -> <, <=, >, >= 
// Equality Operation -> == === !=
// Increement/Decreement  -> ++, -- 
// Ternary Operation -> ?, :
// Exponantion Operator -> ** 
// Bitwise Operation -> &(AND), |(OR), <<(LEFT SHIFT), >>(RIGHT SHIFT), ^(XOR), ~(NOT) 