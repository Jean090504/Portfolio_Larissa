import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-6 backdrop-blur-md bg-base/60 border-b border-authority/5">
      {/* Logo Minimalista */}
      <div className="flex items-center gap-2">
        <span className="text-authority font-display text-2xl font-black tracking-tighter uppercase">
          Larissa Felix<span className="text-accent">.</span>
        </span>
      </div>

      {/* Links de Navegação */}
      <div className="hidden md:flex items-center gap-12">
        {['Trabalhos', 'Sobre mim'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-authority/60 text-[11px] font-bold uppercase tracking-[0.3em] hover:text-authority transition-colors cursor-none"
          >
            {item}
          </a>
        ))}
        
        {/* Botão de CTA (Call to Action) */}
        <a 
          href="#contact"
          className="bg-authority text-base text-[10px] font-bold px-8 py-3 rounded-full hover:bg-authority/90 transition-all uppercase tracking-widest cursor-none shadow-sm"
        >
          Vamos Conversar
        </a>
      </div>
    </nav>
  );
}