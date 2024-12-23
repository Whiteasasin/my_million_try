//Завдання 1



function handleNum (num, callbackPair, callbackSing){
    if (num % 2 === 0){
        callbackPair();
    } else {
        callbackSing();
    };
};

function callbackPair(){
    console.log("number is pair");
};

function callbackSing(){
    console.log("number is singl");
};

handleNum(2, callbackPair, callbackSing);
handleNum(1, callbackPair, callbackSing);