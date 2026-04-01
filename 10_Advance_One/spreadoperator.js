// spread operator -> applicable for arrays and objects
// what is spread operaor => extract and copy
// 2) mergeing arrays, objects
// 3) extending array elements / extending object properties

// extract and copy
let A_1 = [10, 20, 30, 40]

let A_2 = [...A_1]

console.log(A_2);

let user_1 = {
    eid : 101,
    ename : 'aravind kumar jada venkatshwara sai',
    email : 'JVS@basotacafe'
}

let user_2 = {
    ...user_1
}

console.log(user_2);

// 2) mergeing arrays, objects

let a = [10, 20, 30, 40, 50]
let b = [30, 20, 50, 60]

let c = [...a, ...b] // arrays allow duplicates

console.log(c);

let user_5 = {
    eid : 102,
    ename : "acer",
    email : 'acer.com'
}

let user_6 = {
    eid : 107,
    ename : 'keybaord', 
    esal : 599
}

let final = {
    ...user_5, ...user_6
}

console.log(final); // Objects does not allow duplicates

// 3) extending array elements / extending object properties

let boss = [10, 20, 30, 40]
let pro = [...boss, 12, 34, 56, 7, 40]

console.log(pro);

let boss_2 = {
    ename : 'aravind',
    esal : 123456789
}

let pro_2 ={
    ename : 'svn',
    esal : 0
}

let pro_2_boss_2 = {
    ...boss_2, ...pro_2
}

console.log(pro_2_boss_2);