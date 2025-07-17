let frase = document.getElementById("frase");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

function letteraMaiuscola(){
    let maiuscola = frase.value;
    if(maiuscola.length === 0){
        demo.innerHTML = "Inserisci una frase" + "<br>";
        return;
    }else{
        let parole = maiuscola.split(" ");
        for(let i = 0; i < parole.length; i++){
            parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
            maiuscola = parole.join(" ");
        }
    }
    demo.innerHTML = maiuscola;
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    letteraMaiuscola();
});