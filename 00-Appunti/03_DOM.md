# DOM
Il DOM (Document Object Model) modella il modo in cui i browser rappresentano una pagina HTML e il modo in cui Javascript può accedere al contenuto di una pagina web e aggiornarlo mentre è visualizzato in una finestra del browser.  
  
Il DOM è un insieme di regole distinto, implementato dai principali browser, si occupa sostanzialmente di due cose: 
* creare un modello della pagina HTML utilizzando un albero del DOM;
* accedere al contenuto della pagina HTML utilizzando metodi e proprietà degli oggetti del modello. Il DOM è un API (Application Programming Interface)  
  
## Albero del dom
Quando un browser carica una pagina web crea un modello. Il modello è l'albero del dom.  
Costituito da 4 tipi di nodi:
* nodo del DOCUMENTO (l'oggetto document);
* nodi degli ELEMENTI (```<h1>; <a>; <body>```);
* nodi degli ATTRIBUTI (href, class);
* nodi di TESTO (questi non possono avere figli nella gerarchia)
  
## Operare sull'albero del dom
1. Accedere agli elementi
1. Operare sugli elementi
  
### Metodi per selezionare un singolo elemento:
 - getElementById('id');  
   seleziona un singolo elemento dato il suo valore dell'attributo id  
 - querySelection('cssSelector')
   la sezione avviene tramite sintassi css (es 'li.cool'). Restituisce solo il primo elemento del node
  
### Metodi per selezionare più elementi:
 - getElementByClassName('class');
   selezionare tutti gli elementi sulla base dell'attributo class
 - getElementByTagName('tagName');
   seleziona tutti gli elementi che hanno il tag specifico
 - querySelectorAll('cssSelector');
   la sezione avviene tramite sintassi css (es 'li.cool'). Restituisce solo il primo elemento del node
OSS: quando utilizzo questi metodi javascript mi restituisce una NodeList (anche quando trova un singolo elemento)
  
### NodeList
Le nodeList somigliano agli Array; sono un tipo di oggetto chiamato **collection**.  
E' possibile quindi applicare proprietà e metodi tipici degli array:  
 - .length()  
   numero degli elementi presenti in unaa nodeList
 - .item()
   restituisce un determinato nodo
OSS: nel metodo item() va specificato come parametro l'indice dell'elemento desiderato. es. .item(0)  
Questo metodo può essere ovviato con l'uso della sintassi as Array  
  
### Traversing DOM
Dal nodo di un elemento è possibile selezionare altri elementi correlati tramite 5 proprietà:
 - .parentNode: ```<li> -> <ul>```;
 - .previousSibling: ```<li> -> <li>```;  
   .nextSibling
 - .firstChild: ```<ul> -> <li>```;  
   .lastChild  
  
Il traversing può essere reso difficile dal fatto che alcuni browser aggiungono nodi di testo quando ci sono spazi vuoti.
  
### Accedere / aggiornare il contenuto di un elemento
Quando si lavora con il nodo di un elemento (e non col suo nodo di testo).  
Questo può contenere del codice. Per cui la scelta della tecnica da utilizzare dipende dal contenuto dell'elemento.
 - .innerHTML: legge/scrive testo e codice;
 - .textContent: legge/scrive solo testo;
 - .innerText: legge/scrive solo testo
.innerHTML ottiene il contenuto di un elemento e lo restituisce come stringa.  
.innerText non consigliato il suo utilizzo per problemi di: supporto browser; css; prestazioni.
  
### Aggiungere elementi tramite manipolazione del DOM
Manipolare il Dom rappresenta un'altra tecnica per aggiungere nuovi contenuti ad una pagina (da utilizzare al posto di innerHTML)
 - createElement(): creare l'elemento;
 - createTextNode(): crea un nuovo nodo di testo;
 - appendChild(): specifica a quale elemento deve essere aggiunto sotto forma di figlio;
 - removeChild(): rimuove l'elemento figlio dopo aver salvato il contenitore genitore in una variabile.
  
### Controllare attributo e ottenere valori
Serie di metodi per il controllo e la gestione degli attributi dei tag HTML
 - hasAttribute('nomeAttributo');
 - getAttribute('class');
 - setAttribute('class', 'blue');
 - removeAttribute('class').