let numero1 = document.getElementById("number1");
let numero2 = document.getElementById("number2");
let btnProdotto = document.getElementById("btn1");
let btnDivisione = document.getElementById("btn2");
let demoProdotto = document.getElementById("demo1");
let demoDivisione = document.getElementById("demo2");

function calcolaProdotto(){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        demoProdotto.innerHTML = "Inserisci numeri validi.";
        return;
    }
    
    let prodotto = num1 * num2;
    demoProdotto.innerHTML = `Prodotto: ${prodotto}`;
}

btnProdotto.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    calcolaProdotto();
});

function calcolaDivisione(){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        demoDivisione.innerHTML = "Inserisci numeri validi.";
        return;
    }
    
    let divisione = num1 / num2;
    if (num2 === 0) {
        demoDivisione.innerHTML = "Errore: Divisione per zero non è permessa.";
        return;
    }else if(divisione === Infinity || divisione === -Infinity) {
        demoDivisione.innerHTML = "Errore: Risultato infinito.";
        return;
    }else {
        demoDivisione.innerHTML = `Divisione: ${Math.round(divisione)}`;
    }
}

btnDivisione.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    calcolaDivisione();
});