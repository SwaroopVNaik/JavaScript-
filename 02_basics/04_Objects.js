// const tinderUser = new Object() => singleton Object 
const tinderUser = {} // => Non-Singleton User 

// Adding values in tinderUser {}
tinderUser.id = "123abc"
tinderUser.name = "SVN"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const RegularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Swaroop",
            lastname: "VN"
        }
    }
}

// Asccesing Values when an object is nested

// console.log(RegularUser.fullname.userfullname.firstname);

// merging  objects

const OBJ_1 = {1 : "a", 2: "b"}
const OBJ_2 = {3 : "a", 4: "b"}

// const OBJ_3 = {OBJ_1, OBJ_2}

// const OBJ_3 = Object.assign({}, OBJ_1, OBJ_2)

/* 
Prints the merged Objects into single Object { '1': 'a', '2': 'b', '3': 'a', '4': 'b'  }
*/

const obj3 = {...OBJ_1, ...OBJ_2} // Majority Used
// console.log(obj3);

// when we recive values from Database we get array of objects

const users = [
    {
        id: 1,
        email: "SVN.com"
    }, 
    {
        id:2, 
        number_1 : 123456789
    }
]

// accessing values which come's from DB

console.log(users[0].email)
console.log(users[1].number_1);


console.log(tinderUser);

//  Accessing only keys
console.log(Object.keys(tinderUser));

// Accessing Only Values 
console.log(Object.values(tinderUser));

// Accessing Entries
console.log(Object.entries(tinderUser));

// To Check if the property is present in the object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('AGE'));

// De - Structuring of Object :-

const course ={
    coursename: "JavaScript",
    price : "999",
    courseInstructor : "SVN"
}

// Method 1 :
const {courseInstructor} = course
console.log(courseInstructor);

// Method 2 :
const {courseInstructor : Instructor} = course
console.log(Instructor);

// Above Method 1 and Method 2 is used to De - Structure the Objects 

/* JSON =====>
{
    "name": "swaroop",
    "coursename": "JavaScript",
    "price": "free"
}
*/