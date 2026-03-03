// Keywords => is a predifined, reserved words that have special meaning and puprose to compiler.
// const -> once declared cannot be changed.
// let -> 

const accountId = 144553
let accountEmail = "svn@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // this method is not good,but few times its possible
let accountState;

/* 
In JS when we declare variable and do not assign any number its will 
declare this variable as undefined.
/*


// accountId = 2 // not allowed 
// console.log(accountId);

accountEmail = "svn@.com"
accountPassword = "7777"
accountCity = "Bangaluru"

console.log(accountEmail); []

/* 
Prefer not to use var, because of issue in block scope and 
functional scope.

let is block or funtional scope.
 */

console.table([accountId, accountPassword, accountCity, accountEmail, accountState]);