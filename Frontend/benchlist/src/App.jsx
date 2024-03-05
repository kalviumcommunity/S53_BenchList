import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contacts from "./components/Contacts"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Data from "./components/DummyData"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<About />} />
          <Route path="/2" element={<Services />} />
          <Route path="/3" element={<Contacts />} />
          <Route path="/4" element={<Login />} />
          <Route path="/5" element={<SignUp />} />
          <Route path="/6" element={<Data />} />
        </Routes>
      </div>
    </>
  )
}

export default App