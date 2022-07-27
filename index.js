function add (a, b){ 
    if (b === '' )return +a; 
    else return +a + +b;
}


function subtract(a, b){
    if(b === '') return +a;
    else return +a - +b;
    }


function multiply(a, b){
    if(b === '') return +a;
    else return +a * +b;
}


function divide(a, b){
    if(b === '') return +a;
    else return +a / +b;
}

function operate(opreator, valueOne, valueTwo){
    switch(opreator){
        case '+': return add(valueOne, valueTwo);
        case '-': return subtract(valueOne, valueTwo);
        case '*': return multiply(valueOne, valueTwo);
        case '/': return divide(valueOne, valueTwo);   
        case '': return valueOne;
    }
}

let number1 = '';       // holds the first value in the calculator 
let number2 = '';       // holds the second value in the calculator it's been set to undefined
                        // so that it can't crash the calculator with false value like zero
let opreator ='';  
let result ='';

const topScreen = document.querySelector('.top-screen');
topScreen.innerHTML = '';

const bottomScreen = document.querySelector('.lower-screen');


const numbers = document.getElementsByClassName('num');
for(let element of numbers){
    element.onclick=()=>{number1 += element.innerHTML;
    topScreen.innerHTML=result;
    bottomScreen.innerHTML=number1};
}

document.getElementById('add').onclick=()=>{
    topScreen.innerHTML=result;
    bottomScreen.innerHTML=number2;
    for(let element of numbers){
        element.onclick=()=>{number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2};
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML = result;
    number1=result;
    number2='';
    opreator='+';
    

}
document.getElementById('sub').onclick=()=>{
    topScreen.innerHTML=result;
    bottomScreen.innerHTML=number2;
    for(let element of numbers){
        element.onclick=()=>{number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2};
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML=result;
    number1=result;
    number2='';
    opreator='-';
}


document.getElementById('divide').onclick= ()=>{

    topScreen.innerHTML=result;

    for(let element of numbers){
        element.onclick=()=>{number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2};
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML=result;
    number1=result;
    number2='';
    opreator='/';
}


document.getElementById('muiltiply').onclick= ()=>{
    topScreen.innerHTML=result;

    for(let element of numbers){
        element.onclick=()=>{number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2};
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML=result;
    number1=result;
    number2='';
    opreator='*';
}


document.getElementById('sum').onclick = ()=>{
    topScreen.innerHTML=result;

    for(let element of numbers){
        element.onclick=()=>{number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2};
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML=result;
    number1=result;
    number2='';
    opreator='';
}