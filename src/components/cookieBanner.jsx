import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostra o banner após 3 segundos para não atrapalhar o Hero
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-10 left-10 z-[200] max-w-sm bg-base border border-authority/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md cursor-none"
        >
          <div className="noise opacity-10" />
          
          <h3 className="text-authority font-display text-xl italic mb-4">Privacidade & Experiência</h3>
          <p className="text-authority/60 text-[11px] leading-relaxed mb-6 uppercase tracking-wider">
            Utilizamos tecnologias de rastreamento para otimizar sua experiência e analisar nosso tráfego de acordo com nossa curadoria.
          </p>
          
          <div className="flex gap-4">
            <button 
              onClick={handleAccept}
              className="flex-1 bg-authority text-base text-[10px] font-bold uppercase tracking-widest py-3 rounded-full hover:bg-accent transition-colors duration-500"
            >
              Aceitar Tudo
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-authority/40 text-[9px] font-bold uppercase tracking-widest hover:text-authority transition-colors"
            >
              Recusar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}