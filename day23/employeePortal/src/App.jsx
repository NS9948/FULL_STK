

import './App.css'
import { useState,useEffect } from 'react'

function App() {
  const initialForm = {
    name: "",
    email: "",
    role: "",
    department: ""
  };

  const [errors, setErrors] = useState(initialForm);
  const [form,setForm] = useState(initialForm)

  const [employees,setEmployees] = useState([])


  function handleChange(e){
    setForm({...form, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();

    const newErrors = {};

    if(form.name.trim() === ""){
      newErrors.name = "Name is required";
    }

    if(form.email.trim() === ""){
      newErrors.email = "Email is required";
    }

    if(form.role.trim() === ""){
      newErrors.role = "Role is required";
    }

    if(form.department.trim() === ""){
      newErrors.department = "Department is required";
    }

    if(form.email.trim() !== "" && !form.email.includes('@')){
      newErrors.email = "Invalid Email"
    }

    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);


      return;
    }

    setEmployees(prevEmployees => [...prevEmployees, form]);
    setForm(initialForm)
    setErrors(initialForm)


  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
        </label>
        <input name='name' value={form.name} onChange={handleChange}/>
        {errors.name !== "" && <p>{errors.name}</p>}
      </div>
      <div>
        <label>
          Email:
        </label>
        <input name='email' value={form.email} onChange={handleChange}/>
        {errors.email !== "" && <p>{errors.email}</p>}
      </div>
      <div>
        <label>
          Role:
        </label>
        <input name='role' value={form.role} onChange={handleChange}/>
        {errors.role !== "" && <p>{errors.role}</p>}
      </div>
      <div>
        <label>
          Department:
        </label>
        <input name='department' value={form.department} onChange={handleChange}/>
        {errors.department !== "" && <p>{errors.department}</p>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
    {employees.map((emp, index) => (
        <div key={index}>
          <h3>{emp.name}</h3>
          <p>{emp.email}</p>
          <p>{emp.role}</p>
          <p>{emp.department}</p>
        </div>
      ))}
    </>
  )
}

export default App
