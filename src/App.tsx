import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

const App: React.FC = () => {
  const navItems = [
    { label: 'Menu', href: '#', ariaLabel: 'Menu' },
    { label: 'Location', href: '#', ariaLabel: 'Location' },
    { label: 'About', href: '#', ariaLabel: 'About' },
    { label: 'Contact', href: '#', ariaLabel: 'Contact' }
  ];

  return (
    <ErrorBoundary>
      <div className="app">
        <Navbar
          brandLogoSrc="/images/brand_logo.png"
          brandLogoAlt="Nike Brand Logo"
          navItems={navItems}
          loginButtonText="Login"
        />
        <HeroSection />
      </div>
    </ErrorBoundary>
  );
};

export default App;
