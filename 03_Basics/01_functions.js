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


