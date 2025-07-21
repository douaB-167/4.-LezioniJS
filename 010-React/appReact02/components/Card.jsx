import { useState } from 'react';
import './Card.css';

// function Card(){

//     const title = "Tucano";
//     const imgURL = "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const description = "Questo è un Tucano"

//     return(
//         <div className="card">
//             <div className="card-image">
//                 <img src={imgURL} alt="" />
//             </div>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )

// }

//ATT: in questo modo io definisco delle props le quali verranno valorizzate nel component
//Parent. Il dato esiste nel parent
// function Card(props){
//     const title = props.title;
//     const description = props.description;
//     const imgURL = props.imgURL;

//     return(
//         <div className="card">
//              <div className="card-image">
//                  <img src={imgURL} alt="" />
//              </div>
//              <div>
//                  <h2>{title}</h2>
//                  <p>{description}</p>
//              </div>
//          </div>
//     )
// }

//in questa "versione" non passo un parametro chiamato props ma passo direttamente un oggetto
// function Card({title, description, imgURL}){
//     return(
//         <div className="card">
//               <div className="card-image">
//                   <img src={imgURL} alt="" />
//               </div>
//               <div>
//                   <h2>{title}</h2>
//                   <p>{description}</p>
//               </div>
//           </div>
//     )
// }

//in questa "versione" utilizzerò una parola chiave: "children" per poter raccogliere 
//ciò che scrivo a mano nel parent all'interno del selettore child
//Quindi children non è una semplice prop, bensì una parola chiave

function Card({ title, description, imgURL, children, isSpotteed }) {
    const [bg, setBg] = useState(isSpotteed);
    const text = bg ? "Avvistato" : "Non Avvistato";
    // const setSfondoVerde = () => setBg(true);
    // const setSfondoRosso = () => setBg(false);

    const setSfondo = () => setBg(!bg);
    
    return (
        <div className={`${"card"} ${bg ? "BgGreen" : "BgRed"}`}>
            {/* <div className={`${isSpotteed ? "BgGreen" : "BgRed"}`}> */}
                <div className="card-image">
                    <img src={imgURL} alt="" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Commento: {children}</p>
                </div>
                <div>
                    <span>
                        {/* {isSpotteed ? "Avvistato" : "Non avvistato"} */}
                        {text}
                    </span>
                </div>
                <button onClick={setSfondo}>Cambia Sfondo</button>
                {/* <button onClick={setSfondoVerde}>Avvistato{bg}</button>
                <button onClick={setSfondoRosso}>Non Avvistato{bg}</button> */}
            {/* </div> */}
        </div>
    )
}


export default Card;