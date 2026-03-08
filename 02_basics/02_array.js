const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push => joins string => ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat => ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros);

/* Spread => ["thor", "ironman", "spiderman", "superman", "flash", "batman"] ( even if there is more then 2 array we can spread it , the method is used more compared to concat()) */

//  This makes the elements in the array independent

const all_new_heros = [...marvel_heros, ...dc_heros] // Majority Used

console.log(all_new_heros);

// Merging Arrays
const another_array = [1, 2, 3,  [4, 5, 6], 7, [6, 7, [4, 5]]]

/*

flat => sorts all the combined array ( another_array) into single array 
[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

*/

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("swaroop"));

// converting to array
console.log(Array.from("swaroop")); 

// if it can't convert it to array it gives empty array []
// Intersting
console.log(Array.from({name: "swaroop"})); 

let score_1 = 100
let score_2 = 200
let score_3 = 300

// of => returns new array with set of elements 

console.log(Array.of(score_1, score_2, score_3));
