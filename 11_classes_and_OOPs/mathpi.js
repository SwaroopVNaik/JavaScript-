// here Math is the entire module from that module we are checking the property of PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // To know the property of any object

console.log(descripter);


console.log(Math.PI);

// we can't override the objects Math.PI
// Example : 

Math.PI = 5
console.log(Math.PI);

const SVN = {
    name: "swaroop",
    price: "250",
    isAvailable: true,

    orderChai : function(){
        console.log("SVN");
    }
}

// console.log(Object.getOwnPropertyDescriptor(SVN, "name"));

// Changing the property
Object.defineProperty(SVN, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(SVN, "name"));

for (const [key, value] of Object.entries(SVN)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
}