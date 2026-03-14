import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="TGS AGRO GLOBAL Logo" />
        <span>TGS AGRO GLOBAL LIMITED</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
