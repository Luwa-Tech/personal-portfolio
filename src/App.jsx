import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/HomePage"
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Projects from "./components/ProjectSection"
// import Experience from "./components/Experience"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(

      <Route index element={<Home />} />

  ))
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<Home />} />
    //     <Route path="#about" element={<About />} />
    //     <Route path="#projects" element={<Projects />} />
    //     <Route path="#experience" element={<Experience />} />
    //     <Route path="#contact" element={<Contact />} />
    //   </Routes>
    // </Router>

    <RouterProvider router={router} />
  )
}

export default App