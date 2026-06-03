import './App.css'
import Card from './components/studentcard.jsx'

function App() {
  const students = [
    {
      name: "Nishant",
      course: "B.Tech",
      year: "4th year"
    },
    {
      name: "Ayush",
      course: "B.Tech",
      year: "1st year"
    },
    {
      name: "Raman",
      course: "B.Tech",
      year: "3rd year"
    }
  ]


  return (
    <>
      <div className='container'>
        <div className='data'>
          <h1>Student Data Collection:</h1>
        </div>
          {students.map((student, index) => (
            <Card
              key={index}
              name={student.name}
              course={student.course}
              year={student.year}
            />
          ))}
      </div>
    </>
  )
}

export default App
