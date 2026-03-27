class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // automatically 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Svn = new Teacher("Swaroop", "teacher@gmail.com", "123")

Svn.addCourse();
Svn.logMe(); // accesible cause its inherting the properties.

const Swaroop = new User("swaroop")

Swaroop.logMe() 

console.log(Svn instanceof Teacher); // to check the inheritance

