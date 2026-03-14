// Reduce Method 

MY_NUMS = [1, 2, 3]

const myTotal = MY_NUMS.reduce(function(accumaltor, current_value) {
    console.log(`acc : ${accumaltor} and current_value: ${current_value}`);
    
    return accumaltor + current_value
}, 0) // Giving Value to Accumalator 

console.log(myTotal);

// In arrow Function 

const myTotal_V2 = MY_NUMS.reduce( (accumaltor, current_value) => (accumaltor + current_value), 0)
console.log(myTotal_V2);

const shopping_cart = [
    {
        itemName : "JavaScript",
        Price : 2999
    },
    {
        itemName: "Python",
        Price : 5999
    },
    {
        itemName :"DataScience",
        Price: 12999
    },
]

const PriceToPay = shopping_cart.reduce((acc, item) => {
    console.log(`accmalator : ${acc} and the item price ${item.Price}`);
    return acc + item.Price
}, 0) 

console.log(PriceToPay);
