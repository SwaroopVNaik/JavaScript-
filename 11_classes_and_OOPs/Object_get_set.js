const User = {
    _email: 'SVN@ai.com',
    _password: "123@ssss",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this._email = value
    }
}

const SVN = Object.create(User)
console.log(SVN.email);
