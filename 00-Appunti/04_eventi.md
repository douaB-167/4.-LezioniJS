# Eventi
IL browser registra tutti i tipi di eventi. Lo script risponde a questi eventi aggiornando il contenuto della pagina, rendendola più interattiva:
 - le interazioni creano gli eventi (click o tap su link);
 - gli eventi lanciando codice;
 - il codice risponde agli utenti tramite interventi sul DOM
  
### Selezione eventi
 - eventi UI (load, unload, error, resize);
 - eventi tastiera (keydown, keyup, keypress);
 - eventi Mouse (click, dbclick, mouseover, scrollup);
 - eventi Focus (focus / focusin, blur / focusout);
 - eventi per moduli (input, change, submit, reset, copy, cut, paste, select).
  
### Gestione degli eventi
1. Selezionare il nodo dell'elemento cui lo script deve rispondere;
1. Indicare quale evento lancerà la risposta (binding);
1. Indicare il codice da eseguire.
  
Tre modi per collegare un evento
 - Gestori eventi HTML: ```<onclick = "hide()">```;
 - Gestore eventi DOM: Supporto browser elevato. Può essere collegata un'unica funzione;
 - Listener di eventi: Metodo di gestione moderno e da preferire per il suo utilizzo.
  
### Gestore tradizionale
elemento.onevento = nomeFunzione; (le parentesi vengono omesse perchè non si vuole che la funzione si verifichi prima di richiamare l'evento)  
es:  
div.onclick = rimuovi;  
  
### Listener di eventi
elemento.addEventListener('evento', 'nomeFunzione', 'Boolean'); (Flusso dell'evento, legato alla risalita e al richiamo di un  evento. Solitamente viene settato a false).