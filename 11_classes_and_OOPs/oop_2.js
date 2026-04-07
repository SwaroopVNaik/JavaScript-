class Account{
    acc_balance;

    acc_name = 'Acer'

    open_acc(){
        console.log("account opened successfully");
    }

    deposit(){
        console.log("amount deposited");
    }

    withdrawel(){
        console.log("low Balance");
    }

    getbalance(){
        console.log("server Busy");
    }
}

let swaroop = new Account();

// acessing Objects
swaroop.open_acc() // Accesing methods (func)
swaroop.deposit()
swaroop.withdrawel()
swaroop.getbalance()

console.log(swaroop.acc_name); // Acessing properties (var)
