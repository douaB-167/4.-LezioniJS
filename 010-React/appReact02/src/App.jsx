import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => {console.log("Ciao dal pulsantino")}}>
          Pulsantino
        </button>
      </div>

      <hr />
      <div className="card-container">
        <Card 
        title = "Tucano"
        imgURL = "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "Are you Toucan to me?"
        isSpotteed={true}>
          Questo è il children cioè il vero figlio di Card
        </Card>
        
        <Card 
        title = "Flamingo"
        imgURL = "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "Flamingo, balliamo un flamenco?"
        isSpotteed={false}>
          Quanto sono belli i fenicotteri rosa
        </Card>
        
        <Card 
        title = "Parrot"
        imgURL = "https://images.unsplash.com/photo-1538440367084-0a21cb983cee?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
        description = "Cu cu chaaaaaaaa"
        isSpotteed={true}>
          Non sapeva ripetere il mio nome ma lo vedevo pensare
        </Card>
      
      </div>
    </>
  )
}

export default App
