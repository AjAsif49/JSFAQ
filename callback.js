function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('Your age is', age);
    task();
}

function washHand(){
    console.log('wash your hands with soap');
}

function takeShower(){
    console.log('Take Shower');
}


explain_callback('Asif', 24, washHand);
explain_callback('Sakib', 23, takeShower);