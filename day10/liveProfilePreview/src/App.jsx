import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");

  

  return (
    <>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Course:</label>
      <input value={course} onChange={(e) => setCourse(e.target.value)}/>
      <label>Year:</label>
      <input value={year} onChange={(e) => setYear(e.target.value)}/>
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Year: {year}</p>s
    </>
    
  )
}

export default App
