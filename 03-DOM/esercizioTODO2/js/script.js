let btnAdd = document.querySelector("#btnAdd");
let listaTodo = document.querySelector("#listaTodo");
let item = document.querySelector("#item"); //<input> lo metto dentro perchè la funzione viene chiamata al click
let feed = document.querySelector("#feed");

let usernameConnesso = document.querySelector("#usernameConnesso");

let userConnesso; //ATT: sto recuperando una stringa

function prendiUserConnesso(){
    let userConnessoJSON = localStorage.getItem("user");
    if(userConnessoJSON == null){
        userConnesso.innerHTML = "Mi spiace non c'è nessun utente connesso";
    }else{
        userConnesso = JSON.parse(userConnessoJSON);
        usernameConnesso.innerHTML = userConnesso.nome;
        console.log(userConnesso);
        stampaToDoUserConnesso(userConnesso);
    }
}
/**
 * 
 * @param {Object} user 
 */
function stampaToDoUserConnesso(user){
    user.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
    });
    li.addEventListener("click", function(event){
        this.classList.toggle("txtBar");
    });
    let button = document.createElement("button"); //new Object
    button.textContent = "X";
    button.addEventListener("click", function(){
        console.log(this.parentNode);
        listaTodo.removeChild(this.parentNode);
        let indice = userConnesso.todoList.indexOf(todoItem);
        userConnesso.todoList.splice(indice, 1);
        localStorage.setItem("user", JSON.stringify(userConnesso));
    });
    li.appendChild(button);
    listaTodo.appendChild(li);
}

//recupero l'user dalla localStorage

function addTodo(){
    feed.innerHTML = "";
    
    let todoItem = item.value; //item, valore del campo
    
    if(todoItem != "" && todoItem.trim() != ""){
        
        let li = document.createElement("li");
        li.textContent = todoItem;
        // JSON.stringify(localStorage.setItem("user", userConnesso));
        
        li.addEventListener("click", function(event){ //quello creato in quel momento
            this.classList.toggle("txtBar");
        })
        
        let button = document.createElement("button"); //new Object
        button.textContent = "X";
        button.addEventListener("click", function(){
            console.log(this.parentNode);
            listaTodo.removeChild(this.parentNode);
            let indice = userConnesso.todoList.indexOf(todoItem);
            userConnesso.todoList.splice(indice, 1);
            localStorage.setItem("user", JSON.stringify(userConnesso));
        });
        
        li.appendChild(button); //il button è figlio di li
        listaTodo.appendChild(li); //<li> ciao <button>X</button> </li>
        //pulisco il campo input
        item.value = "";
        userConnesso.todoList.push(todoItem);
        localStorage.setItem("user", JSON.stringify(userConnesso));
    }else{
        feed.innerHTML = "<h5> Mi spiace, non hai scritto nulla </h5>";
    }
}
    
btnAdd.addEventListener("click", addTodo);

item.addEventListener("keypress", function(event){
    console.log(event);
    if(event.key == "Enter"){
        //addTodo();
        btnAdd.click(); //richiamo l'evento click sul pulsante. Questo evento fa addTodo
    }
})

document.addEventListener("DOMContentLoaded", prendiUserConnesso);
function elenco(){

}