import React from "react";

function HeroSection() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        background: "url(/images/hero.jpg) no-repeat center center/cover",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      <div className="hero-content">
        <h1>Transforming Agriculture Through Innovation</h1>
        <p>Smart farming solutions and agritech services across Nigeria.</p>
        <a href="#contact" className="btn">Get Started</a>
      </div>
    </section>
  );
}

export default HeroSection;
