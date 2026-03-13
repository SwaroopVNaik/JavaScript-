// For of loop -> to add loops in array we use (forof loop)
// For in Loop -> to add loops  in Objects we use (forin loop)

const arr = [1, 2, 3, 4, 5]

for (const value of arr) {
    console.log(value);
    
}

// const greetings = "hello World"

for (const greet of greetings) {
    if(greet == " "){
        console.log("space Detected");
        continue
    }
    console.log(`Each char is ${greet}`);   
}

/* Maps -> Map() is a object that holds key value pairs, remebers the original order of the keys,
 any value can be used as either keys or primitives */
 /* 
 No duplicate values, we habe all unique values in it.
 */

const map = new Map()
map.set('IN', "India")  // map.set(key, value)
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const Myobject = {
    'Game_1' : "GTA",
    'Game_2' : "NFS"
}

// for (const [key, value] of Myobject) {
//     console.log(key, ':-', value);
// }
//  Object is not iterable like array's


