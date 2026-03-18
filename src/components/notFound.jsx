import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center text-[#2D2D2D] px-4 selection:bg-[#2D2D2D] selection:text-white"
    >
      {/* Elemento Decorativo: O "L" em background sutil */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-playfair text-[30rem] md:text-[50rem] opacity-[0.02] select-none">L</span>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-playfair text-[7rem] md:text-[12rem] leading-none mb-2 italic font-light">
            404
          </h1>
          <div className="h-[1px] w-16 bg-[#2D2D2D] mx-auto mb-8 opacity-30" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="font-playfair text-xl md:text-2xl mb-4 uppercase tracking-[0.3em]">
            Fora de Curadoria
          </h2>
          <p className="font-inter text-xs md:text-sm max-w-xs mx-auto mb-12 text-gray-500 leading-relaxed tracking-widest">
            Este link não passou pelo nosso filtro estético. 
            Vamos retornar ao que realmente importa?
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="group relative inline-flex items-center justify-center px-12 py-4 font-inter text-[10px] uppercase tracking-[0.4em] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full border border-[#2D2D2D] opacity-20"></span>
            <span className="absolute inset-0 w-0 h-full bg-[#2D2D2D] transition-all duration-500 ease-in-out group-hover:w-full"></span>
            <span className="relative transition-colors duration-500 group-hover:text-[#FAF9F6]">
              Voltar ao Início
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Rodapé sutil */}
      <div className="absolute bottom-10 font-inter text-[9px] uppercase tracking-[0.6em] opacity-30">
        Larissa Teodoro — Estética & Estratégia
      </div>
    </motion.div>
  );
};

export default NotFound;