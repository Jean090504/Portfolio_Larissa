import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoGrid() {
  const projects = [
    { 
      id: 1, 
      title: "Cobertura Cozy Café", 
      category: "Reels / Viral", 
      img: "/cozy.mp4" 
    },
    { 
      id: 2, 
      title: "Cobertura do Café com Cores", 
      category: "Reels / Viral", 
      img: "/cozyCobertura.mp4" 
    },
    { 
      id: 3, 
      title: "Divulgação de Evento", 
      category: "Direção Criativa", 
      img: "/videoBoneco.mp4" 
    },
  ];

  return (
    <section id="work" className="bg-base py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-authority font-display text-4xl mb-16 italic uppercase tracking-tighter">
          Cases de Sucesso<span className="text-accent">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative aspect-[9/16] bg-soft overflow-hidden rounded-3xl cursor-none shadow-sm"
            >
              {/* O Vídeo principal que ocupa todo o card */}
              <video 
                src={project.img} 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              {/* Overlay com as informações */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-base/90 via-transparent to-transparent">
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {project.category}
                </p>
                <h4 className="text-authority text-3xl font-display italic uppercase leading-none">
                  {project.title}
                </h4>

                {/* Botão Play que surge no hover */}
                <div className="mt-6 w-12 h-12 bg-authority rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-lg">
                  <Play size={18} fill="#FAF9F6" className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}