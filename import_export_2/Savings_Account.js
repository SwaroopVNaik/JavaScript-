import Account from "./Account.js"; // Importing

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

let SA_1 = new Savings_Account(101, "SSS", "SVN@gmail.com", 1234, "Banglore")
console.log(SA_1.get_bal());
console.log(SA_1);
