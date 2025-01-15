import React, { useState } from 'react'
import './Counter.css'


const Counter = () => {
  const [count, setCount] = useState(0); // count = 0, we can change value of count by using setCount(new-value)
  // we cannot directly use simple variable because it will not dynamically reflect in our website by clicking button
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='btn' onClick={()=> { setCount(count+1); }} >Click me</button>
    </div>
  )
}

export default Counter
