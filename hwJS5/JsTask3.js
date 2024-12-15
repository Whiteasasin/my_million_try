//Завдання 3: Генерація таблиці множення

const numTab = 8 ;

console.log(`Ты выбрал сделать табличку умножения по цифре ${numTab}`);

// for (i = 1 ; i <= 10 ; i++ ){
//     console.log(`${numTab} x ${i} = ${numTab * i}`);
// };

let i = 1;

while (i <= 10) {
    console.log(`${numTab} x ${i} = ${numTab * i}`);
    i++;
};