function scriviTesto(){
    let msg, testo;
    msg = document.querySelector("#demo");

    testo = document.querySelector("#testo").ariaValueMax;

    try {
        if(testo == "") throw "testo vuoto";
        if(!isNaN(testo)) throw "Stai inserendo un numero";

        if(testo.length > 10) throw "Stai inserendo un numero troppo lungo";
        if(testo.length < 10) throw "Stai inserendo un numero troppo corto";
    } catch (error) {
        msg.innerHTML = "Errore: " + error;
    }finally{
        document.querySelector("#testo").value = "";
    }

}

let btn = document.querySelector("#btn");

btn.addEventListener("click", scriviTesto);