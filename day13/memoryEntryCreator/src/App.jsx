

import { useState } from 'react'

function App() {
  const [form,setForm] = useState({
    title: "",
    description: "",
    date: ""
  })

  const [memories,setMemories] = useState([]);

  const saveMemory= () => {
    if(form.title.trim() !== ""  && form.description.trim() !== "" && form.date.trim() !== ""){
      setMemories([...memories,form]);

      setForm({
        title: "",
        description: "",
        date: ""
      })

    }
  }

  const deleteMemory = (title) => {
    const filtered = 
      memories.filter(mem => mem.title !== title)
    

    setMemories(filtered)
    
  }
  

  return (
    <>
      <input type="text" value={form.title} onChange={e => setForm({...form,title: e.target.value})} placeholder='title'/>
      <br />
      <input type="text" value={form.description} onChange={e => setForm({...form,description: e.target.value})} placeholder='description'/>
      <br />
      <input type="text" value={form.date} onChange={e => setForm({...form,date: e.target.value})} placeholder='date'/>
      <br />

      <button onClick={saveMemory}>Save Memory</button>

      {memories.map((mem,i) => <div key={i}>
        <p>Title: {mem.title}</p>
        <p>Description: {mem.description}</p>
        <p>Date: {mem.date}</p>
        <button onClick={() => deleteMemory(mem.title)}>Delete Memory</button>
      </div>)}

      <br />
      <p>Total memories : {memories.length}</p>

      
    </>
  )
}

export default App
