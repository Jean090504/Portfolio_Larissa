import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsApp() {
  // Substitua o '5511999999999' pelo número real dela
  const numero = "+5511980791619";
  const mensagem = encodeURIComponent("Olá Larissa! Vi seu portfólio e gostaria de saber mais sobre sua curadoria estratégica.");
  const whatsappUrl = `https://wa.me/${numero}?text=${mensagem}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-authority text-base p-4 rounded-full shadow-2xl flex items-center justify-center cursor-none group"
    >
      {/* Efeito de Ondas (Pulse) */}
      <span className="absolute inset-0 rounded-full bg-authority animate-ping opacity-20"></span>
      
      <MessageCircle size={24} className="relative z-10" />
      
      {/* Etiqueta flutuante que aparece no hover */}
      <span className="absolute right-16 bg-authority text-base text-[10px] uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Larissa
      </span>
    </motion.a>
  );
}