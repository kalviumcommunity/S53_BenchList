import { Link } from "react-router-dom"
import '../App.css';

export default function Navbar() {
  return (
  <nav>
    <ul>
      <li className="home"><Link to="/">Home</Link></li>
      <li className="about"><Link to="/1">About</Link></li>
      <li className="services"><Link to="/2">Services</Link></li>
      <li className="contact"><Link to="/3">Contacts</Link></li>
    </ul>

    <ul>
      <li className="login"><Link to="/4">Login</Link></li>
      <li className="Sign Up"><Link to="/5">Sign Up</Link></li>
    </ul>
  </nav>
  )
}
