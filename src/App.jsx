
import './App.css'
import Navbar from './components/Navbar'
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="hero">
          <h1>
            READY. AVAILABLE. CUSTOMIZED. YOURS.
          </h1>
          <h2>
            Need a website now?<br /> We've got you covered.
          </h2>
          <button>
            <Link
              to="/contact"
              className="Herobutton"
            >
              Take a look at your options here...
            </Link>
          </button>
        </div>
        <div className="home2">
          
        </div>
      </div>
    </>
  )
}

export default App
