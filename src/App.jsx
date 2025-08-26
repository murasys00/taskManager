import { useState } from 'react'
import './App.css'

function App() {

      const[tasks,setTasks] = useState([]);
      const[input,setInput] = useState("");
      
      const addTask = () => 
              {
                setTasks(tasks => [...tasks,{text:input,id:Date.now()}]);
              }
      const deleteTask = (id) => 
          {
              setTasks(tasks.filter(task => task.id !== id))
          }

  return (
    <>
      <h2>Task Manager</h2>  
      <input type='text' onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addTask} >Add</button>
      <ul>
        {tasks.map(task => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => {deleteTask(task.id)}}>Delete</button>
              </li>
        ))}
      </ul>
    </>
  )

}
export default App;
