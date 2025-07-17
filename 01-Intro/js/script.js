
console.log("Ciao Dario, sei nella console");

//Dichiaro una variabile
let mioNome = "Dario";
let miaEta = 36;
let presenza = true;
var corso = "TSPPI";
let litriAcqua = 0.75;

console.log("Il tipo della variabile mioNome è: ", typeof mioNome);
console.log("miaEta è ", typeof miaEta);
console.log("litri acqua è", typeof litriAcqua);

//Concateno delle stringhe
console.log("Ciao " +  mioNome + " hai " + miaEta + " anni. Insegni nel corso di " + corso);

// Ctrl + ù
//Modo più veloce per concatenare stringhe, con l'utilizzo del backtick
console.log(`Ciao ${mioNome} hai ${miaEta}`);

//ESEMPIO CON i TIPI
let num1 = 10;
let num2 = 5;
console.log("La somma vale " + (num1 + num2));

let num3 = "25.3";
let num4 = "6";

let somma = Number(num3) + parseFloat(num4); //256
let prodotto = num3 * num4;
let differenza = num3 - num4;
let quoziente = num3 / num4;

console.log(somma);
console.log(prodotto);
console.log(differenza);
console.log(quoziente);

// let numeroCas = Number( window.prompt("Inserisci un numero") ); //Quello che recupero dall'utente sono sempre stringhe
// console.log(typeof numeroCas);

// let mioNumero = 50;
// let somma2 = numeroCas + mioNumero;
// console.log(somma2);


//ARRAY sono molto simili alla collection ArrayList di JAVA

let studenti = ["Claudio", "Vania", "Ludovica", "Andrea", "Glenda", "Edoardo", "Nicolò", "Sahar", "Ivan", "Jacopo", 4, true];

for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i]);
}

studenti.forEach(studente => {
    console.log(studente);
});

for (const stud of studenti) {
    console.log(stud);
}

//anche qui ho prop e metodi legati all'oggetto Array
studenti.push("Dario");

studenti.sort().reverse();

studenti.pop(); //elimina l'ultimo elemento
studenti.shift(); //elimina il primo elemento

//Estraggo o sostituisco più elementi con splice
// studenti.splice(2,5); //Questo modifica l'array originale

studenti.slice(2,6) //Questo NON modifica l'array originale

console.log(studenti);

let studentiEstratti = studenti.slice(2,6);
console.log(studentiEstratti);

//METODI PER CERCARE ELEMENTI

console.log(studenti.indexOf("Claudio"));  //prima occorrenza
console.log(studenti.lastIndexOf("Claudio")); //ultima occorrenza

//Metodo filter
let filtro = studenti.filter(nome => nome.length > 6); //Questo restituisce un array
console.log(filtro);

let find = studenti.find(nome => nome.length > 6); //Questo restituisce un singolo elemento
console.log(find);


//metodi per unire gli array e spaccare
let parole = ["Ciao", "Smartphone", "Mare", "Spiaggia", "Sole"];
console.log(parole.join("_"));


let nome = "Dario";
let numLettere = nome.length;
let emon = nome.split("").reverse().join();
console.log(emon);

let prova = "";
for(let i = nome.length; i > 0; i--){
    prova += nome[i];
}
console.log(prova);