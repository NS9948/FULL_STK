import { useReducer } from 'react'

function App() {
  function reducer(count, action){
    switch(action.type){
      case "INCREMENT":
        return count + 1;
      case "DECREMENT":
        return count - 1;
      case "RESET":
        return 0;
    
      default:
        return count;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      The Value of Count: {count}
      <br />
      <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
      <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </>
  )
}

export default App
