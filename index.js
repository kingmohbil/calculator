
let number1 = '';       // holds the first value in the calculator 
let number2 = '';       // holds the second value in the calculator it's been set to undefined so that it can't crash the calculator with false value like zero
let opreator ='';  
let result ='';

const topScreen = document.querySelector('.top-screen');
topScreen.innerHTML = 0;

const bottomScreen = document.querySelector('.lower-screen');
bottomScreen.innerHTML =0;

const numbers = document.getElementsByClassName('num');


for(let element of numbers){
    element.onclick=()=>{number1 += element.innerHTML;
    topScreen.innerHTML=result;
    bottomScreen.innerHTML=number1};
}

document.getElementById('add').onclick = ()=>{process('+');}   

document.getElementById('sub').onclick = ()=>{process('-');}

document.getElementById('divide').onclick = ()=>{process('/');}

document.getElementById('muiltiply').onclick = ()=>{process('*');}

document.getElementById('sum').onclick = ()=>{process('');}

document.getElementById('clear').onclick =()=>{
    number1='';
    number2='';
    opreator='';
    result='';
    topScreen.innerHTML=result;
    bottomScreen.innerHTML=number1
    for(let element of numbers){
        element.onclick=()=>{number1 += element.innerHTML;
        topScreen.innerHTML=result;
        bottomScreen.innerHTML=number1};
    }
}

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

function process(ope){
    topScreen.innerHTML=result;
    bottomScreen.innerHTML='';
    for(let element of numbers){
        element.onclick=()=>{number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2};
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML = result;
    number1=result;
    number2='';
    opreator=ope;
}