
import { useState } from 'react'

function App() {
  const[form,setForm] = useState({
    title: "",
    description: "",
    date: ""
  })

  const [memories,setMemories] = useState([]);

  function handleChange(e) {
    setForm({...form,[e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    if(form.title.trim() !== "" && form.description.trim() !== "" && form.date.trim() !== ""){
      setMemories([...memories,form])

      setForm({
        title: "",
        description: "",
        date: ""
      })
    }
  }

  function handleDelete(title){
    setMemories(
      memories.filter(mem => mem.title !== title)
    );
  }

  const DisplayMemories = () => {
    return(
      memories.map((mem,i) => 
      <div key={i}>
        <p>Title of the Memory: {mem.title}</p>
        <p>Description of the Memory: {mem.description}</p>
        <p>Date of the Memory: {mem.date}</p>
        <br />
        <button onClick={() => handleDelete(mem.title)}>Delete Memory</button>
      </div>)
    )
  }


  return (
    <>
      <h1>Memory Entry Creator</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' value={form.title} onChange={handleChange} placeholder='Enter Title'/>
        <br />
        <input type="text" name='description' value={form.description} onChange={handleChange} placeholder='Enter Description'/>
        <br />
        <input type="text" name='date' value={form.date} onChange={handleChange} placeholder='Enter Date'/>
        <br />
        <button type='submit'>Record Memories</button>
      </form>

      <h2>Total Memories Found: {memories.length}</h2>

      <DisplayMemories />

      


      


      

    </>
  )
}

export default App
