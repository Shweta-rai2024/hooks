import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

 const addValue = () =>
  {
 setCounter (counter + 1)
  }
 const removeValue = () =>
 {
  setCounter(counter - 1)
 }

  return (
    <>
     <h1>Hooks</h1>
     <h3>Counter : {counter}</h3>
    
     <button onClick={addValue}>Add Numbers{counter}</button>
     <br/>
     <button onClick={removeValue}>Remove Numbers{counter}</button>
     <p>Footer:{counter}</p>
    </>
  )
}

export default App
