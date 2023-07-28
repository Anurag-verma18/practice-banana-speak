var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#myinput');
var txtOutput = document.querySelector('#myoutput');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function clickHandler() {
    var inputText = txtInput.value;
    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(error => {
            console.log("error occured", error);
            alert("something wrong with server");
        })
}
btnTranslate.addEventListener('click', clickHandler);

