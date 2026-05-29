import { motion } from 'motion/react';
import { projects, Project } from '../../data/projects';

interface WorkProps {
  onProjectSelect: (project: Project) => void;
}

export default function Work({ onProjectSelect }: WorkProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif text-cream tracking-tight"
          >
            Selected <span className="italic">Works</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px bg-gold/20 mt-4"
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-cream/40 font-sans"
        >
          04 Projects Collection
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
            onClick={() => onProjectSelect(project)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] image-hover-zoom mb-8 bg-cherry/20 border border-beige">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span className="bg-cream text-burgundy text-[10px] py-2 px-4 uppercase tracking-[0.2em] font-medium shadow-2xl">
                  Explore Project
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-[0.34em] text-gold font-sans block mb-2 font-medium">
                  {project.id} — {project.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-cream group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                  {project.title}
                </h3>
              </div>
              <div className="pt-2">
                <p className="text-xs text-cream/40 max-w-[200px] text-right font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
