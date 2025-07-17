class Attore{

    constructor(nome, imgAttore){
        this.nome = nome;
        this.imgAttore = imgAttore;
    }
}

let attoriOscar = [
    new Attore(
        "Johnny Depp",
        "./img/johnnyDepp.jpg"
    ),

    new Attore(
        "Vin Diesel",
        "./img/vinDiesel.jpg"
    ),

    new Attore(
        "Sylvester Stallone",
        "./img/sylvesterStallone.jpg"
    ),
    
    new Attore(
        "Margot Robbie",
        "./img/margotRobbie.jpeg"
    ),

    new Attore(
        "Jason Statham",
        "./img/jasonStatham.jpeg"
    ),

];

let li1 = document.querySelector("#attore1");
li1 += ''
console.log(li1.textContent);