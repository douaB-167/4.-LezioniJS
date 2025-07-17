let studenti = ["Claudio", "Vania", "Ludovica", "Andrea", "Glenda", "Edoardo", "Nicolò", "Sahar", "Ivan", "Jacopo"];

//Stampare i nomi all'interno del div in una lista di li
//1.recupero la porzione di html sulla quale voglio lavorare 
let demo = document.getElementById("demo");
console.log(demo); 

//Con innerHTML cambio la prop del testo al suo interno. Praticamente leggo e scrivo testo + html con questa prop
// demo.innerHTML = "<li>" + studenti[0] + "</li>";
for(let i = 0; i < studenti.length; i++){
    demo.innerHTML += `<li>${studenti[i]}</li>`;
}

let docenti = ["Dario", "Oscar", "Luca", "Roberto", "Egle"];
let listaDoc = document.getElementById("listaDoc");
// docenti.forEach(doc =>{
//     if(doc == "Dario"){
//         listaDoc.innerHTML += `<li class="txtRed">${doc}</li>`;
//     }else{
//         listaDoc.innerHTML += `<li class="txtBlue">${doc}</li>`;
//     }
// })

for(let i = 0; i < docenti.length; i++){
    if(i % 2  == 0){
        //ATT: innerHTML NON è un metodo ma una proprietà
        listaDoc.innerHTML += `<li class="txtRed">${docenti[i]}</li>`;
    }else{
        listaDoc.innerHTML += `<li class="txtBlue">${docenti[i]}</li>`;
    }
}


let fotoGruppo = document.getElementById("fotoGruppo");
// fotoGruppo.innerHTML = "<img src='./img/fotoUNI.jpg' alt='foto aula magna' title='aula magna'> ";

//fatto in modo serio
let img = document.createElement("img");
img.setAttribute("src", "./img/fotoUNI.jpg");
img.setAttribute("title", "aula magna");
img.setAttribute("class", "dimImg");

//ATT: img è figlio di fotoGruppo
fotoGruppo.appendChild(img);