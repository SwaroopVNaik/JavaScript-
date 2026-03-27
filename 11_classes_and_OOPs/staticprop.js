class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Useranme: ${this.username}`);
        
    }

    // Using static for not giving acesss
    static createId(){
        return `123`
    }
}

const swaroop = new User("Swaroop")
// console.log(swaroop.createId()); 

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Samsung = new Teacher("Samsung", "Samsung@.com")

console.log(Samsung.createId());

Samsung.logMe()