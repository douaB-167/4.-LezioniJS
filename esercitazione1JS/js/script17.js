let frase = "Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java";
let parola = document.getElementById("parola");
let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

function findWord(){
    let word = parola.value;
    let find = frase.indexOf(word); //ATT .find() metodo solo per gli array e non le stringhe
    //console.log(find); //indexOf() restituisce -1 se la parola non è trovata, includes() restituisce true o false
    if (find !== -1) {  
        demo.innerHTML = `La parola "${word}" è stata trovata nella frase.`;
    } else {
        demo.innerHTML = `La parola "${word}" non è stata trovata nella frase.`;
    }
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    findWord();
});