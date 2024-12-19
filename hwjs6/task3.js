function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty.";
    } else {
        return "Your order is accepted.";
    }
}


const result1 = checkOrder(100, 150); 
const result2 = checkOrder(100, 0);   
const result3 = checkOrder(100, 50);  


console.log(result1); 
console.log(result2); 
console.log(result3); 