let btnAdd = document.querySelector("#btnAdd");
let listaTodo = document.querySelector("#listaTodo");
let item = document.querySelector("#item"); //<input> lo metto dentro perchè la funzione viene chiamata al click
let feed = document.querySelector("#feed");

//ho recupero tutto dentro oppure prima recupero l'oggetto e poi il valore
function addTodo(){
    feed.innerHTML = "";

    let todoItem = item.value; //item, valore del campo
    //console.log(todoItem);

    if(todoItem != "" && todoItem.trim() != ""){

        
        let li = document.createElement("li");
        li.textContent = todoItem;

        li.addEventListener("click", function(event){ //quello creato in quel momento
            // console.log(li.textContent);
            // console.log(this); //this fa riferimento a li sul quale monto addEventListener
            // console.log(this.firstChild.nodeValue); //li
            // console.log(event.target)
            
            //this.setAttribute("class", "txtBar");
            this.classList.toggle("txtBar");
        })
        
        let button = document.createElement("button"); //new Object
        button.textContent = "X";
        button.addEventListener("click", function(){
            //this è button
            //parentNode è li
            
            console.log(this.parentNode);
            listaTodo.removeChild(this.parentNode);
        })
        
        li.appendChild(button); //il button è figlio di li
        listaTodo.appendChild(li); //<li> ciao <button>X</button> </li>
        //pulisco il campo input
        item.value = "";
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