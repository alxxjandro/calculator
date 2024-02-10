
const display = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.number');
const displayContent = document.createElement('p');
    display.append(displayContent);


const operatorBtns = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('#equal');
let firstNumber = null,
    operator = null;


function renderToScreen(number) {
    if (displayContent.innerText === '0') {
        displayContent.innerText = number;
    } else {
        displayContent.innerText += number;
    }
}

function getNumber(){
    return parseInt(displayContent.innerText);
}

operatorBtns.forEach(button =>{
    button.addEventListener('click', () => {
        firstNumber = getNumber(); 
        displayContent.innerText = '';
        console.log(firstNumber)
        renderToScreen('');
        operator = button.textContent
        return firstNumber,operator;
    })
})

numberBtns.forEach(button =>{
    button.addEventListener('click', () => {
        renderToScreen(button.textContent);
    })
})

equalBtn.addEventListener('click', () => {
    const secondNumber = getNumber();
    console.log(firstNumber,secondNumber)
    let result;
    switch(operator){
        case '+':
            result = firstNumber + secondNumber;
            break
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'ERROR'
            break
    }
    displayContent.innerText = result;
    firstNumber = result;
});



//funciones logicas
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

//operate the calculator
function operate(numberOne,numberTwo){

}


//default
renderToScreen(0);

