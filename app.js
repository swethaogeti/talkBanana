

var alertMsg = "you can only use this app 5 times in an hour due to rate limiting problem sorry for the inconvience";

alert(alertMsg);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";


function errorHandler() {
    alert("something went wrong! Try again after sometime.");
  
}



function clickHandler() {
    var inputText = txtInput.value;
    var finalURL = UrlBuilder(inputText);
    console.log("finalURl: " + finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
            console.log("translated text: " + translatedText);
        }).catch(errorHandler);
}
function UrlBuilder(inputText) {
    var encodedURI = encodeURI(inputText);
    console.log("Encoded URI: " + encodedURI);
    return `${serverURL}?text=${encodedURI}`; 
}

btnTranslate.addEventListener("click",clickHandler);







