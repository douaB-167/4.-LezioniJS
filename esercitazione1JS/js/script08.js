let numero1 = document.getElementById("number1");
let numero2 = document.getElementById("number2");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo"); 

function numeroPiuVicino() {
    let n1 = parseInt(numero1.value);
    let n2 = parseInt(numero2.value);
    let diff1 = Math.abs(100 - n1);
    let diff2 = Math.abs(100 - n2);

    if (diff1 < diff2) {
        demo.innerHTML = `Il numero più vicino a 100 è: ${n1}`;
    } else if (diff2 < diff1) {
        demo.innerHTML = `Il numero più vicino a 100 è: ${n2}`;
    } else {
        demo.innerHTML = "Entrambi i numeri sono equidistanti da 100.";
    }
}

btn.addEventListener("click", function(event) {
    event.preventDefault();
    numeroPiuVicino();
});