import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Começa invisível e um pouco abaixo
      whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela, sobe e aparece
      viewport={{ once: true, margin: "-100px" }} // Anima apenas uma vez
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] // Um movimento "premium" e suave
      }}
    >
      {children}
    </motion.div>
  );
}