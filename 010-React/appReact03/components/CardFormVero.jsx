import { useState } from "react";

function CardFormVero({addBird}){

    const initialState = {
        name: "",
        description: "",
        image: "",
        isSpotted: "",
        comment: ""
    }
    //L'oggetto formData deve replicare esattamente la struttura del form
    const [formData, setFormData] = useState(initialState)

    //In questa funzione gestisco tutto il form facendo si che si aggiorni l'oggetto formData
    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        const inputValue = type == "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: inputValue
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const bird = {
            id: Math.ceil(Math.random()),
            nome: formData.name,
            description: formData.description,
            imgURL: formData.image,
            isSpotted: formData.isSpotted,
            comment: formData.comment
        }
        addBird(bird);
        //Reset del form
        setFormData(initialState);
    }
    return(
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <h2>Form Vero ADD BIRD</h2>
                    <div>
                        <label>Nome</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label>Descrizione</label>
                        <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label>Immagine</label>
                        <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Avvistato</label>
                        <input
                        type="checkbox"
                        name="isSpotted"
                        checked={formData.isSpotted}
                        onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Commento</label>
                        <input
                        type="text"
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}/>
                    </div>

                    <div>
                        <button type="submit">Aggiungi</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CardFormVero