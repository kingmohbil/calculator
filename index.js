function add (a, b){ 
    if (b === undefined )return +a; 
    else return +a + +b;
}


function subtract(a, b){
    if(b === undefined) return +a;
    else return +a - +b;
    }


function multiply(a, b){
    if(b === undefined) return +a;
    else return +a * +b;
}


function divide(a, b){
    if(b===undefined) return +a;
    else return +a / +b;
}

function operate(opreator, valueOne, valueTwo){
    switch(opreator){
        case '+': return add(valueOne, valueTwo);
        case '-': return subtract(valueOne, valueTwo);
        case '*': return multiply(valueOne, valueTwo);
        case '/': return divide(valueOne, valueTwo);   
        case '': return undefined;
    }
}

function process(ope, sign='') {
    result = operate(opreator, number1, number2);
    topScreen.textContent = (result + sign);
    opreator=ope;
    for ( let element of numbers){
        element.onclick=()=>{ number2+= element.innerHTML;};
    }
    result = operate(opreator, number1, number2);    
    number2 = ''; 
    number1 = result ; 
    topScreen.innerHTML = result;
}
let number1 = '';       // holds the first value in the calculator 
let number2;              // holds the second value in the calculator it's been set to undefined
                    // so that it can't crash the calculator with false value like zero
let opreator ='';  
let result ='';

const topScreen = document.querySelector('.top-screen');
topScreen.innerHTML = '';


const numbers = document.getElementsByClassName('num');
for(let element of numbers){
    element.onclick=()=>{number1 += element.innerHTML;};
}

document.getElementById('add').onclick=()=>{
    opreator = '+';
    process(opreator, '+');
}

/*

let text='';
let result=0;
let opreator='';
const display = document.querySelector('.display');
const cols = document.querySelectorAll('.col');
for(let i of cols){
    i.onclick=()=>{text+=i.innerHTML
    display.innerHTML=text;};
}


document.querySelector('#sub').onclick=()=>{ 
    opreator ='-';
    result = operate(opreator, result, +text);
    display.innerHTML=result;
    text='';
}


document.querySelector('#divide').onclick=()=>{
    opreator ='/';
    result = operate(opreator, +text, result);
    display.innerHTML=result;
    text=''; 
}


document.querySelector('#sum').onclick=()=>{
    opreator ='+';
    result = operate(opreator,+text, result);
    display.innerHTML=result;
    text='';
}


document.querySelector('#muilt').onclick=()=>{
    opreator ='*';
    result = operate(opreator, +text, result);
    display.innerHTML=result;
    text=''; 
}

document.querySelector('#clear').onclick=()=>{
    
    text='';
    display.innerHTML=text;
    result=0;
    opreator ='';
}


document.querySelector('#equal').onclick=()=>{
    result = operate(opreator, result, +text);
    display.innerHTML=result;
    text='';

}*/