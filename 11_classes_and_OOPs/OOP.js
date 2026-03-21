// Object Literal
const user = {
    // Properties 
    username: "swaroop",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username);
console.log(user.getUserDetails())
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    //  this.variable = passing value 

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this 
    /* when we use new keyword it gets define implicitly,
     no need to execute return this */
}

// step 1 => Whenever we declare (new)keyword a empty object is created which is called instance 
// step 2 => there will be constructor function call due to (new) keyword 
// step 3 => all the arguments will be injected in (this) keyword 
// step 4 => we get it in our function 

const userOne =  new User("Swaroop", 12, true)
const userTwo = new User("Chaiaurcode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);


