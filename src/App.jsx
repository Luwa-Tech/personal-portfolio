import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/HomePage"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(

      <Route index element={<Home />} />
    
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App