import { useState,useEffect } from 'react'
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>{
      setUsers(data)
      setLoading(false)
    })
    
  }, [])

  if(loading){
    return <h1> Loading... </h1>
  }

  

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <>
      <div><h1>User Directory App</h1></div>
      <SearchBar search={search} setSearch={setSearch}/> 
      {
        <div>
        <UserList filteredUsers={filteredUsers} />
      </div>
      }   
      
    </>
  )
}

export default App
