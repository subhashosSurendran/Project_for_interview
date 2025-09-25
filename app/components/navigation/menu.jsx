"use client";
import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react"; // Rename icon import
import "../../custom_scss/navigation/menu.scss";
import Image from "next/image";
import logo from "../../images/bitcoin-coin-exchange-finance-money-currency-svgrepo-com 1.png";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <Image src={logo} alt="BitNow" width={40} height={40} />
        <span>BitNow</span>
      </div>

      {/* Desktop Menu */}
      <ul className="navbar__links">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Page</li>
        <li>News</li>
        <li>Contact Us</li>
      </ul>

      {/* Desktop Button */}
      <div className="navbar__btn">
        <button>Get Started</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="navbar__mobile">
          <ul>
            <li className="active">Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Page</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
          <button>Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
