let testo = document.getElementById("testo");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function invertiStringaFor(){
    let stringa = testo.value;
    let stringaInversa = "";
    for (let i = stringa.length -1 ; i >= 0; i--) {
        stringaInversa += stringa[i];
    }
    demo.innerHTML = stringaInversa;
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    invertiStringaFor();
});