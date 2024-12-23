//Завдання 2

function addNum (num){
    console.log(num);
    if (num > 0){
        addNum(num -1) ;
    };
};

addNum(10);
