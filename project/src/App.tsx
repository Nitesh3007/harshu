import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Message from './components/Message';
import Cake from './components/Cake';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Message />
        <Gallery />
        <Cake />
      </main>
      <Footer />
      
      <div 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <ChevronUp size={24} />
      </div>
    </div>
  );
};

export default App;