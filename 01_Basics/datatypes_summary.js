// Primitive Data Types 
// There are 7 categories in Primitive DataTypes 
// 1) Strings 
// 2) Number
// 3) Boolean
// 4) null
// 5) undefined
// 6) Symbol => to make any value unique (usage)
// 7) BigInt

// Non - Primitve Data Types (Refernce)

// 1) Array
// 2) Objects
// 3) Functions

// JavaScript is a dynamically Typed Language (Important)

// Primitive data types Example :=>

const score = 100
const score_Value = 100.3

const isLoggedIn = false
const outsideTemp = null  // null means empty not zero 
let userEmail;

const id = Symbol('123')
const another_ID = Symbol('123')

console.log(id === another_ID);

const big_Number = 123456789009876n // BigInt 

// Non - Primitive data types Example => 

// Array's 

const heros = ["Shaktiman", "naagraj", "doga"]

// Object's (datatypes can be anything)

let My_Obj ={
    name: "Swaroop",
    age: 22
}

// fuctions 

const myFunction = function(){

    console.log("Hello World");
    
}

// to check the datatype use function (typeof)

console.log(typeof heros);    

// Examples of typeof 

// undefined = undefined 
// Null = Object
// Boolean = Boolean 
// Number = Number 
// String = String
// Object (native and does not implement ) = Object 
// Object (Native and host does implement) = Function
/* Object (Host and does not implement) = Implementation except may 
not be "undefined, Boolean, "number, or string */

// ****************************************************************

// There two types of Memory Stack and Heap Memory

// stack Memory is used by Primitive DataTypes ?

// Heap Memory is used by Non - Primitive DataTypes.

let mychannel = "SwaroopVNaikdotcom"

let anothername = mychannel

anothername = "chaiaurcode"

console.log(mychannel);
console.log(anothername);

let user_1 = {
    email : "user@google.com",
    upi : "user@ybl"
}

let User_2 = user_1

// accesing element of the objects are this way =>
User_2.email = "Swaroop@google.com"

console.log(user_1.email);
console.log(User_2.email);