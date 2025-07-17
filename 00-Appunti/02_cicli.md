## Decisioni e cicli
In un diagramma di flusso il codice può seguire più percorsi. Controllare il flusso dei dati per gestire situazioni diverse è fondamentale.  
Per prendere una decisione il codice controlla lo stato attuale di uno script confrontando due valori, tramite un operatore di confronto.
  
### Operatori di confronto
* ==  --->  è uguale a
* === --->  è strettamente uguale a (tipo)
* !=  --->  non è uguale a
* !== --->  non è strettamente uguale a
* '>  --->  maggiore di
* <   --->  minore di
* '>= --->  maggiore uguale
* <=  --->  minore uguale
  
### Operatori logici
* &&  --->  AND logico
* ||  --->  OR logico
* !   --->  NOT logico
tabell true/false
  
### Usare le istruzioni IF
L'istruzione if valuta una condizione. Se questa condizione è true allora viene eseguito il blocco di codice successivo  
if(ore > 10){  
    fai qualcosa..  
}  
  
### IF...ELSE
L'istruzione if valuta una condizione. Se questa condizione è true allora viene eseguito il blocco di codice successivo, altrimenti viene eseguito il blocco di codice successivo all'Else  
if(ore > 10){  
    fai qualcosa..  
}else{  
    fai altro...  
}  
  
### Switch
L'istruzione switch inizia con una variabile di controllo, seguita dai vari casi  
switch(condizione){  
    caso 1:  
        fai qualcosa;  
        break;  
    ...  
}  
  
### Cicli
Anche i cicli si basano su una condizione. Se questa condizione è verificata allora viene eseguito il blocco di codice compreso tra le parentesi graffe.  
Successivamente la condizione viene ricontrollata e se è ancora true viene ripetuto il codice, questo finchè la condizione non diventa false.  
  
#### FOR
Esegue un blocco di codice per un numero determinato di volte.  
  
#### WHILE
Il codice continuerà ad essere eseguito finchè la condizione resterà true.  
  
#### DO...WHILE
Simile al while il codice nel do viene eseguito almeno una volta, successivamente viene verificata la condizione.  
  
### CICLO FOR
for(var i = 0; i < 10; i++){  
    document.write(i);  
}  
  
### FOR...IN
Permette di iterare sulle proprietà enumerabili degli oggetti.  
  
### FOR...OF
Permette di ciclare sugli iterable objects come String, Array, List.  
  
### WHILE
while(condizione){  
    fai qualcosa...  
}  
  
### DO...WHILE
do{  
    fai qualcosa...  
}while(condizione);  
  