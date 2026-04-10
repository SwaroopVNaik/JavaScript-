class Account{

    constructor(name, email, address){
        this.acc_name = name;
        this.accc_email = email;
        this.acc_address = address;
    }

    get_bal(){
        return this.acc_bal - this.min_balance
    }
}

class Savings_Account extends Account{
    min_balance = 5000;
    constructor(id, name, email, amount, address){
        super(name, email, address); // invoking parent class consturctor using super 
        this.acc_id = id;
        this.acc_bal = amount;
    }

    deposit(amount){
        this.acc_bal = this.acc_bal + amount
    }

    withdraw(amount){
        this.acc_bal = this.acc_bal - amount
    }

    get_balance(){
        return this.acc_bal - this.min_balance
    }
}

class Current_Account extends Account{
     min_balance = 50000;
    constructor(id, name, email, amount, address){
        super(name, email, address); // invoking parent class consturctor using super 
        this.acc_id = id;
        this.acc_bal = amount;
    }
}

let SA_1 = new Savings_Account(101, "SSS", "SVN@gmail.com", 1234, "Banglore")
let CA_1 = new Current_Account(101, "VVV", "VVV@gmail.com", 4321, "Banglore")
console.log(SA_1.get_bal());
console.log(CA_1.get_bal());
console.log(SA_1);
console.log(CA_1);

