let btnTortaMele = document.getElementById("btn1");
let btnTortaPasticcera = document.getElementById("btn2");
let btnTortaSaintHonore = document.getElementById("btn3");

class Torta{
    constructor(nome, prezzo, ingredienti, imgTorta){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
        this.imgTorta = imgTorta;
    }
}

let torta1 = new Torta("Torta di Mele", "5.49€", ["farina", "uova", "latte", "zucchero", "vaniglia", "succo di limone", "scorza di limone", "lievito", "olio", "cannella"], "./img/torta_mele");
torta1.data_scadenza = new Date('2025-06-26')
btnTortaMele.addEventListener("click", function(){
    document.getElementById("risultato1").innerHTML = `Gli ingredienti della ${torta1.nome} sono: 
    <br>${torta1.ingredienti}. 
    <br>Il prezzo è: ${torta1.prezzo}.
    <br>La data di scadenza è ${torta1.data_scadenza.toLocaleDateString('it-IT')}`; //formato all'italiana gg/mm/aaaa, toISOString().split('T')[0] formato all'americana aaaa-mm-dd
});

let torta2 = new Torta("Crostata di Crema pasticcera", "4.49€", ["olio", "sale", "scorza di limone", "farina", "uova", "latte", "zucchero", "vaniglia"], "./img/torta_crema_pasticcera");
torta2.data_scadenza = new Date('2025-06-18');
btnTortaPasticcera.addEventListener("click", function(){
    document.getElementById("risultato2").innerHTML = `Gli ingredienti della ${torta2.nome} sono: 
    <br>${torta2.ingredienti}. 
    <br>Il prezzo è: ${torta2.prezzo}.
    <br>La data di scadenza è ${torta2.data_scadenza.toLocaleDateString('it-IT')}`;
});

let torta3 = new Torta("Torta Saint Honoré", "6.49€", ["farina", "uova", "latte", "zucchero", "vaniglia"], "./img/torta_saint_honore");
torta3.data_scadenza = new Date('2025-06-20')
btnTortaSaintHonore.addEventListener("click", function(){
    document.getElementById("risultato3").innerHTML = `Gli ingredienti della ${torta3.nome} sono: 
    <br>${torta3.ingredienti}. 
    <br>Il prezzo è: ${torta2.prezzo}.
    <br>La data di scadenza è ${torta3.data_scadenza.toLocaleDateString('it-IT')}`;
});

function cambiaImmagine() {
    let percorso = torta1.imgTorta + ".jpeg"; // ← percorso immagine come stringa
    document.getElementById("img1").src = percorso;

    let percorso2 = torta2.imgTorta + ".jpeg"; // ← percorso immagine come stringa
    document.getElementById("img2").src = percorso2;
    
    let percorso3 = torta3.imgTorta + ".jpeg"; // ← percorso immagine come stringa
    document.getElementById("img3").src = percorso3;
}
cambiaImmagine();