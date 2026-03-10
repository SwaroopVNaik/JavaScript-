// A function is a piece of reusable code that runs when you call it.


// Function Definition
function sayMyNanme(){
    console.log("S");
    console.log("w");
    console.log("A");
    console.log("R");
    console.log("O");
    console.log("O");
    console.log("P");
}

// Function Refernce / Call 
// sayMyNanme()
// Fucntion Parameters(  )

// function Add_Two_Number(number_1, number_2){
//     console.log(number_1 + number_2);
// }

// Function Arguments(  )
// const Result = Add_Two_Number(2, 4)
// console.log(Result);


function Add_Two_Number(number_1, number_2){

    let Result = number_1 + number_2
    return Result
    // In JS after result no code will be printed

}

const Result = Add_Two_Number(2, 4)
console.log("Result :", Result);


function loginUserMessage(username){
    if(username === undefined){
    // sometime the same if conditon will be written in not (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged In`
}

// when we dont define/pass value in function we get undefined
console.log( loginUserMessage());

// ... rest operator/spread Operator

function CalculateCartPrice(...num_1){
    return num_1
}

console.log(CalculateCartPrice(200, 400, 500, 2000));

// case 2

function CalculateCartPriceV2(val1, val2, ...num_1){
    return num_1
}

console.log(CalculateCartPriceV2(200, 400, 500, 2000));

// Objects 
const User = {
    username : "swaroop",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// case 3
handleObject(User)

//case 2
handleObject({
    username : "Sam",
    price: 399
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(GetArray){
    return GetArray[1]
}

// case 1 :
console.log(returnSecondValue(myNewArray));

// case 2 :
console.log(returnSecondValue([200, 300, 500, 1000]));