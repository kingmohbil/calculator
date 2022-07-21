function add(a, b) {return a+b;}
function divide(a, b){
    if(b!==0){
    return a/b;}
    else{
        alert('Error:');
    }

    }
function multiply(a, b){return a*b;}
function subtract(a, b){return a-b;}
function operate(Opreator, a, b){
    switch(Opreator){
        
        case '+':return add(a,b);
        case '-':return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
        case '':return 0;
    }
}


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

}