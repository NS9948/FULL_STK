
import {useReducer, useState} from 'react'

function App() {
  const [form, setForm] = useState({
    name: "",
    role: "",
  });

  function handleChange(e){
    setForm({
      ...form, [e.target.name]:e.target.value
    })
  }

  function reducer(state, action){
    switch(action.type){
      case "ADD_EMPLOYEE":
        return {
          employees: [
            ...state.employees,
            action.payload
          ]
        }

      case "DELETE_EMPLOYEE": 
        return {
          employees: state.employees.filter(emp => emp.id !== action.payload)
        }

      case "CLEAR_ALL":
        return{
          employees: []
        }
      default:
        return state;
    }
  }


  const initialState = {
    employees: []
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
    <input type="text" name='name' value={form.name} onChange={handleChange}/>
    <br />
    <input type="text" name='role' value={form.role} onChange={handleChange}/>
    <br />
    <button onClick={() => {
      if(form.name.trim() === "" || form.role.trim() === ""){
        return;
      }
  dispatch({
    
    type: "ADD_EMPLOYEE",
    payload: {
      id: Date.now(),
      name: form.name,
      role: form.role
    }
    });

    setForm({
      name: "",
      role: ""
    });
  }}>
      ADD EMPLOYEE
    </button>

    <br />
    <br />
    {
      state.employees.map((emp) => (
        <div key={emp.id}>
          <p>Name: {emp.name}</p>
          <p>Role: {emp.role}</p>
          <button onClick={() => {
            dispatch({type: "DELETE_EMPLOYEE", payload: emp.id})
          }}>Delete</button>
        </div>
      ))
    }

    <button onClick={() => dispatch({type: "CLEAR_ALL"})}>CLEAR ALL</button>
      
    </>
  )
}

export default App
