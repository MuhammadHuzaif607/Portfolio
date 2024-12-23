'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false); // To open mobile menu

  //   For desktop function
  const ToggleHandler = () => {
    setIsToggle(!isToggle);
  };

  //   For mobile devices function
  const mobileToggler = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <header className="header-wrapper">
      <div className="container">
        <nav className="header-nav">
          <button className="toggle-menu-btn" onClick={ToggleHandler}>
            <span></span>
          </button>

          <div className={'toggle-menu ' + (isToggle ? 'show' : '')}>
            <h6 id="phone" className="mb-0">
              Phone:
            </h6>
            <p>+123 456 789 01</p>
            <p>+123 456 789 02</p>
            <div className="mt-3">
              <h6 id="email" className="mb-0">
                Email:
              </h6>
              <p>mhuzaif523@gmail.com</p>
            </div>
          </div>
          <button className="nav-toggle " onClick={mobileToggler}>
            <span></span>
          </button>
          <ul className={'nav-list ' + (isMobileMenu ? 'show' : '')}>
            <li className="nav-list-item">
              <Link href="/#">About</Link>
            </li>
            <li className="nav-list-item">
              <Link href="/#services">Services</Link>
            </li>
          </ul>
        </nav>
        <div className="header-logo">
          <Link href="/">
            <h3 className="fw-semi-bold uppercase">Portfolio</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
