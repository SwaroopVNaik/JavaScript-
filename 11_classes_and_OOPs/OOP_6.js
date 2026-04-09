class Account{
    acc_id;
    acc_name;
    acc_salary;
    min_balance = 500

    constructor(id, name, salary){
        this.acc_id = id;
        this.acc_name = name;
        this.acc_salary = salary;
    }

    deposit_amount(Amount){
        this.acc_salary = this.acc_salary + Amount
    }

    withdrawl(amount){
        this.acc_salary = this.acc_salary - amount
    }

    getbalance(){
        return this.acc_salary - this.min_balance
    }

}

let A1 = new Account(101, "SVN",  1234567890);
let A2 = new Account(102, "NVS",  78909898);
let A3 = new Account(102, "SSS",  456789123);

A1.deposit_amount(500000)
A2.deposit_amount(70000)
A3.deposit_amount(30000)

console.log(A1);
console.log(A2);
console.log(A3);

console.log(A1.getbalance());
console.log(A2.getbalance());
console.log(A3.getbalance());

console.log(A1.withdrawl(1235067390));

