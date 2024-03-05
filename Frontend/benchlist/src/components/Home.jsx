import { Link } from "react-router-dom"
import "./Home.css"
 
function Home() {
    return (
      <div className="home">
        <div>
        <p className="qoute">
          Want to know the place to sit ?
          <br />
         <button><Link to="/6">Let's Find</Link></button>
        </p>
        </div>
      </div>
    )
  }
  
  export default Home
