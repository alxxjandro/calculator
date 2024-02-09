
const display = document.querySelector('.display')
const numberBtns = document.querySelectorAll('.number')
const displayContent = document.createElement('p')
display.append(displayContent);


function renderToScreen(number) {
    if (displayContent.innerText === '0') {
        displayContent.innerText = number;
    } else {
        displayContent.innerText += number;
    }
}


numberBtns.forEach(button =>{
    button.addEventListener('click', () => {
        renderToScreen(button.textContent);
    })
})

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

