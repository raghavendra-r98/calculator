let currentInput = "";
let displayElement = document.getElementById("display");

function appendToDisplay(value) {
    currentInput += value;
    displayElement.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    displayElement.innerText = "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        displayElement.innerText = currentInput;
    } catch (error) {
        displayElement.innerText = "Error";
        currentInput = "";
    }
}
