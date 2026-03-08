/* 
In JavaScript, an object is a data structure used to store collections of related data and functions. The data is stored as key–value pairs, where:

Key (property name) → identifies the value

Value → can be any data type (string, number, array, function, another object, etc.) 
*/

// Objects can be declared in two types :-
// Literal and Constructor

// when we declare objects are literals it won't become singleton
// when we declare objects as constructor it becomes singleton

// Object Literals 

// Object.create => This is declration of object in the form of constructor

const mySym = Symbol("key1")

const JS_User = {
    name:  "Swaroop",
    "full name": "swaroopvnaik",
    [mySym] : "mykey1", // This is the Syntax Of Symbol => [Symbol(key1)]: 'mykey1'
    age: 21,
    location : "Banglore",
    email: "swaroop@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// Acessing values of Object
console.log(JS_User.email); // majority
console.log(JS_User["email"]); // special cases / interview 
console.log(JS_User["full name"]);
console.log(JS_User[mySym]);

// changing values in Object
JS_User.email = "swaroop@chatgpt.com"

//Object.freeze(JS_User) // frezing the object so no values can be chnaged

JS_User.email = "swaroop"

// console.log(JS_User);

JS_User.greeting = function(){
    console.log("hello JS_USER");
}

JS_User.greeting_V2 = function(){
    console.log(`hello JS_USER, ${this.name}`); // String interpolation
}

console.log(JS_User.greeting());
console.log(JS_User.greeting_V2());

