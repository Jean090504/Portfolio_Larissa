import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-accent/30 py-40 text-center">
      <h2 className="text-authority font-display text-5xl md:text-7xl italic uppercase mb-12 leading-none">
        Pronto para escalar <br /> sua empresa ?
      </h2>
      <a 
        href="mailto:felixteodorolarissa@gmail.com" 
        className="inline-block bg-authority text-base font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-xs"
      >
        ENVIAR EMAIL
      </a>
    </section>
  );
}