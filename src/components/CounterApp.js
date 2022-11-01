import React from 'react'
import { useCounter }from '../hooks/useCounter';
import '../styles/Counter.css'

const Counter = () => {
  const [ counter, increment, reset ] = useCounter();

  return (
    <div className='content-counter'>
      <h2>Contador</h2>
      <p>Clicks: {counter}</p>
      <div className='content-counter-button'>
        <button  onClick={increment}>Increment</button>
        <button  onClick={reset}>Reset</button>   
      </div>
    </div>
  )
  
}

export { Counter };

