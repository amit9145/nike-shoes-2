import "./App.css";
import HeroSection from "./components/hero";

function App() {
  return <div>
    <nav>
      <div>
        <img src="/images/brand_logo.png" alt="brand logo" />
      </div>
      <ul>
        <li href="#"> menu</li> 
        <li href="#"> location</li> 
        <li href="#"> about</li> 
        <li href="#"> contact</li> 
      </ul>
      <button>login</button>
    </nav>
    <HeroSection/> 
  </div>;
  
}
export default App;