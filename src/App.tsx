import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ImageCarousel from './components/ImageCarousel';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Projects />
      <ImageCarousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;