const fileName = "documento.json";
const extension = getFileExtension(fileName);

// Funzione per ottenere l'estensione di un file
function getFileExtension(filename) {
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop() : '';
}

/**
 *  - parts.length > 1: controlla se ci sono almeno due parti, quindi se c’è almeno un punto nel nome.
    Se è vero → significa che c'è un'estensione.

    - ? parts.pop(): se la condizione è vera, esegue parts.pop(), che rimuove e restituisce l'ultimo elemento dell'array.
    Questo è l’elemento dopo l’ultimo punto, cioè l’estensione del file.

    - : '': se la condizione è falsa (cioè non c’è nemmeno un punto nel nome), restituisce una stringa vuota, segnalando che non c’è estensione
*/

// Esempio di utilizzo
console.log("Estensione del file:", extension);
