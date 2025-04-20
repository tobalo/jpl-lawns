import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import InstagramFeed from './components/InstagramFeed';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <InstagramFeed />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;