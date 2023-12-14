import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/HomePage"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App