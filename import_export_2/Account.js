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

export default {Account};