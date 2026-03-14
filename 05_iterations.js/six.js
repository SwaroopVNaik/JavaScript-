/* 
Undefined =>
A variable that has been declared but not assigned a value automatically gets undefined.
it is assigned by JavaScript itself. 
*/

/*
NULL =>
In JavaScript, null is a special value that represents “no value” or “empty value.” , 
declared by the developer
*/

// ForEach does not return any value.

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values); 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Method 1
const newNums = myNums.filter( (num) => {
    return num > 4
})

console.log(newNums);

const newNums_V2 = []

// Method 2
newNums_V2.forEach( (num_v1) => {
    if(num >  4){
        newNums_V2.push(num_v1)
    }
})

// above methods are correct we can use anything

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// Explicit Method
const userBooks = books.filter( (BK) => {
    return BK.genre === "History"
  }) 

  console.log(userBooks);
  
//   Implicit Method 
let userBooks_V2 = books.filter( (BK_V2) => ( BK_V2.publish >= 1995 && BK_V2.genre === "History" ))

console.log(userBooks_V2);