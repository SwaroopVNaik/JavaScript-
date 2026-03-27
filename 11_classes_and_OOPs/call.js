function SetUsername(username){
    // Complex Db Calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // TO hold the reference we are using .call method 
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const svn = new createUser("Swaroop", "SVN@.com", "123")

console.log(svn);