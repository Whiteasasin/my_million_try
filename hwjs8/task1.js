// Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел



const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 11, 23, -100, 200, 300, 0];

let positiveCount = 0 ;
let negativeCount = 0 ;
let zeroCount = 0 ;

for (let i = 0; i < numbers.length ; i++){
    if(numbers[i] > 0){
        positiveCount ++ ; 
    }else if (numbers[i] < 0){
        negativeCount ++ ; 
    }else if (numbers[i] == 0){
        zeroCount ++ ; 
    };

};

console.log(`вот твои позитивные числа : ${positiveCount}`);
console.log(`вот твои негативные числа : ${negativeCount}`);
console.log(`вот твои нулевые числа : ${zeroCount}`);