//byId
let mioForm = document.querySelector("#mioForm");
//byName
let nome = mioForm.nome;
// console.log(nome);

let counter = 0;

nome.addEventListener("change", function(event){
    counter++;
    console.log("Stai aggiornando il campo con il valore: ", event.target.value);
    console.log("Stai aggiornando il campo con il valore: ", this.value);
    console.log(counter)
});

let cognome = mioForm.cognome;

let counter2 = 0;
cognome.addEventListener("input", function(){
    counter2++;
    console.log("Stai aggiornando il campo con il valore: ", event.target.value);
});

let abbonamento = document.querySelector("#abbonamento");
abbonamento.addEventListener("change", function(){
    console.log("Stai scegliendo un abbonamento: ", this.value); //value riferito al value dell'input
});