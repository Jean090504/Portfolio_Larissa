import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Services() {
  const packages = [
    {
      title: "Essential Curation",
      price: "Sob consulta",
      features: ["Gestão de Feed (12 posts/mês)", "Curadoria de Imagem & Estética", "Copywriting Estratégico", "Relatório de Insights"],
      highlight: false
    },
    {
      title: "Authority Scaling",
      price: "Mais procurado",
      features: ["Gestão Full Stack (Feed + Reels)", "Direção Criativa para Vídeos", "Estratégia de Posicionamento Premium", "Análise de Dados Avançada"],
      highlight: true
    },
    {
      title: "VIP Strategy",
      price: "Exclusivo",
      features: ["Consultoria de Branding Pessoal", "Produção de Conteúdo On-site", "Gestão de Crise & Reputação", "Suporte 24/7 via WhatsApp"],
      highlight: false
    }
  ];

  return (
    <section id="services" className="bg-soft py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Investimento</span>
          <h2 className="text-authority font-display text-5xl italic mt-4">Soluções de Posicionamento</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-3xl border ${pkg.highlight ? 'border-accent bg-base shadow-xl' : 'border-authority/5 bg-base/40'} flex flex-col`}
            >
              <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">{pkg.price}</p>
              <h3 className="text-authority font-display text-3xl mb-8 italic">{pkg.title}</h3>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-authority/70 text-sm font-light">
                    <Check size={14} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-full text-[10px] font-bold uppercase tracking-widest text-center transition-all ${pkg.highlight ? 'bg-authority text-base hover:bg-authority/90' : 'border border-authority/20 text-authority hover:bg-authority hover:text-base'}`}
              >
                Solicitar Proposta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}