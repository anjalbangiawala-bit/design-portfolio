import { motion } from 'motion/react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <a href="#home" className="text-cream text-2xl font-serif italic tracking-tighter hover:text-gold transition-colors">
          AB
        </a>
      </div>

      <div className="flex gap-8 md:gap-12 pointer-events-auto bg-burgundy/40 backdrop-blur-md px-6 py-3 border border-beige rounded-full">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-cream text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
