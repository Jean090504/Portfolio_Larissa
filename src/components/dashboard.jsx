import React from 'react';

export default function Dashboard() {
  const stats = [
    { label: "Views Geradas", value: "2.5M+", color: "text-authority" },
    { label: "Engajamento", value: "+45%", color: "text-accent" },
    { label: "Projetos", value: "50+", color: "text-authority" },
  ];

  return (
    // Mudamos bg-zinc-900 para bg-soft (o cinza pastel)
    <section className="bg-soft py-24 border-y border-authority/5">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <p className="text-authority/40 uppercase text-[10px] tracking-[0.3em] font-bold mb-4">{stat.label}</p>
            <h3 className={`text-6xl font-display italic ${stat.color}`}>
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}