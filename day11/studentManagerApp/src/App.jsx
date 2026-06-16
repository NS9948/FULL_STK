import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [students, setStudents] = useState([])

  const addStudent = () => {
    if (name.trim() === "") return;
    setStudents([...students, name]);
    setName("");
  }

  const deleteStud = (studentToDelete) => {
    const updatedStudents = students.filter(
      (student) => student !== studentToDelete
    );
  
    setStudents(updatedStudents);
  }
  

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <br />
      <button onClick={addStudent}>Add Student</button>
      {students.map((stud,i) => {
        return <div key={i}>
            <h4 >{stud}</h4>
            <button onClick={() => deleteStud(stud)}>Delete</button>
          </div>
      })}
      
      

    </>
  )
}

export default App
