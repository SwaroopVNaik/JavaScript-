const user = {
    username: "Swaroop",
    price: 999,
    // (this) refers to the current values.
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // this -> user (object)
        // console.log(this); //Prints current value.
        
    }
}

user.welcomeMessage()
user.username = "SVN" // changed the value "swaroop" => SVN
user.welcomeMessage() 
// Here, This becomes user, this.username -> user.username
// in broweser global Object is Windows


/* This is running in node.js env, so You got {} because Node.js prints module.exports, which is empty by default. */
console.log(this); 

/*
 When we call a function inside an object, this refers to that object. So this.username accesses the object's property.
If we use console.log(this) in the global scope, then in Node.js it points to module.exports (which is {} by default).
In a browser, this points to the global object window. 
*/

// Method -> 1
function creatine(){
    let username = "wellcore"
    console.log(this.username); 
    //    this acessing value is wokring in object but not in function. 
}

// creatine()

// Method -> 2
const creatine_V1 = function () {
    let username = "wellcore"
    console.log(this.username); 
}

// creatine_V1()

// Arrow Function
const Protien = () => {
    let username = "Whey"
    console.log(this);  
    // we get empty object, if this.username we get undefined 
    // Arrow function do not have their own this 
}

Protien()

// Basic Synatx of arrow function
//  () => {} 

// Basic Arrow Function (Explicit Return Arrow Function)
// An explicit return means you write the return keyword inside the function body.
const addTwo = (num_1, num_2) => {
    return num_1 + num_2
}

// console.log(addTwo(3, 4)); 

// Implicit arrow function
// An implicit return means the function automatically returns the expression without writing return.
const addTwo_V1 = (num_1 , num_2) => ( num_1 + num_2 )

console.log(addTwo_V1(7 , 7));

// Returning a Object in Arrow Function (Implicit Function)
/* 
we declare / return object in the arrow (implicity fucntion)
always remember that we have use {}. !----Important----!
*/
const OBJ_RETURN = (OBJ_1, OBJ_2) => ({username : "swaroop"})

console.log(OBJ_RETURN());

// Advantage of Arrow Function 
// Concise / Shorter Code
// Implicit  return