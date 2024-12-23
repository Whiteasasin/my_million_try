// task 3 

function divide (numerator, denominator){
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("один з аргументів не є числом");
    }; 

    if (denominator === 0){
        throw new Error("число дорівнює 0");
    };

    return numerator / denominator;
};

const Tests = [
    { numerator: 10, denominator: 2 },
    { numerator: 5, denominator: 0 },
    { numerator: '10', denominator: 2 },
    { numerator: 10, denominator: '2' },
    { numerator: 7, denominator: 3 }
];

Tests.forEach(({ numerator, denominator }) => {
    try {
        const result = divide(numerator, denominator);
        console.log(` Результат ${numerator} / ${denominator} = ${result}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Робота завершена");
    }
});

