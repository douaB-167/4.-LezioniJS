import { useState } from "react"

function ProvaState(){
    // In questo component facciamo un po' di teoria legata allo useState
    // useState() viene importato da React e mi permette di modificare lo STATO di 
    // una funzione quindi di un component

    //      var     funz che modifica la variabile
    const [count, setCount] = useState(0);

    //in questo caso voglio controllare lo stato di un array
    const[items, setItems] = useState([1, 2, 3]);

    const addItem = () => {
        let nuovoItem = 4;
        //devo sempre utilizzare la funzione che modifica lo stato
        setItems([...items, nuovoItem]);
        console.log(items);
    }

    //Controllo lo state di un oggetto
    const [user, setUser] = useState({nome: "Anna", eta: 25});
    //le variabili funzionali non posso essere richiamte prima della loro dichiarazione
    const updateUser = () => {
        let updatedUser = {...user, nome: "Marco"}; //operatore spread su oggetti
        //mi permette di modificare una sola prop senza riscrivere integralmente tutto l'oggetto
        setUser(updatedUser);
        console.log(user);
    }

    return(
        <>
        <div className="card">
            <button onClick={() => setCount(count => count + 1)}> {/* funzione di callback */}
                Il contatore vale {count}
            </button>
        </div>
        <div className="card">
            <button onClick={addItem}>
                Aggiungi un valore {items}
            </button>
        </div>
        <div className="card">
            <button onClick={updateUser}>
                Aggiorna user
            </button>
        </div>

        <div className="card">
            {/* Posso utilizzare gli state dove mi pare all'interno della pagina */}
            <p>Array di numeri: {items}</p>
            <p>User: {user.nome} {user.eta}</p>
        </div>
        </>
    )
}

export default ProvaState