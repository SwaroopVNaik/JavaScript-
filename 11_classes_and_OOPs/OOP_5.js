class SVN{
    acc_id;
    acc_name;
    acc_bal;

    constructor(id, name, bal){
        this.acc_id = id; 
        this.acc_name = name;
        this.acc_bal = bal;

    }

}

let A1 = new SVN(101, "Rajesh", 123456789);
let A2 = new SVN(102, "Swaroop", 123456789);

console.log(A1);
console.log(A2);