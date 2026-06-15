import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    if(count == 0){
      alert("Count can not go below 0");
    }else{
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>The count is : {count}</h1>
      <button onClick= {increase}>INCREMENT</button>
      <button onClick= {decrease}>DECREMENT</button>
      <button onClick={reset}>Reset</button>
      {count > 10 && <p>🔥 High Count</p>}
    </>
  )
}

export default App
