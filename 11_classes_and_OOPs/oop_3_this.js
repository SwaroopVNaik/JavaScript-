class Account{
    acc_bal = 0;

    deposit_Amount(amount){
        // The this keyword is a special reference used in object-oriented programming languages to represent the current object — the one whose method or constructor is being executed.
        // To access class memebers inside class we use this keyword

        this.acc_bal = this.acc_bal + amount;
    }
}

// to acces methods outside class we use Objects 
// Declaring new Objects
let A1 = new Account();


// Callling methods
A1.deposit_Amount(500)
A1.deposit_Amount(1000)

let A2 = new Account();
A2.deposit_Amount(4000)
A2.deposit_Amount(90)

console.log(A1);
console.log(A2);

