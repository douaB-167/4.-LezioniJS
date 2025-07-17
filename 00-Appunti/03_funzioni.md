//dichiaro una funzione
function saluta(){
    console.log("Ciao dalla funzione");
}

//per eseguire la funzione la devo richiamare
//la posso richiamare direttamente nello script
//saluta();

//la posso richiamare in un altra funzione ancora
function benvenuto(){
    saluta();
    console.log("Adesso sono dentro benvenuto")
}

//benvuto();

//adesso richiamo benvenuto del html
let btn = document.getElementById("btn");
//ATT: nell'addEventListener la funzione va richiamata senza le parentesi tonde
btn.addEventListener("click", benvenuto, false);

//funzione anonima
btn.addEventListener("click", function(){
    saluta();
});