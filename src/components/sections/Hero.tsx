import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroBg from './images/luxury_hero_bg_1779088280899.png';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 pt-20">
      {/* Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-burgundy"
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        style={{ backgroundImage: `url(${heroBg})` }}
        className="absolute inset-0 z-0 bg-cover bg-center grayscale"
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left: Dominant Name */}
        <div className="col-span-12 md:col-span-8 text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] md:text-[14vw] font-serif leading-[1] tracking-tight text-cream mb-4 pointer-events-none select-none text-left"
          >
            <span className="block">Anj<span className="italic">a</span>l</span>
            <span className="block">Bangi<span className="italic">a</span>w<span className="italic">a</span>la</span>
          </motion.h1>
        </div>

        {/* Right: Info Area */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right gap-8 self-end md:pb-24">
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex flex-col gap-4"
           >
              <h2 className="text-gold font-serif italic text-2xl md:text-5xl leading-tight">
                Logo Designer
              </h2>
              <div className="h-px w-12 bg-gold/30 md:ml-auto" />
              <p className="text-sm md:text-base font-light text-cream/50 leading-relaxed tracking-wide max-w-xs">
                Designing logos that leave a lasting impression.
              </p>
           </motion.div>

           <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.5 }}
              className="hidden md:block"
           >
              <span className="font-serif text-8xl opacity-10">AB</span>
           </motion.div>
        </div>
      </div>

      {/* Bottom Area: Refined Footer */}
      <div className="relative z-10 max-w-7xl w-full mx-auto mt-auto pb-12 md:pb-16 pt-8 border-t border-gold/10">
        <div className="flex justify-between items-center px-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a 
              href="#work" 
              className="group flex items-center gap-6"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold font-medium">Explore Work</span>
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-px bg-gold/30 group-hover:w-20 transition-all duration-700 ease-out" />
                <ArrowRight className="w-4 h-4 ml-2 text-gold group-hover:translate-x-1 transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-4 text-right"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium text-gold/60 font-serif italic">
               Logo Portfolio
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
