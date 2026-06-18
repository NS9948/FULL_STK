import { useState,useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Any user'/>
      {
        <div>
        {filteredUsers.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      }   
      
    </>
  )
}

export default App
