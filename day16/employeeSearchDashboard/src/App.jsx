
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import EmployeeList from './components/EmployeeList';
import EmployeeStats from './components/EmployeeStats';

function App() {
  const [form,setForm] = useState({
    name: "",
    role: ""
  });

  const [employee,setEmployee] = useState([])
  const [search, setSearch] = useState("");

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    if(form.name.trim() !== "" && form.role.trim() !== ""){
      setEmployee([...employee,{
        id: Date.now(),
        name: form.name,
        role: form.role
      }]);

      setForm({
        name: "",
        role: ""
      })
    }
  }
  
  const filtered = employee.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase())
  ||
  emp.role.toLowerCase().includes(search.toLowerCase()))

  function handleClick(){
    setSearch("");
  }
  
  return (
    <>
      <h1>Employee Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter name'/>
        <br />
        <input type="text" name='role' value={form.role} onChange={handleChange} placeholder='Enter role'/>
        <br />
        <button type='submit'>Add Employee</button>
      </form>

      <p>Search Employee</p>
      <SearchBar search={search} setSearch={setSearch}/>
      <button onClick={handleClick}>Clear Search</button>
      <br />
      <EmployeeStats employee={employee} filtered={filtered}/>
      <EmployeeList filtered={filtered}/>






      
    </>
  )
}

export default App
