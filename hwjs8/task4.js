/// Завдання 4: Відбір парних чисел

const arrTask4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPosit (num){
    for ( let i = 0 ; num %2 === 0 ; i++){
        return num; 
    };
};

console.log(arrTask4.filter(isPosit));