
import UserContext from './context/UserContext';
import { useState } from 'react'
import  Dashboard from "./components/Dashboard";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeContext from './context/ThemeContext';

function App() {
  const [data,setData] = useState({name: 'Nishant',
                                  role: 'Frontend Developer'})

  const [theme, setTheme] = useState("light");

  return (
    <>
      <UserContext.Provider value={data}>
        <ThemeContext.Provider value={theme}>
          <Dashboard/>
          <Navbar/>
          <Footer/>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
