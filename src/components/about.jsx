import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-soft py-32 px-10 border-y border-authority/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Lado Esquerdo: A Foto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] bg-accent rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-none"
        >
          {/* CORREÇÃO: Usando caminho direto. Certifique-se de que a foto está na pasta 'public' com este nome */}
          <img 
            src="/foto-larissa.jpg" 
            alt="Larissa Teodoro, Estrategista de Social Media"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-authority/10 mix-blend-multiply"></div>
        </motion.div>

        {/* Lado Direito: O Texto de Posicionamento */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            The Visionary
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-authority font-display text-4xl md:text-5xl italic leading-tight mb-8"
          >
            Curadoria visual é a nova <br /> 
            <span className="text-accent underline decoration-1 underline-offset-8">moeda de confiança.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-authority/70 text-sm md:text-base font-light leading-relaxed"
          >
            <p>
              Em um mundo saturado de informação, a diferença entre o ruído e a influência é a <strong>estratégia</strong>. Com background em produção audiovisual e análise de dados, meu trabalho foca em transformar feeds em ecossistemas de autoridade.
            </p>
            <p>
              Não entrego apenas posts; entrego <strong>posicionamento</strong>. Minha missão é garantir que cada frame e cada movimento de marca reflita o valor premium que você oferece ao mercado.
            </p>
          </motion.div>

          {/* Selos de Expertise */}
          <div className="mt-10 flex gap-8 border-t border-authority/10 pt-8">
            <div>
              <p className="text-authority font-bold text-xs uppercase tracking-widest">Strategy</p>
              <p className="text-authority/50 text-[10px]">Data Driven Insights</p>
            </div>
            <div>
              <p className="text-authority font-bold text-xs uppercase tracking-widest">Visuals</p>
              <p className="text-authority/50 text-[10px]">High-End Production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}