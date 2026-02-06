import "./App.css";
import HeroSection from "./components/hero";

function App() {
  return (
    <div>
      <nav>
        <div>
          <img src="/images/brand_logo.png" alt="Nike Brand Logo" />
        </div>
        <ul>
          <li><a href="#" aria-label="Menu">Menu</a></li> 
          <li><a href="#" aria-label="Location">Location</a></li> 
          <li><a href="#" aria-label="About">About</a></li> 
          <li><a href="#" aria-label="Contact">Contact</a></li> 
        </ul>
        <button type="button" aria-label="Login">Login</button>
      </nav>
      <HeroSection/> 
    </div>
  );
}
export default App;