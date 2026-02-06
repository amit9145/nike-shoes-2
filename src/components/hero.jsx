function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        
        <div className="hero-buttons">
          <button type="button" aria-label="Shop Now">Shop</button>
          <button type="button" className="button-transparent" aria-label="Browse Categories">Category</button>
        </div>
        <div className="online-shopping">
          <p>Available on</p>
          <div className="brand-icon">
            <img
              src="/images/amazon.png"
              alt="Amazon Logo"
            />
            <img 
              src="/images/flipkart.png"
              alt="Flipkart Logo"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Nike Shoes Hero Image" />
      </div>
    </main>
  );
}

export default HeroSection;
