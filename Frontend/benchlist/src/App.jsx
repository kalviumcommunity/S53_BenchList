import Navbar from "./components/Navbar"
// import Contacts from "./components/Contacts"
// import Home from "./components/Home"
// import About from "./components/About"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contacts/>} />
          <Route path="/2" element={<About />} />
        </Routes>
      </div> */}
    </>
  )
}

export default App  