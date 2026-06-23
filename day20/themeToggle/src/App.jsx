import { useReducer } from 'react'

function App() {
  function reducer(theme, action){
    if(action.type === "TOGGLE_THEME" && theme === "dark"){
      return "light"
    }
    else{
      return "dark"
    }
  }
  const [theme, dispatch] = useReducer(reducer, "light")

  return (
    <>
      Current theme: {theme}
      <br />
      <button onClick={() => dispatch({type: "TOGGLE_THEME"})}>TOGGLE_THEME</button>
      
    </>
  )
}

export default App
