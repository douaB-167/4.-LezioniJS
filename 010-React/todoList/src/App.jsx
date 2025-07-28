import { useState } from 'react'
import ToDoList from '../components/ToDoList'
import './App.css'
import CreateConnection from '../components/CreateConnection'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  // Funzione per eliminare un todo tramite id
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <ToDoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      <CreateConnection></CreateConnection>
    </>
  )
}

export default App