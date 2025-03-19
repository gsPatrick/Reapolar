import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import WhatsAppCTA from './components/WhatsAppCTA/WhatsAppCTA';
import Testimonials from './components/Testimonials/Testimonials';
import NewsletterCTA from './components/NewsletterCTA/NewsletterCTA';
import Footer from './components/Footer/Footer';

// ... outros imports ...

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <WhatsAppCTA />
      <Testimonials />
      <NewsletterCTA />
      <Footer />
      {/* ... restante do conteúdo da sua landing page ... */}
    </>
  );
}

export default App;