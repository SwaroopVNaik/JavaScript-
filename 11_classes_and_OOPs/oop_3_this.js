class Account{
    acc_bal = 0;

    deposit_Amount(amount){
        this.acc_bal = this.acc_bal + amount;
    }
}

let A1 = new Account();


A1.deposit_Amount(500)
A1.deposit_Amount(1000)

let A2 = new Account();
A2.deposit_Amount(4000)
A2.deposit_Amount(90)

console.log(A1);
console.log(A2);

