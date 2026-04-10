// Inheritance is a concept in object-oriented programming where one class uses the properties and methods of another class.
//  It helps in reusing code and adding new features without writing everything again.

class Parent{
    m1(){
        console.log("Parent class M1 method");
        
    }

    m2(){
        console.log("parent class M2 method");
        
    }
}

class child extends Parent{
    m3(){
        console.log("child class m3 method");
        
    }
}

let c1 = new child
c1.m1()
c1.m2()
c1.m3()
