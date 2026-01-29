function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-container">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </p>
      
      <div className="hero-buttons">
      <button>Shop</button>
      <button className="button-transparent">category</button>
      </div>
      <div className="online-shopping">
        <p>avaible on</p>
        <div className="brand-icon">
          <img
            src="\images\amazon.png"
            alt="amazon-logo"/>
          <img 
          src="/images/flipkart.png"/>
        </div>
      </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
}

export default HeroSection;
