
let number1 = '';       // holds the first value in the calculator 
let number2 = '';       // holds the second value in the calculator it's been set to undefined so that it can't crash the calculator with false value like zero
let opreator ='';  
let result ='';
let point;
const topScreen = document.querySelector('.top-screen');
topScreen.innerHTML = 0;

const bottomScreen = document.querySelector('.lower-screen');
bottomScreen.innerHTML =0;

const numbers = document.getElementsByClassName('num');


for(let element of numbers){
    element.onclick=()=>{
        if(element.innerHTML == '.' ){
            if(!number1.includes('.'))
            number1 += element.innerHTML;
        }
    else
    number1 += element.innerHTML;
    topScreen.innerHTML=result;
    bottomScreen.innerHTML=number1
    point=0;};
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
        element.onclick=()=>{
            if(element.innerHTML == '.' ){
                if(!number1.includes('.'))
                number1 += element.innerHTML;
            }
        else
        number1 += element.innerHTML;
        topScreen.innerHTML=result;
        bottomScreen.innerHTML=number1
    point=0;};
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
        element.onclick=()=>{
            if(element.innerHTML == '.' ){
                if(!number2.includes('.'))
                number2 += element.innerHTML;
            }
        else
            number2 += element.innerHTML
            topScreen.innerHTML=result;
            bottomScreen.innerHTML=number2}
            point=1;
    }
    result = operate(opreator,number1, number2);
    topScreen.innerHTML = result;
    number1=result;
    number2='';
    opreator=ope;
}

document.getElementById('back').onclick = ()=>{
    if(point === 0){
        number1 = number1.slice(0,number1.length-1);
        topScreen.innerHTML=result;
        bottomScreen.innerHTML=number1;
    }
    else if(point === 1){
        number2 = number2.slice(0,number2.length-1);
        topScreen.innerHTML=result;
        bottomScreen.innerHTML=number2;
    }
}