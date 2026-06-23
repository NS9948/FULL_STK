import {useReducer} from 'react'

function App() {
  function reducer(score, action) {
    switch (action.type) {
      case "INCREMENT5":
        return score+5;
        
      case "INCREMENT10":
        return score+10;
        
      case "RESET":
        return 0;
    
      default:
        return score;
    }
    
  }

  const [score, dispatch] = useReducer(reducer, 0);

  return (
    <>
      Score: {score}
      <br />
      <button onClick={() => dispatch({type: "INCREMENT5"})}>[+5]</button>
      <button onClick={() => dispatch({type: "INCREMENT10"})}>[+10]</button>
      <button onClick={() => dispatch({type: "RESET"})}>[Reset]</button>
      
    </>
  )
}

export default App
