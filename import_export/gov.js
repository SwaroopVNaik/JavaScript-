let tax = 18; 

function get_tax(){
    return tax
}

class gov{
    constructor(){
        console.log("Tax Class Constructor");
    }
}

export default tax; // default export {single value}

export {tax, gov};