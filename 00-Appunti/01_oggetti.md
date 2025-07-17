#### Oggetti
Un oggetto è un modello di entità presente nel mondo reale. In un oggetto variabile e funzioni assumono nuovi nomi.  
variabile -> proprietà  
funzione -> metodo  
  
#### Creare un oggetto (notazione letterale)
var Studente = {  
    nome: 'Pippo',  
    cognome: 'Ippo',  
    voto: 30,  
      
    superaEsame: function(){  
        alert('Esame superato !!');  
    }  
}  
   
#### Accedere alle proprietà
Notazione a Punto  
var StudenteNome = Studente.nome;  
var StudenteVoto = Studente.voto;  
var EsameSup = Studente.superaEsame();  
  
Notazione parentesi quadre  
var StudenteNome = Studente['nome'];  
var StudenteVoto = Studente['voto'];  
var EsameSup = Studente['superaEsame'];  
  
#### Creare un oggetto (notazione a costruttore)
var Studente = new Object();  
  
Studente.nome = 'Pippo';  
Studente.superaEsame = function(){...}  
  
Questa notazione è molto utile nel caso in cui si utilizzano più oggetti per rappresentare elementi simili tra loro.
  
#### Creare più oggetti (notazione a costruttore)
function Studente(nome, cognome, voto){  ----> Funzione costruttore  
    this.nome = nome;  
    this.cognome = cognome;    
    this.voto = voto;  
      
    this.superaEsame = function(){  
        alert('Esame superato !!');  
    }  
}  
  
In questo caso quindi utilizzo una funzione come modello per creare gli oggetti  
  
#### Creare più oggetti (notazione a costruttore)
var Studente1 = new Studente('Mario', 'Rossi', 30);  
var Studente2 = new Studente('Paolo', 'Bianchi', 28);  
  
La funzione costruttore crea **istanze** dell'oggetto. La parola chiave **new** seguita dalla chiamata alla funzione crea un nuovo oggetto.  
  
#### La parola chiave this
Comunemente usate in funzioni e oggetti. La parola chiave **this** fa sempre riferimento a un oggetto, normalmente quello in cui opera la funzione.
* Quando this viene utilizzato all'interno di una funzione nel contesto globale fa riferimento all'oggetto window;
* Quando this viene utilizzato all'interno di un oggetto e quindi all'interno di un metodo, il this fa riferimento all'oggetto contenitore.
  
#### Oggetti Built-in
Gli oggetti built-in rappresentano elementi come la finestra del browser e la pagina web presentata nella finestra. Questi oggetti hanno a disposizione una vasta gamma di metodi e informazioni a cui è possibile accedere.  
  
I tre compartimenti principali:
* BOM: Browser Object Model;
* DOM: Document Object Model;
* Oggetti Globali: 
    * String;
    * Number;
    * Boolean;
    * Date;
    * Math
  
##### BOM
Questo modello contiene oggetti che rappresentano la finestra o la scheda del browser.
  
##### DOM
Il DOM crea un modello della pagina web corrente utilizzando gli oggetti.  
L'oggetto più elevato della gerarchia è document.
  
##### Oggetti globali: String 
A una stringa di testo si possono applicare le proprietà e i metodi dell'oggetto String   
  
Proprietà:  
 - length  
Metodi:  
 - toUpperCase();  
 - toLowerCase();  
 - charAt();  
 - indexOf();  
 - lastIndexOf();  
 - subString();  
 - split();  
 - trim();  
 - replace();  
  
##### Oggetti globali: Number
Quando si usa un valore numerico, si possono applicare le proprietà e i metodi dell'oggetto Number  
  
Metodi:  
 - isNan();  
 - toFixed();  
 - toPrecision();  
 - toExponential();
  
##### Oggetti globali: Math
L'oggetto Math offre proprietà e metodi per le costanti e le funzioni matematiche  
  
Metodi:  
 - Math.round();  
 - Math.sqrt(n);  
 - MAth.ceil();  
 - Math.floor();  
 - Math.random();  