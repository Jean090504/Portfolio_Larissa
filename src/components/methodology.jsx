import React from 'react';
import { Search, PenTool, TrendingUp } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      id: "01",
      title: "Data Audit",
      desc: "Análise técnica de métricas e comportamento de audiência para identificar lacunas de autoridade.",
      icon: <Search size={24} />
    },
    {
      id: "02",
      title: "Visual Curation",
      desc: "Desenvolvimento de uma estética exclusiva que comunica o valor premium da marca em cada frame.",
      icon: <PenTool size={24} />
    },
    {
      id: "03",
      title: "Strategic Scaling",
      desc: "Distribuição inteligente e performance para transformar visualizações em conexões reais.",
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section className="bg-base py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step) => (
            <div key={step.id} className="group flex flex-col items-start border-l border-authority/10 pl-8 hover:border-accent transition-colors duration-500">
              <span className="text-accent font-display text-5xl italic opacity-30 mb-6">{step.id}</span>
              <div className="text-authority/40 mb-4 group-hover:text-authority transition-colors">
                {step.icon}
              </div>
              <h3 className="text-authority font-display text-2xl mb-4 italic">{step.title}</h3>
              <p className="text-authority/60 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}