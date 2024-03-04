import { Link } from "react-router-dom"
import '../App.css';

export default function Navbar() {
  return (
    <>
  <nav>
    <ul>
      <li class="home"><a href="#home">Home</a></li>
      <li class="about"><a href="#about">About</a></li>
      <li class="services"><a href="#services">Services</a></li>
      <li class="contact"><a href="#contact">Contact</a></li>
    </ul>

    <ul>
      <li class="login"><a href="#login">Login</a></li>
      <li class=""><a href="#Signup">Sign Up</a></li>
    </ul>
  </nav>

  <p class="qoute">
    Want to know the place to sit ?
    <br />
    <button>Let's Find</button>
  </p>
  </>

  )
}