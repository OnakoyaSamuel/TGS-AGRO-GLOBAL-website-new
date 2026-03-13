import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <section id="about" className="section">
        <h2 className="section-title">About Us</h2>
        <p className="center-text">
          TGS AGRO GLOBAL LIMITED delivers modern agricultural solutions,
          professional farm consultancy, and technology-driven farming systems.
        </p>
      </section>

      <section id="services" className="section light-bg">
        <h2 className="section-title">Our Services</h2>
        <div className="services">
          <div className="card">
            <h3>Agricultural Consultancy</h3>
            <p>Professional farm planning and agribusiness support.</p>
          </div>
          <div className="card">
            <h3>Smart Farming Solutions</h3>
            <p>Technology-powered systems for higher productivity.</p>
          </div>
          <div className="card">
            <h3>Training & Capacity Building</h3>
            <p>Empowering farmers with modern agricultural skills.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Contact Us</h2>
        <p className="center-text">
          Lagos, Nigeria <br />
          Phone: 08057388145 <br />
          Email: info@tgsagroglobal.com
        </p>
      </section>

      <Footer />

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <a href="https://wa.me/2348057388145" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="tel:08057388145" className="call-btn">Call</a>
      </div>
    </>
  );
}

export default App;
