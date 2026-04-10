import Account from "./Account.js"; // Importing

class Current_Account extends Account{
     min_balance = 50000;
     constructor(id, name, email, amount, address){
        super(name, email, address); // invoking parent class consturctor using super 
        this.acc_id = id;
        this.acc_bal = amount;
    }
}


let CA_1 = new Current_Account(101, "VVV", "VVV@gmail.com", 4321, "Banglore")
console.log(CA_1.get_bal());
console.log(CA_1);