class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // to apply Get => get 
    // when we define getter we have to always use setter 
    // getter gets the value 
    // setter is to set the value inside the class
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }

    // to apply Set => set 
    set password(value){
        this._password = value.toUpperCase()
    }
}

const swaroop = new User("svn@AIcom", "12@ss")
console.log(swaroop.password);
console.log(swaroop.email);