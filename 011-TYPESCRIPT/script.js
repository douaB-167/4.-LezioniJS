//TS è tipizzato, ho i tipi ma non ho l'obbligo di specificarli
var nome = "Dario";
var cognome = "Mennillo";
var eta;
eta = 36;
var interruttore = true;
var sportPref = ["volley", "calcio", "basket", "nuoto"];
sportPref.forEach(function (sport) {
    console.log(sport);
});
//posso creare un oggetto il cui tipo viene costruito al volo. Si chiama object type definition
//ATT: la classe comunque esiste ed è utilizzatissima
var studente;
studente = {
    nome: "Anna",
    cognome: "Rossi",
    email: "a.rossi@gmail.com",
    eta: 30,
    presenza: true
};
console.log(studente);
function saluta(persona) {
    console.log("Ciao ".concat(persona.nome, " ").concat(persona.cognome));
}
//i costrutti sono sempre gli stessi
//Esistono le classi
var Docente = /** @class */ (function () {
    function Docente(nome, cognome, eta, corsi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    //Metodo
    Docente.prototype.insegna = function (nomeCorso) {
        this.corsi.push(nomeCorso);
    };
    Docente.prototype.getCorsi = function () {
        return this.corsi;
    };
    Docente.prototype.saluta = function () {
        return "Ciao, io sono ".concat(this.nome, " ").concat(this.cognome);
    };
    return Docente;
}());
var doc = new Docente("Oscar", "Vecchione", 45, ["html", "css", "db"]);
doc.insegna("javascript");
console.log(doc.getCorsi());
console.log(doc.saluta());
//Esiste anche un altro modo di dichiarare la classe.
//Praticamente non dichiaro le proprietà di classe ma dichiaro direttamente tutto nel costruttore
var Utente = /** @class */ (function () {
    //Posso evitare di specificare le prop di classe ma nel costruttore devo utilizzare i modificatori d'accesso
    function Utente(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    Utente.prototype.estraiMatricola = function () {
        return this.matricola;
    };
    return Utente;
}());
var user = new Utente("Laura", "Verdi", 5);
console.log(user.estraiMatricola());
