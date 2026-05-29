import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects, Project } from './data/projects';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ProjectModal from './components/ui/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen bg-burgundy selection:bg-cream selection:text-burgundy text-cream">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 md:py-32 bg-cherry/10 border-y border-beige">
          <About />
        </section>
        
        <section id="work" className="py-20 md:py-32">
          <Work onProjectSelect={setSelectedProject} />
        </section>
        
        <section id="contact" className="py-20 md:py-40">
          <Contact />
        </section>
      </main>

      <footer className="py-20 border-t border-beige text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-serif italic text-gold">Anjal Bangiawala</p>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">Logo Designer</p>
          </div>
          


          <p className="text-[10px] font-light opacity-30 uppercase tracking-widest italic leading-relaxed">
            Crafting minimal marks<br />with timeless character.
          </p>
        </div>
        <p className="mt-20 text-[9px] uppercase tracking-[0.4em] opacity-20">© 2026 AB Design. All rights reserved.</p>
      </footer>

      {/* Project Expansion / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
