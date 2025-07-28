function Card({id, todo, date}){
    
    return(
        <div className="card-container">
            <div className="card">
                <h2>{todo}</h2>
                <p>{id}</p>
                <p>Completed: {date}</p>
            </div>
        </div>
    )

}

export default Card