import { useToggle } from "./hooks/useToggle"
function App() {

  const {isOpen,toggle} = useToggle();

  return (
    <>
      <button onClick= {toggle}>Show/hide message</button>
      <br />
      {isOpen && <p>Hey how are you</p>}
    </>
  )
}

export default App
