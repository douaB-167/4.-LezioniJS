//Oggetti con costruttore
class Studente {
    constructor(nome, cognome, eta, corsi, anno, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
        this.anno = anno;
        this.matricola = matricola;

        this.presentati = function () {
            let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome} e sono iscritto ai corsi di : ${this.corsi}.`;
            
            if(matricola != undefined){
                presentazione += `Matricola ${this.matricola}`;
            }

            return presentazione;
        };
    }
}

let mioStudente = new Studente("Laura", "Rossi", 30, ["Tss", "TPPW", "Sist"], 2025, 1);
console.log(mioStudente.nome);
console.log(mioStudente.presentati());

//ATT: qui non passo la matricola
let tuoStudente = new Studente("Marco", "Verdi", 32, ["Tss", "TPPW", "Sist"], 2025);
console.log(tuoStudente.presentati());

let corsoTSS = [
    new Studente("Claudio", "Currò", 31, ["Tss", "TPPW", "Sist"], 2025, 1),
    new Studente("Jacopo", "Magnago", 22, ["Tss", "TPPW", "Sist"], 2025, 2),
    new Studente("Vania", "Villanueva", 26, ["Tss", "TPPW", "Sist"], 2025, 3),
]

corsoTSS.forEach(studente => {
    console.log(studente.presentati());
});

console.log("-------TEST dei FOR-IN-------");
//FORIN creato per gli oggetti. Permette di ciclare su prop degli oggetti pur essendo quest'ultimi no Enurable
for(const prop in mioStudente){
    if(typeof mioStudente[prop] != 'function'){
        console.log(mioStudente[prop]);
    }
}

console.log(mioStudente['nome']); //notazione a parentesi quadre, la prop è scritta come una stringa



