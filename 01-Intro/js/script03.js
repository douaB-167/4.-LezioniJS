let listaSpesa = document.getElementById("listaSpesa")

let prodotti = ["carta", "passata di pomodoro", "philadelphia", "mozzarella", "spaghetti", "olio d'oliva"];
let prezzi = [2.39, 0.99, 3.50, 1.99, 1.20, 3.99];
let quants = [1, 3, 1, 1, 2, 1];

let totaleGenerale = 0;
let totaleElement = document.getElementById("totale");

for(let i=0; i < prodotti.length; i++){
    let tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.innerHTML = prodotti[i].toUpperCase().charAt(0) + prodotti[i].slice(1);
    //tdNome.textContent = prodotti[i].charAt(0).toUpperCase() + prodotti[i].slice(1);

    let tdPrezzo = document.createElement("td");
    tdPrezzo.innerHTML = prezzi[i].toFixed(2) + " €";
    
    let tdQuantita = document.createElement("td");
    tdQuantita.innerHTML = quants[i];

    let subTotale = prezzi[i] * quants[i];
    let tdSubTotale = document.createElement("td");
    tdSubTotale.innerHTML = subTotale.toFixed(2);

    tr.appendChild(tdNome);
    tr.appendChild(tdPrezzo);
    tr.appendChild(tdQuantita);
    tr.appendChild(tdSubTotale);

    listaSpesa.appendChild(tr);
    totaleGenerale += subTotale;
}

// let grandTotal = 0;

// for(let i = 0; i < prodotti.length; i++){
//     let subtotal = quants[i] * prezzi[i];
//     grandTotal += subtotal;
//     listaSpesa.innerHTML += `<tr>
//                             <td> ${prodotti[i]} </td
//                             <td> ${prezzi[i]} </td
//                             <td> ${quants[i]} </td
//                             <td> ${subtotal.toFixed(2)} </td
//                             </tr
//                             `;
// }

document.getElementById("totale").innerHTML = "Totale: " + totaleGenerale.toFixed(2) + " €";