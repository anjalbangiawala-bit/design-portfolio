import { motion } from 'motion/react';

const personalPhoto = "https://i.ibb.co/fYrLKWPQ/IMG-20260214-WA0002.jpg";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-32 items-center py-12 md:py-0">
      <div className="md:w-1/2 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-square md:aspect-[4/5] p-1 border border-gold/20"
        >
          <div className="w-full h-full bg-stone-900 relative group overflow-hidden">
            <img 
              src={personalPhoto} 
              alt="Anjal Bangiawala Portrait"
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
              style={{ imageRendering: 'auto' }}
            />
            <div className="absolute inset-0 bg-burgundy/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </motion.div>
      </div>

      <div className="md:w-1/2 order-1 md:order-2">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: -0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.6em] text-gold mb-12 block font-medium"
        >
          Creative Philosophy
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif text-cream mb-12 leading-[0.9] tracking-tighter"
        >
          Pure <span className="italic">Form</span>, Timeless <span className="italic">Identity</span>.
        </motion.h2>

        <div className="space-y-8 text-cream/70 font-light leading-relaxed text-base md:text-xl max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I am Anjal Bangiawala, a logo designer dedicated to the art of the minimal mark. I believe that a great logo isn't just about what you see, but what you feel—the heartbeat of a brand's character captured in a single, simple form.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            My work is driven by a deep fascination with typography and the power of geometric precision. I translate complex brand concepts into distinctive visual language, building foundations that allow stories to unfold naturally.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-16 border-t border-beige pt-12"
        >
          <div className="flex flex-col">
            <span className="text-gold text-4xl font-serif mb-2 italic">Minimal</span>
            <span className="text-cream/40 text-[10px] uppercase tracking-widest font-medium">Character</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gold text-4xl font-serif mb-2 italic">Refined</span>
            <span className="text-cream/40 text-[10px] uppercase tracking-widest font-medium">Detail</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gold text-4xl font-serif mb-2 italic">Impact</span>
            <span className="text-cream/40 text-[10px] uppercase tracking-widest font-medium">Visual</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
