function add(a, b) {return a+b;}
function divide(a, b){return a/b;}
function multiply(a, b){return a*b;}
function subtract(a, b){return a-b;}
function operate(opreator, a, b){
    switch(opreator){
        case '+':return add(a,b);
        case '-':return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
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
    opreator='-';
    result=+text;
    display.innerHTML=result;
    text=''; 
}


document.querySelector('#divide').onclick=()=>{
    opreator='/';
    result=+text;
    display.innerHTML=result;
    text=''; 
}


document.querySelector('#sum').onclick=()=>{
    opreator='+';
    result=+text;
    display.innerHTML=result;
    text=''; 
}


document.querySelector('#muilt').onclick=()=>{
    opreator='+';
    result=+text;
    display.innerHTML=result;
    text=''; 
}

document.querySelector('#clear').onclick=()=>{
    text="";
    display.innerHTML=text;
    newText='';
}


document.querySelector('#equal').onclick=()=>{
    result = operate(opreator, result, +text);
    display.innerHTML=result;
    text=result.toString();

}