import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-base py-20 px-10 border-t border-authority/5 text-authority">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        
        <div>
          {/* Nome de fundo com opacidade baixa para o toque aesthetic */}
          <h2 className="font-display text-7xl md:text-9xl italic tracking-tighter opacity-10 uppercase pointer-events-none">
            Teodoro
          </h2>
          
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-60">
              © {year} Todos os direitos reservados Larissa Felix
            </p>
            
            {/* Crédito do Desenvolvedor - Ajustado para a paleta do site */}
            <div className="text-[10px] font-medium mt-2 uppercase tracking-widest opacity-40">
              Desenvolvido por 
              <a 
                href="https://www.linkedin.com/in/jeancostadev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-authority hover:text-accent transition-all border-b border-authority/20 hover:border-accent pb-0.5 ml-2 cursor-none"
              >
                Jean Costa
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-12 text-[11px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-accent transition-colors cursor-none">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors cursor-none">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors cursor-none">WhatsApp</a>
        </div>

      </div>
    </footer>
  );
}