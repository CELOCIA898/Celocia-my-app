function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function eraseLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    function eraseLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

}
