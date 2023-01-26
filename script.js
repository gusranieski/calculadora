function addToResult(val) {
    document.getElementById('result').value += val;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    document.getElementById('result').value = eval(document.getElementById('result').value);
}
