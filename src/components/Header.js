import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="%PUBLIC_URL%/images/logo.png" alt="TGS AGRO GLOBAL LIMITED Logo" />
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
