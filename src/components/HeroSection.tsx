import React from 'react';
import { HeroSectionProps } from '../types';

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "YOUR FEET DESERVE THE BEST",
  description = "YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.",
  shopButtonText = "Shop",
  categoryButtonText = "Category",
  availableOnText = "Available on",
  brandIcons = [
    { src: "/images/amazon.png", alt: "Amazon Logo" },
    { src: "/images/flipkart.png", alt: "Flipkart Logo" }
  ],
  heroImageSrc = "/images/hero-image.png",
  heroImageAlt = "Nike Shoes Hero Image"
}) => {
  return (
    <main className="hero container">
      <div className="hero-container">
        <h1>{title}</h1>
        <p>{description}</p>
        
        <div className="hero-buttons">
          <button type="button" aria-label="Shop Now">
            {shopButtonText}
          </button>
          <button type="button" className="button-transparent" aria-label="Browse Categories">
            {categoryButtonText}
          </button>
        </div>
        
        <div className="online-shopping">
          <p>{availableOnText}</p>
          <div className="brand-icon">
            {brandIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <img src={heroImageSrc} alt={heroImageAlt} />
      </div>
    </main>
  );
};

export default HeroSection;
