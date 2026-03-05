// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Date is a Object

// Declaring our own Custom Date
// Format => yyyy/mm/dd
let myCreatedDate_V1 = new Date(2026, 0, 24)

console.log(myCreatedDate_V1);
console.log(myCreatedDate_V1.toDateString());
console.log(myCreatedDate_V1.toLocaleString());

// Format => yyyy/mm/dd (In String Format)
let myCreatedDate_V2 = new Date("2026-01-14")

console.log(myCreatedDate_V2.toLocaleString());

// Bharat Format => mm/dd/yyyy 

let myCreatedDate_V3 = new Date("01-24-2004")

console.log(myCreatedDate_V3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// date created til now milliseconds
console.log(myCreatedDate_V3.getTime());

// Converting milliseconds to seconds with decimal:
console.log(Date.now()/1000);

// Converting milliseconds to seconds without decimal:
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(`${newDate.getDate()} the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    // ctrl + space get all functions 
    weekday: "long"
})
