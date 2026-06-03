const Greeting = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}

const User = (props) =>{
  return (
    <div>
      Name: {props.name}
      <br></br>
      College: {props.college}
    </div>
  )
}

const App = () => {
  let name ="Nishant";
  let college = "XYZ";

  return (
    <div>
      <Greeting name = {name}/>
      <User name = {name} college = {college}/>
    </div>
  )
}

export default App
