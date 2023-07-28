var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#myinput');
var txtOutput = document.querySelector('#myoutput');

function clickHandler() {
    txtOutput.innerText = txtInput.value;
}
btnTranslate.addEventListener('click', clickHandler)

