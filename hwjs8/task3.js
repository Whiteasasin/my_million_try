/// Завдання 3: Обчислення суми елементів масиву

const arrForTask3 = [1, 2, 3, 4, 5];

const initialValue = 0 ;

const sunWithInitialVal = arrForTask3.reduce((accumulator , curentValue) => accumulator + curentValue, initialValue);

console.log(sunWithInitialVal);