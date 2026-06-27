import { useState } from 'react'


function App() {
  const initialForm = {
    name: "",
    email: "",
    role: ""
  }
  const [form, setForm] = useState(initialForm)

  const [employees,setEmployees] = useState([])

  const [errors,setErrors] = useState(initialForm);

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(initialForm)

    const newError = {}

    if(form.name.trim() ===  ""){
      newError.name = "Name is empty"
    }

    if(form.email.trim() ===  ""){
      newError.email = "Email is empty"
    }

    if(form.email.trim() !== "" && !form.email.includes('@')){
      newError.email = "Email must contain @"
    }

    if(form.role.trim() ===  ""){
      newError.role = "Role is empty"
    }

    if(Object.keys(newError).length >0){
      setErrors(newError)
      return;
    }

    if(editingId !== null){
      const editedEmployee = employees.map((emp) => emp.id===editingId? {id:editingId,...form}: emp)
      setEmployees(editedEmployee)
      setEditingId(null)
    }else{
      setEmployees(prev => [...prev, {id: Date.now(),...form}])
    }
    
    setForm(initialForm)
    


  }

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id)
    setEmployees(updatedEmployees)
  }

  const handleEdit= (emp) => {
    const {name,email,role,id} = emp;
    setForm({
      name,
      email,
      role
    })

    setEditingId(id)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='enter name'/>
      {errors.name !== "" && <p>{errors.name}</p>}
      <br />
      <input type="text" name="email" value={form.email} onChange={handleChange} placeholder='enter email'/>
      {errors.email !== "" && <p>{errors.email}</p>}
      <br />
      <input type="text" name="role" value={form.role} onChange={handleChange} placeholder='enter role'/>
      {errors.role !== "" && <p>{errors.role}</p>}
      <br />
      <button type='submit'>{editingId !== null ? "Update Employee" : "Add Employee"}</button>
      <br />
    </form>

    {
      employees.map((emp) => <div key={emp.id}>
        <p>{emp.name}</p>
        <p>{emp.email}</p>
        <p>{emp.role}</p>
        <button onClick={() => handleEdit(emp)}>
          Edit
        </button>
        <br />
        <button onClick={() => handleDelete(emp.id)}>
          Delete
        </button>
      </div>)
    }
      
      
    </>
  )
}

export default App
