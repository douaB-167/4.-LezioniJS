import { useState } from 'react';
import './Card.css';

function Card({ title, description, imgURL, children, isSpotted }) {
    const [bg, setBg] = useState(isSpotted);
    const text = bg ? "Avvistato" : "Non Avvistato";

    const setSfondo = () => setBg(!bg);
    
    return (
        <div className={`${"card"} ${bg ? "BgGreen" : "BgRed"}`}>
            <div className="card-image">
                <img src={imgURL} alt="" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Commento: {children}</p>
            </div>
            <button onClick={setSfondo}>{text}</button>
        </div>
    )
}


export default Card;