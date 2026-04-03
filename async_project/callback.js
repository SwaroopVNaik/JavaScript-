// callback -> passing function as a argument !

let sum = (a, b) => {
    return a + b
}

let multi = (a, b) => {
    return a * b 
}

let calc = (a, b, callback) => {
    return callback(a, b)
}

let result_1 = calc(10, 20, sum)

console.log(result_1);

let result_2 = calc(10, 20, multi)

console.log(result_2);