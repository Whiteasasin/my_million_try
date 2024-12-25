// Завдання 2: Копіювання з мутацією

const numbers = [1, 2, 3, 4, 5];
const numXIndex = numbers.map((element, index) => {
    return element * index ;
});

console.log(numXIndex);