class parent{
    constructor(){
        console.log("parent class constructor");
    }
}

class child extends parent{
    constructor(){
        super(); // to execute parent class constructor members we are using super();
        console.log("child class constructor");
        
    }
}

new child()