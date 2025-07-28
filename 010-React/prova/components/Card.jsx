function Card({id, descrizione, date}){
    
    return(
        <div className="card-container">
            <div className="card">
                <h2>{descrizione}</h2>
                <p>{id}</p>
                <p>Completed: {date}</p>
            </div>
        </div>
    )

}

export default Card