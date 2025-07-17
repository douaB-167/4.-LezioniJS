import Link from './Link';
import "./Navbar.css"

function Navbar(){
    let mioNome = "Dario";

    //Ricorda: le regol edi stile vengono passate come oggetti.
    //Tutti i nomi composti con il - si trasformano in camelCase
    //--> text-decoration => textDecoration
    let myStyle = {
        color: "red",
        textDecoration: "underline"
    }

    let x = 15;
    return(
        <>
            <ul>
                <li>
                    <Link>
                    {/* tutto quello che scrivo in un selettore, senza reference non è visibile */}
                    </Link>
                </li>
                <li>
                    <Link></Link>
                </li>
                <li>
                    <Link></Link>
                </li>
                <li style={{fontSize:"20px", color:"blueviolet"}}>
                    {/* Aprire le {} mi permette di scrivere codice in js */}
                    {mioNome == "Dario" ? "Ciao " + mioNome: "Non ti conosco"}
                </li>
                <li style={myStyle}>
                    Prova
                </li>
                {/* Adesso inserisco una classe. ATT: non si utilizza più
                l'attributo class ma l'attributo className */}
                <li className='textClasse'>
                    testo con classe
                </li>
                {/* Applico la classe textClasse solo se la mia x > 10 */}
                <li className={x > 10? "textClasse": ""}>
                    testo 2
                </li>

                {/* Applico più classi di cui 1 dinamica. Si fa uso dei Literals */}
                <li className={`textFam ${x > 10? "textClasse": ""}`}>
                    testo alternativo
                </li>
            </ul>
        </>
    )
}

export default Navbar;