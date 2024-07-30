import './App.css';
import Kid from './kid';
import { useState } from 'react';

function App() {

  // add useState hook
  let [counter, setCounter] = useState(0)
  // let counter = 1;
  const addition = () => {
    counter = counter+1
    // return counter
    setCounter(counter)
  }
  const Minus = () => {
      setCounter(counter-1)
  }
  
    return (
      <>
        <Kid/>
        <p className="counter">{counter}</p>
        <button
            onClick={addition}>
              Click
            </button>
            <button
            onClick={Minus}>
              Minus
            </button>
      </>
  )
}

export default App
