// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs immediately after it is created.

/*
1) Runs code immediately without calling the function later.

2) Keeps variables private so they don’t affect other code.

3) Avoids global variable pollution.
*/

(function Eggs() {
    // named IIFE
    console.log("DB CONNECTED"); 
})(); 

/* 
always add a colon after IIFE Func(),
cause once this func is invokend
it dosent know where to stop function context
*/

// Arrow Function method in IIEF (2nd method)
( () =>{
    // Unamed IIFE
    console.log(`DB CONNECTED TWO`);
}) ();

/* 
always add a colon after IIFE Func(),
cause once this func is invokend
it dosent know where to stop function context
*/

// Arrow function passing variable using IIFE() Func

( (name) => {
    // Passing IIFE with Parameter
    console.log(`My name is ${name}`);
} )("swaroop");

/* 
always add a colon after IIFE Func(),
cause once this func is invokend
it dosent know where to stop function context
*/


