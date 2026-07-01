
import { useState,useEffect } from 'react'


function App() {

  const intitialForm = {
    name: "",
    email: "",
    role: ""
  }

  const [form,setForm] = useState(intitialForm);
  const [employees, setEmployees] = useState(() => {
    const data = localStorage.getItem("employees");
    return data ? JSON.parse(data) : [];
  });
  const [errors,setErrors] = useState(intitialForm);
  const [editingId, setEditingId] = useState(null)

  const handleSubmit = (e) => {
    const {name,email,role} = form;
    e.preventDefault();

    const newError = {}

    if(name.trim() === ""){
      newError.name = "Name cant be empty"
    }

    if(email.trim() === ""){
      newError.email = "Email cant be empty"
    }

    if(email.trim() !== "" && !email.includes('@')){
      newError.email = "Email must contain @"
    }

    if(role.trim() === ""){
      newError.role = "Role cant be empty"
    }

    if(Object.keys(newError).length > 0 ){
      setErrors(newError);
      return
    }

    if(editingId === null){
      setEmployees(prev => [...prev, {id: Date.now(), ...form}])
    }else{
      const updatedEmp = employees.map((emp) => emp.id === editingId? {id: editingId,...form} : emp)
      setEmployees(updatedEmp)
      setEditingId(null)
    }

    setForm(intitialForm)
    setErrors(intitialForm)


  } 

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  const handleEdit = (emp) => {
    const {name,email,role,id} = emp
    setForm({
      name,
      email,
      role,
    })

    setEditingId(id)
  }

  const handleDelete = (key) => {
    const filtered = employees.filter((emp) => emp.id !== key)
    if(key === editingId){
      setEditingId(null)
      setForm(intitialForm)
      setErrors(intitialForm)
    }
    setEmployees(filtered)
  }

  useEffect(() => {
    JSON.stringify(employees)
    localStorage.setItem(employees,JSON.stringify(employees))
  }, [employees])
  



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter employee name'/>
        {errors.name}
        <br />
        <input type="text" name='email' value={form.email} onChange={handleChange}  placeholder='Enter email'/>
        {errors.email}
        <br /> 
        <input type="text" name='role' value={form.role} onChange={handleChange} placeholder='Enter role'/>
        {errors.role}
        <br />
        <button type='submit'>{editingId === null ? "Submit" : "Update"}</button>
      </form>

      {employees.length !== 0 ?
        employees.map((emp) => <div key={emp.id}>
          <p>
            {emp.name}
          </p>
          <p>
            {emp.email}
          </p>
          <p>
            {emp.role}
          </p>
          <button onClick={() => handleEdit(emp)}>Edit</button>
          <button onClick={() => handleDelete(emp.id)}>Delete</button>
        </div>): "No employees added yet "
      }
    </>
  )
}

export default App
