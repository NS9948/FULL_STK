import { useSearch } from "./hooks/useSearch"

function App() {
  const {search,setSearch} = useSearch();

  function handleChange(e){
    setSearch(e.target.value);
  }
  return (
    <>
      <input type="text" value={search} onChange={handleChange}/>
      <p>You typed: {search}</p>
      
    </>
  )
}

export default App
