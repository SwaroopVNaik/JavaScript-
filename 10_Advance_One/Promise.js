// Promise is an Object
// Promise has 2 parts resolve and Reject
// Promise has 3 stages 
/*
1)Pending => The task is still running, Result is not available yet
2) Fullfilled(Resolved) => The task is completed successfully, we get result/value
3) Rejected => The task failed, you get an error
*/

// Promise 1 ->
const PromiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()  // After this executes it directly connects .then
    },1000)
}) // declaring Promise

// then => has direct connnection with resolve
// Promise 2 ->
PromiseOne.then(function(){
    console.log("Promise Consumed"); 
})

// Promise Consume 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

// Promise is a callback so we a declaring a function then passing parameters resolve and reject !!!!
// Promise 3 ->
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Swaroop", email: "Swaroop@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

// Promise 4 ->
const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "SVN", Password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

PromiseFour
.then((user) => {
    console.log(user);
    return user.username
// chaining 
})
.then((username)=> {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("The Promise is either resolved or Rejected"));

// Promise 5 ->
const promisefive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "JavaScript", Password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function  ConsumePromiseFive(){
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

ConsumePromiseFive()

// Try Catch approach ===>
/* async function getallusers(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
} */

// getallusers()

// Using fetch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) =>{
    console.log(error);
})