/// Завдання 1



// function calcSquer (width, height){
//      return width * height;
   
// };

// const callFnSq = calcSquer(20, 22);
// console.log("Площадь " , callFnSq);


// 2. Function Expression

// const calcSquer = function(width, height) {
//     return width * height;
// };


// const callFnSq = calcSquer(5, 10);
// console.log("Площа (function expression):", callFnSq);

//3. Arrow Function

const calcSquer = (width, height) => width * height;


const callFnSq = calcSquer(5, 10);
console.log("Площа (arrow function):", callFnSq);