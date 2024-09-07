import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const increaseValue = () => {

    // if (counter < 20) {
    //   setCounter(counter + 1)
    // }

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const decreaseValue = () => {

    if (counter > 0) {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Counter value: {counter}</h1>

      <button
      onClick={increaseValue}
      >Increase value</button>

      <br />

      <button
      onClick={decreaseValue}
      >Decrease value</button>
    </>
  )
}

export default App
