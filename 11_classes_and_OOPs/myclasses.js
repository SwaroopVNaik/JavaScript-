// ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}`
    }
    chnageUserName(){
        return `${this.username.toUpperCase()}`
    }

}

const svn = new User("Swaroop", "@gmail.com", "123")

console.log(svn.encryptPassword());
console.log(svn.chnageUserName());

// behind the scene 

function User_V2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User_V2.prototype.encryptPassword = function(){
    return `${this.password}`
}

User_V2.prototype.chnageUserName = function(){
    return `${this.username.toUpperCase()}`
}

const swaroop = new User("Swaroop", "@gmail.com", "123")

console.log(swaroop.encryptPassword());
console.log(swaroop.chnageUserName());