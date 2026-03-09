/*
In JavaScript, `let` and `const` are the preferred ways to declare variables.

`let`:
- Used when the variable value may change.
- It is block-scoped (limited to the block {} where it is declared).

`const`:
- Used when the variable value should not be reassigned.
- It is also block-scoped.

`var`:
- Generally avoided in modern JavaScript.
- It is function-scoped, not block-scoped.
- This can cause confusion because variables declared with `var`
  may behave like global variables if not used inside a function.

For these reasons, modern JavaScript mostly uses `let` and `const`
instead of `var`.
*/
let a = 777 // Global

if (true){

    const b = 20
    let a = 10
    var c = 30
    console.log("Inner :", a); // Local
    
}

// console.log(a);
// console.log(b);
console.log("OUTER :",a);
