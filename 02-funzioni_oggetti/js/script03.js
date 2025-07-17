let miaVarGlobale = 42;

function primaFunz() {
    console.log(miaVarGlobale);
}

function secondaFunz(){
    let miaVarLocale = 56; //Lo scope è relativo solo a secondaFunz()
    console.log(miaVarLocale);
}

let numero = 100;
function terzaFunz(){
    let numero = 22; //ridefinisco una variabile con lo stesso nome della globale
    console.log(numero); //22
}

//CLOSURE - "imita il funzionamento dell'incapsulamento presente nativamente in JAVA"
//regole: Quando definisco una funzione internamente ad un'altra la funzione più interna può accedere a:
/**
 * - var locali
 * - parametri della funzione esterna
 * - variabili funzione esterna
 * - var globali
 * 
 * L'accesso a questo propr resta vivo anche quando la funzione più esterna ha terminato l'esecuzione
 */

function creaContatore(){
    let cont = 0; //var locale . "var private"

    return function(){
        cont++;
        return cont;
    }
}

let valore1 = creaContatore();
console.log(valore1()); //1

//si chiama variabile funzionale
let valore2 = creaContatore();
console.log(valore2()); //1
console.log(valore2()); //2
console.log(valore2()); //3

//Senza closure
function contatoreSenza(){
    let cont = 0;
    cont++;
    return cont;
}

let valoreSenza1 = contatoreSenza();
let valoreSenza2 = contatoreSenza();
let valoreSenza3 = contatoreSenza();

console.log(valoreSenza1); //1
console.log(valoreSenza2); //1
console.log(valoreSenza3); //1

//Calcolatrice con closure
function calcolatrice() {
    let risultato = 0;

    //ATT qui mi farò restituire una serie di funzioni, non una singola funzione anonima
    return {
        aggiungi: function(n){
            risultato += n;
            return this;
        },
        sottrai: function(n){
            risultato -= n;
            return this;
        },
        dividi: function(n){
            risultato = (risultato/n);
            return this;
        },
        moltiplica: function(n){
            risultato *= n;
            return this;
        },
        getResult: function(){
            return risultato;
        }
    }
}

let calc = calcolatrice();
let risultatoFinale = calc.aggiungi(10).moltiplica(3).sottrai(8);
risultatoFinale = calc.aggiungi(10).getResult();
console.log(risultatoFinale);

//OSS: non posso arrivare a risultato se non attraverso un metodo