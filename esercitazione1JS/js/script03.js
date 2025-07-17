let dataNascita = document.getElementById("dataNascita");
let dataAttuale = document.getElementById("dataAttuale");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function calcolaEta() {
    let nascita = new Date(dataNascita.value);
    let attuale = new Date(dataAttuale.value);
    
    if (isNaN(nascita.getTime()) || isNaN(attuale.getTime())) {
        demo.innerHTML = "Inserisci date valide.";
        return;
    }

    let eta = attuale.getFullYear() - nascita.getFullYear();
    let mese = attuale.getMonth() - nascita.getMonth();
    
    if (mese < 0 || (mese === 0 && attuale.getDate() < nascita.getDate())) {
        eta--;
    }
    
    demo.innerHTML = `Età: ${eta} anni`;
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    calcolaEta();
});