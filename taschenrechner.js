let number1 = 0;
let number2 = 0;
let selectedOperator = "";

function addNumber(number) {
    if (selectedOperator) {
        number2 = 10 * number2 + number;
        document.getElementById("output").value = number2;
    } else {
        number1 = 10 * number1 + number;
        document.getElementById("output").value = number1;
    }

    console.log("Nummer 1: " + number1);
    console.log("Nummer 2: " + number2);
}

function addOparator(operator) {
    selectedOperator = operator
}

function clearAll() {
    document.getElementById("output").value = "";
    number1 = 0;
    number2 = 0;
    selectedOperator = "";
}

function solve() {
    if (number1 && number2 && selectedOperator) {
        let ergebnis = 0;
        if (selectedOperator === '+') {
            ergebnis = number1 + number2;
        }
        if (selectedOperator === '-') {
            ergebnis = number1 - number2;
        }
        if (selectedOperator === '/') {
            ergebnis = number1 / number2;
        }
        if (selectedOperator === '*') {
            ergebnis = number1 * number2;
        }

        selectedOperator = "";
        number2 = 0;
        number1 = ergebnis;
        document.getElementById("output").value = ergebnis;
    }
}