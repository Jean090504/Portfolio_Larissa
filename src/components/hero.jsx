import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-base flex items-center justify-center">
      {/* Vídeo de fundo */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-30 grayscale-[20%]"
      >
        <source src="/background-aesthetic.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-base/40 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-authority/50 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block"
        >
          Social Media Strategist 
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-display text-authority leading-none tracking-tight"
        >
          Digital <span className="italic font-normal text-accent font-serif tracking-tighter">Curation.</span>
        </motion.h1>

        {/* Parágrafo corrigido e sem comentários internos */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="!text-[#2D2D2D] mt-8 text-base md:text-xl font-bold max-w-2xl mx-auto leading-relaxed px-4 relative z-20"
          style={{ color: '#2D2D2D' }}
        >
          Elevando a presença digital de marcas premium através de uma <br className="hidden md:block" />
          narrativa visual autêntica e estratégica.
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-10 text-authority/40">
        <p className="text-[10px] font-bold uppercase tracking-widest border-l border-authority/20 pl-4">
          Posicionamento <br /> & Autoridade
        </p>
      </div>
    </section>
  );
}