//Chiamo un endpoint di una API esterna

let urlEndpoint = "https://pokeapi.co/api/v2/pokemon/bulbasaur/";

let nomePokemon = "";

//fetchAPI xche esegue una chiamata esterna
fetch(urlEndpoint)
//in questo primo then gestisco la chiamata al server e la sua risposta
.then(data=>{
    console.log(data);
    return data.json() //la prima then mi restituisce una promise
})
.then(response =>{
    //console.log(response.name);
    nomePokemon = response.name;
})

console.log("Nome del pokemon", nomePokemon);
