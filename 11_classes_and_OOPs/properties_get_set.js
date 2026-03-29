// before the concept of getters and setters 
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const swaroop = new User("svn@AIcom", "12@ss")
console.log(swaroop.password);
console.log(swaroop.email);