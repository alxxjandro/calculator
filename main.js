
const display = document.querySelector('.display')
const displayContent = document.createElement('p')
display.append(displayContent);

function renderToDisplay(render){
    displayContent.innerText = '';
    displayContent.innerText = render;
}

renderToDisplay(123132131)