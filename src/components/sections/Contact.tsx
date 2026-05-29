import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const emailAddress = "anjalbusiness23@gmail.com";
  
  // State for form inputs (for prefilled client-side email)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [overview, setOverview] = useState('');
  
  // Copy state
  const [copied, setCopied] = useState(false);

  // Clipboard copy handler
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers or if permission is denied
      const textArea = document.createElement("textarea");
      textArea.value = emailAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Form submit handler - Dynamically generates mailto envelope client-side
  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(
      name.trim() 
        ? `Design Inquiry from ${name}` 
        : "Direct Brand Design Inquiry"
    );
    
    const emailBody = `Hello Anjal,\n\n` +
      `My name is ${name.trim() || '[Your Name]'} and I would love to collaborate on a design project.\n\n` +
      `Brief Overview of my vision:\n${overview.trim() || '[Your Vision]'}\n\n` +
      `You can read more guidelines or follow up with me at: ${email.trim() || '[Your Email]'}\n\n` +
      `Warm regards,\n${name.trim() || 'Client'}`;
      
    const body = encodeURIComponent(emailBody);
    
    // Triggers local email app with complete context prefilled
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Contact Information & Direct Buttons */}
        <div id="contact-info-panel" className="lg:w-5/12 flex flex-col justify-between">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold/50 mb-8 block font-sans"
            >
              Get In Touch
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-[80px] font-serif text-cream mb-10 tracking-tighter leading-[1.1]"
            >
              <span className="block opacity-60">Let's</span>
              <span className="block text-gold italic font-medium">Create</span>
              <span className="block opacity-60">Something</span>
              <span className="block text-gold italic font-medium">Memorable.</span>
            </motion.h2>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-full bg-gold/20 origin-left mb-12"
            />
          </div>

          {/* Premium Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-white/5 bg-cherry/10 rounded-lg p-6 md:p-8 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Mail size={80} className="text-gold" />
            </div>

            <div className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-3">
              Direct Channels
            </div>

            <h3 className="text-xl md:text-2xl font-serif text-cream select-all mb-6 break-all">
              {emailAddress}
            </h3>

            {/* Micro Dual Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              
              {/* Clicking this button triggers the local email client immediately */}
              <motion.a
                id="direct-mailto-link"
                href={`mailto:${emailAddress}?subject=Brand Design Partnership`}
                whileHover={{ scale: 1.02, backgroundColor: "#C3A15E", color: "#6E1023" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 border border-gold/40 hover:border-gold/0 text-gold bg-transparent py-4 rounded font-sans uppercase tracking-widest text-[9px] md:text-[10px] font-semibold transition-all duration-300"
              >
                Inquire Direct 
                <ArrowUpRight size={14} />
              </motion.a>

              {/* Clicking this button copies the email to clipboard */}
              <motion.button
                id="copy-email-button"
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 238, 232, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 border border-white/10 text-cream/85 bg-transparent py-4 rounded font-sans uppercase tracking-widest text-[9px] md:text-[10px] transition-all duration-300 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span 
                      key="copied"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-1.5 text-gold"
                    >
                      Copied Address <Check size={13} />
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="copy"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-1.5 text-cream/70"
                    >
                      Copy Address <Copy size={13} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              
            </div>

            {/* Custom Humanized Availability Detail */}
            <div className="flex flex-col sm:flex-row justify-between pt-4 border-t border-white/5 gap-3 text-[9px] uppercase tracking-wider text-cream/45 font-sans font-light">
              <div>Availability: Booking for Q3/Q4</div>
              <div>Response Time: Within 24 hours</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Draft Composer (Saves context & sets mail client) */}
        <div id="contact-form-panel" className="lg:w-7/12 bg-cherry/20 p-8 md:p-16 border border-beige rounded-lg backdrop-blur-sm shadow-xl relative">
          <div className="absolute top-0 right-0 p-8 text-[9px] uppercase tracking-widest text-gold/30 font-mono">
            Client Brief Draft
          </div>
          
          <form className="space-y-8" onSubmit={handleEmailSubmit}>
            <div className="group">
              <label className="text-[10px] uppercase tracking-widest text-cream/40 mb-3 block group-focus-within:text-gold transition-colors font-medium">
                Your Name
              </label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold font-serif text-xl md:text-2xl transition-all text-cream placeholder-cream/20" 
                placeholder="Ex. Julianne"
              />
            </div>
            
            <div className="group">
              <label className="text-[10px] uppercase tracking-widest text-cream/40 mb-3 block group-focus-within:text-gold transition-colors font-medium">
                Email Address
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold font-serif text-xl md:text-2xl transition-all text-cream placeholder-cream/20" 
                placeholder="hello@example.com"
              />
            </div>

            <div className="group">
              <label className="text-[10px] uppercase tracking-widest text-cream/40 mb-3 block group-focus-within:text-gold transition-colors font-medium">
                Brief Overview
              </label>
              <textarea 
                rows={4}
                required
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold font-serif text-xl md:text-2xl transition-all resize-none text-cream placeholder-cream/20 leading-relaxed" 
                placeholder="Tell me about your lifestyle brand or vehicle vision..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01, backgroundColor: "#C3A15E", color: "#6E1023" }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-cream text-burgundy py-5 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold transition-all duration-300 rounded shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Draft & Send inquiry via Mail 
              <Mail size={14} className="ml-1" />
            </motion.button>
          </form>
        </div>

      </div>
    </div>
  );
}
