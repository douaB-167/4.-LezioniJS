let stringa = document.getElementById("stringa");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function aggiuntaAllaStringa(){
    let nuovaStringa = stringa.value;
    if(nuovaStringa === ""){
        demo.innerHTML += "Inserisci una stringa" + "<br>";
        return;
    }else if(nuovaStringa.slice(0, 2) === "Ja" || nuovaStringa.slice(0, 2) === "ja"){
        demo.innerHTML += nuovaStringa + "<br>";
        return;
    }else{
        demo.innerHTML += "Ja" + nuovaStringa + "<br>";

    }
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    aggiuntaAllaStringa();
});