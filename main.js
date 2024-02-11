//select and make the display accesable
const displayDiv = document.querySelector('.display');
const display = document.createElement('p');
display.classList.add('displayText')
displayDiv.append(display)

const acBtn = document.querySelector('#AC');
const signBtn = document.querySelector('#sign');
const percentageBtn = document.querySelector('#percentage')
const pointBtn = document.querySelector(`#dot`)


const numberBtns = document.querySelectorAll('.number');
const equalBtn = document.querySelector('#equal');
const operatorsBtns = document.querySelectorAll('.operator')

let operator = null;
let firstArg = null;
let secondArg = null;
let result = null;


function getDisplayNumber(){
    return parseFloat(display.innerText)
}

function clearDisplay(){
    display.innerText = '';
}

function clearVariables(){
    operator = null;
    firstArg = null;
    secondArg = null;
    result = null;
}

function renderToDisplay(element){
    if ( getDisplayNumber() !== 0 || display.innerText.includes('.')){
        parseFloat(display.innerText += element);
    } else{
        parseFloat(display.innerText = element);
    }
}

function makePercentage(){
    tempNum = parseFloat(display.innerText) /100
    clearDisplay()
    renderToDisplay(tempNum)
}




acBtn.addEventListener('click', () =>{
    clearDisplay();
    renderToDisplay(0)
})

signBtn.addEventListener('click', () =>{

    let tempNum = getDisplayNumber();
    console.log(tempNum)
    clearDisplay();

    if (tempNum > 0){
        renderToDisplay(tempNum * -1)
    } else if (tempNum < 0){
        renderToDisplay(tempNum * -1)
    } else{
        renderToDisplay(0)
    }
})

percentageBtn.addEventListener('click', () =>{
    makePercentage();
})

pointBtn.addEventListener('click', () =>{
    display.innerText += '.';
})

numberBtns.forEach(button =>{
    button.addEventListener('click', () => {
        renderToDisplay(button.textContent);
    })
})

operatorsBtns.forEach(button =>{
    button.addEventListener('click', () => {

        firstArg = getDisplayNumber();
        if (firstArg != 0){
            clearDisplay();
            operator = button.textContent;
        } else {
            renderToDisplay(0)
        } return operator

        return firstArg, operator
    })
}) 


function getResult(){
    secondArg = getDisplayNumber();
    console.log('first arg', firstArg, 'second arg', secondArg)
    console.log('operator', operator)

    switch(operator){
        case '+':
            result = firstArg + secondArg;
            console.log('result',result)
            clearDisplay();
            renderToDisplay(result);
            clearVariables();
            break;
        case '-':
            result = firstArg - secondArg;
            console.log('result',result)
            clearDisplay();
            renderToDisplay(result);
            clearVariables();
            break;
        case '*':
            result = firstArg * secondArg;
            console.log('result',result)
            clearDisplay();
            renderToDisplay(result);
            clearVariables();
            break;
        case '/':
            result = firstArg / secondArg;
            console.log('result',result)
            clearDisplay();
            renderToDisplay(result);
            clearVariables();
            break;
        default:
            clearDisplay();
            renderToDisplay('ERROR');
    }   
    
}

equalBtn.addEventListener('click', () =>{
    getResult()
})



renderToDisplay(0)
