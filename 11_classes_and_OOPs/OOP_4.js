// Constructor => It is a special method to initialize object values
// constructor is a method execute (automatically) only once at the time object creation
// we can't invoke constructor explicitly

// example => 

    class OOP_4{

        constructor(){
            console.log("Special Method constructor has been Called");
        }

        M1(){
            console.log("test Class m1()");
        }

        M2(){
            console.log("test Class m2()");
        }

    }

// Declaring new Objects
let T1 = new OOP_4()
let T2 = new OOP_4()
let T3 = new OOP_4()

// call method
T1.M1()