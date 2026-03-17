import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import dos Componentes
import CustomCursor from './components/cursor.jsx';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Dashboard from './components/dashboard.jsx';
import About from './components/about.jsx';
import Methodology from './components/methodology.jsx';
import VideoGrid from './components/videogrid.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';
import ScrollReveal from './components/scrollReveal.jsx';
import Footer from './components/footer.jsx';
import WhatsApp from './components/whatsapp.jsx';
import CookieBanner from './components/cookieBanner.jsx';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-base flex items-center justify-center"
          >
            <div className="noise" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-authority font-display text-3xl md:text-4xl italic tracking-tighter uppercase">
                Teodoro <span className="text-accent">—</span> Curation.
              </h2>
              <div className="mt-4 h-[1px] w-12 bg-accent mx-auto overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="h-full w-full bg-authority"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-base cursor-none relative"
          >
            <div className="noise" />
            
            <CustomCursor /> 
            <Navbar />
            <WhatsApp />
            <CookieBanner /> 
            
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  
                  <ScrollReveal>
                    <Dashboard />
                  </ScrollReveal>
                  
                  <ScrollReveal>
                    <About />
                  </ScrollReveal>

                  <ScrollReveal>
                    <Methodology />
                  </ScrollReveal>

                  <ScrollReveal>
                    <VideoGrid />
                  </ScrollReveal>

                  <ScrollReveal>
                    <Services />
                  </ScrollReveal>

                  <ScrollReveal>
                    <Contact />
                  </ScrollReveal>
                  
                  <Footer />
                </main>
              } />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;