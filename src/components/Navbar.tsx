import React from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  brandLogoSrc: string;
  brandLogoAlt: string;
  navItems: NavItem[];
  loginButtonText: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brandLogoSrc,
  brandLogoAlt,
  navItems,
  loginButtonText
}) => {
  return (
    <nav>
      <div>
        <img src={brandLogoSrc} alt={brandLogoAlt} />
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} aria-label={item.ariaLabel}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button type="button" aria-label="Login">
        {loginButtonText}
      </button>
    </nav>
  );
};

export default Navbar;
