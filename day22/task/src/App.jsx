import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Employees from "./pages/Employees"
import About from "./pages/About"
import Navbar from "./components/Navbar"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: "/employees",
      element: <div>
        <Navbar/>
        <Employees/>
      </div>
    },
    {
      path:"*",
      element:<div>
        <Navbar/>
        <NotFound/>
      </div>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
