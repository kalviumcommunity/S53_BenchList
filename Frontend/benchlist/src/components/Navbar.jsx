import { Link } from "react-router-dom"
import '../App.css';

export default function Navbar() {
  return (
  <nav>
    <ul>
      <li class="home"><Link to="/">Home</Link></li>
      <li class="about"><Link to="/1">About</Link></li>
      <li class="services"><Link to="/2">Services</Link></li>
      <li class="contact"><Link to="/3">Contacts</Link></li>
    </ul>

    <ul>
      <li class="login"><Link to="/4">Login</Link></li>
      <li class="Sign Up"><Link to="/5">Sign Up</Link></li>
    </ul>
  </nav>
  )
}
