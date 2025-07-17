# Javascript
* JavaScript è stato inizialmente sviluppato dalla Netscape Communications (1995) con il nome di LiveScript e incluso in Netscape Navigator;
* Il nome è stato poi cambiato in JavaScript in assonanza con il linguaggio Java, con cui in realtà condivide ben poco;
* Successivamente Microsoft ha iniziato a supportare una propria versione JavaScript (detta JScript) in Internet Explorer;
* La vita parallela di questi due linguaggi è durata qualche anno, finchè non si è arrivati allo standard ECMAScript;

### Che cos'è Javascript?
Javascript è un linguaggio di programmazione di tipo script orintato agli oggetti e agli eventi:
* non è compilato;
* è ad alto livello;
* incorporato o allegato a un HTML, viene interpretato dal browser;
* rende dinamiche le pagine web;
* Javascript è un linguaggio lato Client. Questo porta numerosi vantaggi: Reesponsività, Minore carico del lavoro per il server.

#### Rendere interattive le pagine web 
* accesso ai contenuti;
* modifica dei contenuti: si possono aggiungere o rimuovere contenuti di una pagina HTML: modificare i valori degli attributi "class" per attivare nuove regole CSS;
* programmare regole: implementare procedure e controlli;
* reazione agli eventi: talvolta uno script deve essere eseguito quando si verifica un determinato evento.

#### HTML & CSS
        <html>              {CSS}       Javascript()  
livello dei contenuti   livello della   livello dei  
                        presentazione   comportamenti
    <p class="frutto"> pesca </p>  
        |        | 
    nome       valore  
  attributo    attributo

.frutto{color:pink;}  
    nome      valore  
    proprietà  proprietà  

#### Collegare un file Javascript ad una pagina HTML
Creare un elemento <script> per chiedere al browser di caricare lo script.  
Solitamente va posizionato prima del tag di chiusura </body>  
<script type="text/javascript" src="js/mioJs.js"></script>  
oppure  
<script> document.write ('<h3>Benvenuto!</h3>')</script>  

#### Cos'è una variabile
Compito delle variabili è conservare temporaneamente delle informazioni che servono allo script per eseguire il proprio lavoro. Il nome "variabile" è perfetto poichè il valore può variare ad ogni esecuzione del codice.  
let quantity;  
quantity = 3;  

#### Tipi di dati
Numerico, Stringa, Booleano
##### Regole denominazione delle variabili
* cominciare con una lettera, _, $. No numeri;
* No - o. all'interno dei nomi della variabile;
* ok camelCase;
* descrivere contenuto;
* no parole chiave (bstract, boolean, byte, true, try, let, long, ecc).

#### Array
Per memorizzare un intero elenco di valori correlati. Utili quando non si sa quanti elementi conterrà, per cui è necessario specificare quanti elementi avrà l'array.  
Dichiarazione standard  
var color;  
colors = {'bianco', 'rosso', 'blu'};  
Dichiarazione con costruttore  
var colors = new Array('bianco', 'rosso', 'blu');  
  
Gli array sono oggetti 0-based, ad ogni elemento viene associato un indice.  
var itemTre;  
itemTre = colors[2];  
Per conoscere la dimensione, quindi il numero degli elementi, di un array si utilizza  
var numColors = colors.length;  
  
##### Metodi per Array
* push()    -> aggiungere elementi all'array;
* pop()     -> rimuovere elementi;
* concat()  -> crea un nuovo array unendone due;
* sort()    -> ordina gli elementi dell'array;
* reverse() -> inverse l'ordine.
  
#### Operatori
Le esoressioni contano su elementi chiamati operatori che permettono ai programmatori di creare un unico valore a partire da uno o più valori.
* operatori di assegnamento: =;
* operatori aritmetici: +*-/ ++ -- %;
* operatori per stringhe: +;
* operatori di confronto: < > <= >=;
* operatori logici: && || !.

#### Che cos'è una funzione
Le funzioni consentono di raggruppare tutte le istruzioni necessarie per svolgere un determinato compito.  
  
Le istruzioni di una funzione non vengono eseguite a ogni caricamento della pagina ma ogni qualvolta vengono richiamate.  
  
Alcune funzioni devono ricevere delle informazioni per svolgere le istruzioni, queste informazioni passate alla funzione sono chiamati parametri.  
  
Quando ci si aspetta che una funzione restituisca una risposta, questa è detta valore restituito.
  
##### Dichiarare e richiamare una funzione
Dichiarare  
function sayHello(){  
    alert('Ciao Carl');
}  
Richiamare  
sayHello/();
  
##### Dichiarare e richiamare una funzione con parametri
Dichiarare  
function getArea(altezza, larghezza){
    return altezza * larghezza;
}  
Richiamare  
getArea(5,4);  
  
##### Espressioni funzionali
Dichiarare  
var area = function getArea(altezza, larghezza){
    return altezza * larghezza;
}  
Richiamare  
var size = area(5,4);  
**Attenzione:**  un’espressione funzionale non può essere richiamata prima chel’interprete l’abbia raggiunta.
  
#### Visibilità (SCOPE) delle variabili funzionali
Il punto in cui si dichiara uns variabile influenza la posizione in cui può essere utilizzata nel codice.  
**Scope:** campo di visibilità  
VARIABILI LOCALI  
* livello funzione
* minore utilizzo della memoria 
VARIABILI GLOBALI
* livello globale
* maggiore utilizzo della memoria 

##### Richiamare una funzione dal HTML
in HTML  
<input type="button" value="clicca qui" onclick="Saluta()">  
in JS  
Saluta() {alert ('Hello World');}