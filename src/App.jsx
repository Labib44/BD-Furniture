import { RouterProvider } from "react-router-dom"
import routers from "./router/Router/Router"
import './App.css'

function App() {


  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
