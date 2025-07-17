let testo = document.getElementById("testo");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function invertiStringa(){
    let stringa = testo.value;
    stringa = stringa.split("").reverse().join("");
    demo.innerHTML = stringa;
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    invertiStringa();
});