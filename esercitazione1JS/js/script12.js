let number1 = parseInt(prompt("Inserisci il primo numero:"));
let number2 = parseInt(prompt("Inserisci il secondo numero:"));

function findGreater(num1, num2) {
    if (num1 > num2) {
        return alert(`Il numero più alto è: ${num1}`);
    } else if (num2 > num1) {
        return alert(`Il numero più alto è: ${num2}`);
    } else {
        return alert("I numeri sono uguali");
    }
}

findGreater(number1, number2);