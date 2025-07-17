let numero1 = document.getElementById("number1");
let numero2 = document.getElementById("number2");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function calcolaProdotto(){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        demo.innerHTML = "Inserisci numeri validi.";
        return;
    }
    
    let prodotto = num1 * num2;
    demo.innerHTML = `Prodotto: ${prodotto}`;
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    calcolaProdotto();
});