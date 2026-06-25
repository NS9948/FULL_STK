import Header from "./components/Home";

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Navbar from "./components/navbar";
import NotFound from "./components/NotFound";
import Employees from "./components/Employees";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>
      <Navbar/>
      <Header/>
    </div>
  },
  {
    path:'/employees',
    element: <div>
      <Navbar/>
      <Employees/>
      
    </div>
  },
  {
    path:'/about',
    element: <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:'*',
    element: <div>
      <Navbar/>
      <NotFound/>
    </div>
  }
])


function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App;