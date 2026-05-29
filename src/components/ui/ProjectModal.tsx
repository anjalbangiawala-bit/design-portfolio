import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, PenTool, Layers, Check, Compass, Box, Eye, Sparkles } from 'lucide-react';
import { Project, CaseStudyPage } from '../../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = project.pages;

  // Scroll to top of modal contents when page changes
  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0 });
  }, [activePage]);

  const handleNext = () => {
    if (activePage < pages.length - 1) {
      setActivePage(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (activePage > 0) {
      setActivePage(prev => prev - 1);
    }
  };

  const currentPage = pages[activePage];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-burgundy flex flex-col overflow-hidden text-cream"
    >
      {/* 1. Header Navigation Bar */}
      <div className="w-full z-[110] px-6 md:px-12 py-6 flex justify-between items-center bg-burgundy/90 backdrop-blur-md border-b border-white/10 shrink-0">
        <div className="flex items-center gap-6">
          <button 
            onClick={onClose}
            className="font-serif italic text-xl md:text-2xl hover:text-gold transition-colors tracking-tight text-left"
          >
            {project.title}
          </button>
          
          {/* Progress Indicators */}
          <div className="hidden sm:flex gap-1.5 items-center">
            {pages.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePage(i)}
                className="group flex items-center relative py-2"
                title={`Go to page ${i + 1}`}
              >
                <div 
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === activePage 
                      ? 'w-10 bg-gold' 
                      : i < activePage 
                        ? 'w-4 bg-gold/50 hover:bg-gold' 
                        : 'w-4 bg-white/20 hover:bg-white/40'
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-mono hidden md:inline">
            Active Study Collection
          </span>
          <button
            onClick={onClose}
            className="p-3 bg-cream text-burgundy rounded-full hover:scale-105 active:scale-95 transition-transform"
            aria-label="Close Case Study"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* 2. Main Case Study Container */}
      <div 
        ref={containerRef} 
        className="flex-1 overflow-y-auto overflow-x-hidden luxury-scroller relative pb-32"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24"
          >
            
            {/* Stage Title and Topic Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 border-b border-white/5 pb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold">
                    STAGE 0{activePage + 1} //
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40">
                    {currentPage.contentLabel}
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-serif tracking-tight leading-none text-cream">
                  {currentPage.title}
                </h1>
              </div>
              <div className="md:text-right">
                <p className="text-[9px] font-mono uppercase tracking-widest text-cream/30">Case Presentation System</p>
                <div className="text-sm font-sans text-gold tracking-[0.15em] uppercase font-medium mt-1">{project.subtitle}</div>
              </div>
            </div>

            {/* DYNAMIC PRESENTATION BY PAGE TYPE */}
            <div className="min-h-[450px]">
              {currentPage.type === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                  {/* Left: Beautiful Immersive Image - constitutes ~75% of total area width */}
                  <div className="lg:col-span-9 flex flex-col justify-between">
                    <div className="relative aspect-[16/10] bg-white/5 border border-white/10 overflow-hidden group rounded-lg shadow-2xl">
                      <motion.img 
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1.0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={project.image} 
                        alt={`${project.title} Concept`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                      
                      {/* Sub-label in image */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        <span className="text-[9px] uppercase tracking-widest font-mono text-white/80">
                          Primary Branding Showcase
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Presentation Prose - Editorial Sidebar */}
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    <div className="h-[2px] w-12 bg-gold mb-8" />
                    <p className="text-lg md:text-xl font-sans text-gold/95 font-normal leading-relaxed tracking-wide mb-6">
                      {currentPage.description}
                    </p>
                    
                    {currentPage.additionalParagraphs && currentPage.additionalParagraphs.length > 0 && (
                      <div className="space-y-4 text-sm md:text-base text-cream/80 font-sans font-normal leading-relaxed">
                        {currentPage.additionalParagraphs.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-6">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest text-gold/50 font-mono mb-1">Creative Director</div>
                        <div className="text-xs tracking-wider uppercase font-medium">Anjal Bangiawala</div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest text-gold/50 font-mono mb-1">Year / Era</div>
                        <div className="text-xs tracking-wider font-mono opacity-80">2026 // EST</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentPage.type === 'process' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center w-full">
                  {/* Left Content Area: Beautiful Luxury Presentation Panel - ~75% Area */}
                  <div className="lg:col-span-9 flex flex-col order-1 lg:order-1">
                    <div className="relative aspect-[16/10] w-full bg-neutral-950/80 border border-white/10 hover:border-gold/20 transition-all duration-500 flex flex-col items-center justify-center p-12 text-center group rounded-lg overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                      {currentPage.sketches?.image ? (
                        <img 
                          src={currentPage.sketches.image} 
                          alt="Detailed Process Case Sketch" 
                          className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <>
                          {/* Elegant, soft radial lighting depth - luxury-gallery-like */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950 pointer-events-none" />
                          <div className="absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent opacity-60 pointer-events-none" />

                          {/* Minimal Luxury framing lines */}
                          <div className="absolute inset-10 border border-white/5 pointer-events-none" />
                          <div className="absolute top-10 left-10 w-4 h-px bg-gold/15" />
                          <div className="absolute top-10 left-10 h-4 w-px bg-gold/15" />
                          <div className="absolute bottom-10 right-10 w-4 h-px bg-gold/15" />
                          <div className="absolute bottom-10 right-10 h-4 w-px bg-gold/15" />

                          <div className="z-10 flex flex-col items-center max-w-md px-4">
                            <h4 className="text-xs uppercase tracking-[0.35em] text-cream font-serif italic mb-6">
                              PROCESS & CONCEPTION SHEET
                            </h4>
                            
                            <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors duration-300">
                              <span className="text-[9px] font-mono text-gold/60">02</span>
                            </div>

                            <span className="text-[10px] uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded border border-gold/10 font-sans font-light mb-5">
                              Reserved for Process Image
                            </span>
                            
                            <p className="text-xs text-cream/40 leading-relaxed font-sans max-w-sm mt-2 italic font-light">
                              {currentPage.sketches?.caption}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Content Area: Elegant Explanations Sidebar - ~25% Area */}
                  <div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-2">
                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70 block mb-2">
                        Conception & Gestures
                      </span>
                      <h3 className="text-3xl md:text-4xl font-serif text-cream font-normal tracking-tight leading-tight">
                        {currentPage.title}
                      </h3>
                    </div>
                    
                    <div className="w-12 h-[1px] bg-gold/40 mb-6" />
                    
                    <p className="text-base md:text-lg font-sans text-cream/90 leading-relaxed tracking-wide mb-8 font-normal">
                      {currentPage.description}
                    </p>
                    
                    <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
                      <div>
                        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-gold/40 block mb-1.5">Creative Phase</span>
                        <span className="text-xs font-sans text-cream/60 font-light leading-relaxed">Analog Sketchboarding</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-gold/40 block mb-1.5">Production Strategy</span>
                        <span className="text-xs font-sans text-cream/60 font-light leading-relaxed">Geometric Digitalization</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentPage.type === 'primary_logo' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center w-full">
                  {/* Left Column: Large Presentation Screen (occupies ~75% width, i.e., col-span-9) */}
                  <div className="lg:col-span-9 flex flex-col">
                    <div className="w-full aspect-[16/10] bg-neutral-950/90 border border-white/5 rounded-lg relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] transition-all duration-500 hover:border-gold/15">
                      
                      {/* Soft ambient radial lighting gradient */}
                      <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                      
                      {/* Extremely delicate cropmarks inside presentation screen */}
                      <div className="absolute top-8 left-8 w-4 h-px bg-white/10 z-10" />
                      <div className="absolute top-8 left-8 h-4 w-px bg-white/10 z-10" />
                      <div className="absolute bottom-8 right-8 w-4 h-px bg-white/10 z-10" />
                      <div className="absolute bottom-8 right-8 h-4 w-px bg-white/10 z-10" />
                      
                      <motion.img 
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1.0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={currentPage.logoImage || project.image} 
                        alt="Primary Logo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Right Column: Refined text section (occupies ~25% width, i.e., col-span-3) */}
                  <div className="lg:col-span-3 flex flex-col justify-center text-left">
                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold/70 block mb-2">
                        {currentPage.contentLabel || "Presentation Case"}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-serif text-cream font-normal tracking-tight leading-tight">
                        {currentPage.title || "Primary Wordmark"}
                      </h3>
                    </div>

                    <div className="w-12 h-[1px] bg-gold/40 mb-6" />

                    <p className="text-base md:text-lg text-cream/85 font-sans font-normal leading-relaxed tracking-wide">
                      {currentPage.description}
                    </p>
                  </div>
                </div>
              )}

              {currentPage.type === 'unique_mark' && (
                <div className="w-full flex flex-col gap-10">
                  {/* Title and description header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70 block mb-2">
                        {currentPage.contentLabel || "Signature Stamp"}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-cream font-light tracking-tight animate-fade-in">
                        {currentPage.title || "Unique Mark"}
                      </h3>
                    </div>
                    <p className="max-w-xl text-xs sm:text-sm text-cream/70 font-sans font-light leading-relaxed">
                      {currentPage.description}
                    </p>
                  </div>

                  {/* 100% full-width image presentation space */}
                  <div className="w-full aspect-[16/10] bg-neutral-950/90 border border-white/5 rounded-lg relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] transition-all duration-500 hover:border-gold/15 flex items-center justify-center">
                    {/* Soft ambient radial lighting gradient */}
                    <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                    
                    {/* Unique layout cropmarks */}
                    <div className="absolute top-8 left-8 w-4 h-[1px] bg-white/15 z-10" />
                    <div className="absolute top-8 left-8 h-4 w-[1px] bg-white/15 z-10" />
                    <div className="absolute bottom-8 right-8 w-4 h-[1px] bg-white/15 z-10" />
                    <div className="absolute bottom-8 right-8 h-4 w-[1px] bg-white/15 z-10" />

                    {/* ========================================================== */}
                    {/* <!-- EDIT UNIQUE MARK IMAGE HERE MANUALLY -->               */}
                    {/* Scroll to page list in /src/data/projects.ts -> Velora      */}
                    {/* Set 'logoImage' in the 'unique_mark' object to your image URL */}
                    {/* ========================================================== */}

                    {currentPage.logoImage ? (
                      <motion.img 
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1.0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={currentPage.logoImage} 
                        alt="Unique Mark logo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* Stunningly presented empty/placeholder aesthetic for manual insertion reference */
                      <div className="flex flex-col items-center justify-center gap-4 text-center p-8 select-none">
                        <div className="w-16 h-16 rounded-full border border-dashed border-white/20 bg-white/[0.02] flex items-center justify-center text-white/40 mb-2">
                          <svg className="w-6 h-6 animate-pulse text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-mono text-gold/70 uppercase tracking-[0.25em]">
                          [ UNIQUE MARK RESERVED SPACE ]
                        </span>
                        <p className="text-[10px] font-sans text-cream/40 max-w-md leading-relaxed">
                          This stage is empty and reserved for your image. When ready, set the <code className="font-mono text-gold">logoImage</code> field inside your {project.title} dataset page setup.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentPage.type === 'core_concept' && (
                <div className="w-full flex justify-center">
                  <div className="w-full lg:w-[95%] aspect-[16/10] bg-neutral-950/90 border border-white/5 rounded-lg relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] transition-all duration-500 hover:border-gold/15">
                    {/* Soft ambient radial lighting gradient */}
                    <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                    
                    {/* Delicate interior warm lighting glow mapping the maroon aesthetics */}
                    <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

                    {/* Extremely delicate elite cropmarks inside presentation canvas */}
                    <div className="absolute top-8 left-8 w-4 h-px bg-white/10 z-10" />
                    <div className="absolute top-8 left-8 h-4 w-px bg-white/10 z-10" />
                    <div className="absolute bottom-8 right-8 w-4 h-px bg-white/10 z-10" />
                    <div className="absolute bottom-8 right-8 h-4 w-px bg-white/10 z-10" />
                    
                    {currentPage.logoImage ? (
                      <motion.img 
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1.0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={currentPage.logoImage} 
                        alt="Core Concept"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* Pure clean empty screen as requested, framed with elegance by micro details and subtle cropmarks */
                      <div className="absolute inset-0 bg-neutral-950/40" />
                    )}
                  </div>
                </div>
              )}

              {currentPage.type === 'variations' && (
                <div className="w-full flex flex-col gap-10">
                  {/* Title and description - Editorial Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70 block mb-2">
                        {currentPage.contentLabel || "Alternate Variations System"}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-cream font-light tracking-tight">
                        {currentPage.title || "Logo Variations & Palette"}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-xs md:text-sm text-cream/70 font-sans font-light leading-relaxed">
                      {currentPage.description}
                    </p>
                  </div>

                  {/* 2x2 Grid of 4 Landscape-Oriented Containers (like the 4 blue boxes in reference) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
                    {Array.from({ length: 4 }).map((_, i) => {
                      const variant = currentPage.variants?.[i];
                      if (!variant) return null;
                      return (
                        <div 
                          key={i}
                          className="rounded-lg border border-white/10 relative overflow-hidden aspect-[18/8.5] shadow-2xl transition-all duration-500 hover:border-gold/20 flex flex-col bg-neutral-950/90 group"
                        >
                          {/* Ambient radial lighting overlay */}
                          <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                          
                          {/* Elite cropmarks inside each box */}
                          <div className="absolute top-5 left-5 w-3 h-px bg-white/10 z-10" />
                          <div className="absolute top-5 left-5 h-3 w-px bg-white/10 z-10" />
                          <div className="absolute bottom-5 right-5 w-3 h-px bg-white/10 z-10" />
                          <div className="absolute bottom-5 right-5 h-3 w-px bg-white/10 z-10" />

                          {/* Render the Image if available, otherwise keep empty as requested */}
                          {(variant.image || variant.imagePlaceholder) ? (
                            <motion.img 
                              initial={{ scale: 1.05, opacity: 0 }}
                              animate={{ scale: 1.0, opacity: 1 }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              src={variant.image || variant.imagePlaceholder} 
                              alt={variant.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            /* Pure beautiful empty presentation canvas */
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-[8px] font-mono text-cream/20 uppercase tracking-widest block opacity-0 md:group-hover:opacity-60 transition-all duration-300 select-none">
                                [ Empty Variant Image Canvas ]
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Wide Horizontal Section - Reserved only for color palette & HEX codes (referenced from the brown rectangle) */}
                  <div className="w-full max-w-4xl mx-auto border border-dashed border-white/15 bg-neutral-950/45 rounded-lg p-8 flex flex-col items-center justify-center relative mt-6 min-h-[140px] shadow-xl transition-all duration-300 hover:border-gold/25">
                    
                    <div className="text-[10px] font-mono tracking-[0.3em] text-gold/60 uppercase mb-5">
                      Brand Palette
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 mb-2">
                      {(currentPage.palette || project.colors).map((color, index) => {
                        const hasColor = color && color.trim() !== "";
                        let formattedColor = color ? color.trim() : "";
                        if (hasColor && /^[0-9a-fA-F]{3,8}$/.test(formattedColor)) {
                          formattedColor = `#${formattedColor}`;
                        }
                        return (
                          <div key={index} className="flex items-center gap-3 px-4 py-2 rounded bg-neutral-900/40 border border-white/5 shadow-inner backdrop-blur-sm">
                            {/* Color Badge */}
                            <div 
                              className={`h-5 w-5 rounded-full border border-white/20 shadow-md shrink-0 transition-transform duration-300 hover:scale-110 ${!hasColor ? 'bg-neutral-800 border-dashed animate-pulse' : ''}`} 
                              style={hasColor ? { backgroundColor: formattedColor } : undefined} 
                            />
                            <span className="text-xs font-mono text-cream/75 uppercase tracking-wider select-all font-light">
                              {hasColor ? formattedColor : `[RESERVED 0${index + 1}]`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {currentPage.type === 'grid_system' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                  
                  {/* Left Column: Engineering Aesthetics Visual Grid Blueprint - ~75% Area */}
                  <div className="lg:col-span-9 flex flex-col justify-center">
                    <div className="w-full aspect-[16/10] bg-neutral-950 border border-white/15 rounded-lg relative flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                      {currentPage.gridImage ? (
                        <motion.img 
                          initial={{ scale: 1.05, opacity: 0 }}
                          animate={{ scale: 1.0, opacity: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          src={currentPage.gridImage} 
                          alt={`${project.title} Logo Construction`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <>
                          {/* Interactive Canvas Overlay representing Vector Geometries */}
                          <div className="absolute inset-0 opacity-20 pointer-events-none">
                            {/* Draft crosshair center lines */}
                            <div className="absolute top-1/2 left-0 w-full h-px bg-gold/50" />
                            <div className="absolute left-1/2 top-0 w-px h-full bg-gold/50" />
                            
                            {/* Circle and angle projections */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border border-gold/40 rounded-full animate-[spin_50s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-square border border-dashed border-gold/30 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] aspect-square border border-gold/40 rounded-full" />
                            
                            {/* Slanted layout rulers */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gold/30 rotate-[30deg]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gold/30 -rotate-[30deg]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gold/20 rotate-[60deg]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gold/20 -rotate-[60deg]" />
                          </div>

                          {/* Math Callout Annotations */}
                          <div className="absolute top-6 left-6 text-[8px] font-mono text-gold/40 uppercase">
                            G_CONCEPT: x * 1.618 (F_ratio)
                          </div>
                          <div className="absolute top-6 right-6 text-[8px] font-mono text-gold/40 uppercase">
                            Xaxis_offset: [0.00] // Yaw
                          </div>
                          <div className="absolute bottom-6 left-6 text-[8px] font-mono text-gold/40 uppercase">
                            Geometry: Iso_projection // CNC_ready
                          </div>
                          <div className="absolute bottom-6 right-6 text-[8px] font-mono text-gold/40 uppercase">
                            Symmetrical: Perfect balance_Y
                          </div>

                          {/* Centered Golden Monogram Vector Wireframe Representation */}
                          <div className="relative z-10 p-6 border border-gold/25 rounded-md bg-neutral-900/60 max-w-[240px] text-center aspect-square flex flex-col justify-between select-none">
                            
                            {/* Mathematical scale boxes */}
                            <div className="flex justify-between w-full opacity-30 text-[7px] font-mono text-gold select-none">
                              <span>[Y_01]</span>
                              <span>[Y_TR]</span>
                            </div>

                            <div className="my-auto flex flex-col items-center">
                              {/* Circle geometric lockup */}
                              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center relative mb-2">
                                <span className="text-3xl font-serif text-gold font-light opacity-80 leading-none">
                                  {project.title.charAt(0)}
                                </span>
                                {/* Inner circle compass marker */}
                                <div className="absolute inset-0.5 border border-dashed border-gold/25 rounded-full" />
                              </div>
                              
                              <span className="text-[8px] tracking-[0.3em] font-mono text-gold/60 uppercase">
                                {project.title} Identity System
                              </span>
                            </div>

                            <div className="flex justify-between w-full opacity-30 text-[7px] font-mono text-gold select-none">
                              <span>[Y_BL]</span>
                              <span>[Y_BR]</span>
                            </div>
                          </div>

                          {/* Dimension line labels */}
                          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[20%] h-[1px] bg-gold/30 hidden sm:block">
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[7px] font-mono text-gold/40">1.618x</span>
                          </div>
                          <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[20%] h-[1px] bg-gold/30 hidden sm:block">
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[7px] font-mono text-gold/40">2.00x (Zone)</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Logic Specifications list - ~25% Area */}
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 border border-gold/25 rounded-md bg-gold/5 text-gold shrink-0">
                        <Compass size={14} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold/80">Mathematical Specs</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif italic text-gold mb-3 leading-tight">Construction Guidelines</h3>
                    <p className="text-sm md:text-base text-cream/80 font-sans font-normal leading-relaxed mb-4">
                      {currentPage.description}
                    </p>

                    <div className="p-3 bg-white/5 border-l-2 border-gold/40 rounded-r mb-6">
                      <div className="text-[8px] font-mono text-gold uppercase tracking-[0.2em] mb-1">Grid Concept</div>
                      <p className="text-[10px] text-cream/80 font-sans font-light leading-relaxed italic">
                        "{currentPage.gridSpec?.geometryConcept}"
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="text-[8px] font-mono text-gold/60 uppercase tracking-widest">
                        Draft Constraints
                      </div>
                      <div className="space-y-1.5">
                        {currentPage.gridSpec?.rules.map((rule, idx) => (
                          <div key={idx} className="flex gap-2 items-start bg-neutral-950/20 p-2 rounded border border-white/5">
                            <span className="w-4 h-4 rounded-full bg-gold/10 text-gold flex items-center justify-center font-mono text-[8px] shrink-0 mt-0.5 border border-gold/20">
                              {idx + 1}
                            </span>
                            <p className="text-[10px] text-cream/80 font-sans leading-normal font-light">
                              {rule}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentPage.type === 'mockups' && (
                <div className="w-full">
                  <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-2 mb-4">
                      <div className="p-2 border border-gold/25 rounded-md bg-gold/5 text-gold animate-pulse">
                        <Box size={16} />
                      </div>
                      <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold">Tactile Brand Touchpoints</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif text-cream font-light mb-6">
                      Tangible Implementation
                    </h3>
                    <p className="text-base md:text-lg text-cream/85 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                      {currentPage.description}
                    </p>
                  </div>

                  {/* Balanced & Editorial Mockup Layout: Left Hero (40%) and Right Grid (60%) */}
                  <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-10 gap-y-8 w-full max-w-7xl mx-auto items-stretch">
                    
                    {/* LEFT SIDE: Large HERO mockup (40% width / 4 Columns) */}
                    <div className="lg:col-span-4 flex flex-col justify-between group h-full">
                      <div className="w-full aspect-square bg-[#0c0c0e] border border-white/10 rounded-t-lg relative overflow-hidden shadow-2xl transition-all duration-500 hover:border-gold/20 flex flex-col items-center justify-center grow">
                        
                        {/* Soft ambient lighting overlay */}
                        <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] via-transparent to-transparent pointer-events-none" />
                        
                        {/* Blueprint cropmarks */}
                        <div className="absolute top-4 left-4 w-3 h-[1px] bg-white/15" />
                        <div className="absolute top-4 left-4 h-3 w-[1px] bg-white/15" />
                        <div className="absolute bottom-4 right-4 w-3 h-[1px] bg-white/15" />
                        <div className="absolute bottom-4 right-4 h-3 w-[1px] bg-white/15" />

                        {currentPage.mockupsList?.[0]?.image ? (
                          <motion.img 
                            initial={{ scale: 1.05, opacity: 0 }}
                            animate={{ scale: 1.0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            src={currentPage.mockupsList[0].image} 
                            alt={currentPage.mockupsList[0].title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-6 text-center select-none text-white/30">
                            <span className="text-[9px] font-mono tracking-[0.25em] text-gold/50 col-span-2 uppercase mb-1">
                              [ HERO MOCKUP ]
                            </span>
                            <span className="text-[8px] font-mono text-cream/20 uppercase tracking-widest">
                              [ RESERVED SPACE ]
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Thin description strip below */}
                      <div className="w-full bg-neutral-950 px-5 py-3.5 border-x border-b border-white/10 rounded-b-lg flex justify-between items-center h-12">
                        <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-cream/90 font-medium">
                          {currentPage.mockupsList?.[0]?.title || "Hero Presentation"}
                        </span>
                        <span className="text-[8px] font-mono text-gold/60 uppercase tracking-wider">
                          01 / HERO
                        </span>
                      </div>
                    </div>

                    {/* RIGHT SIDE: Four smaller mockup containers in a 2x2 grid (60% width / 6 Columns) */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      {Array.from({ length: 4 }).map((_, i) => {
                        const mIndex = i + 1;
                        const mockup = currentPage.mockupsList?.[mIndex];
                        const title = mockup?.title || "Mockup Element";

                        return (
                          <div key={i} className="flex flex-col justify-between group w-full">
                            <div className="w-full aspect-[3/2] bg-[#0c0c0e] border border-white/10 rounded-t-lg relative overflow-hidden shadow-xl transition-all duration-500 hover:border-gold/20 flex flex-col items-center justify-center">
                              
                              {/* Soft ambient lighting overlay */}
                              <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                              
                              {/* Blueprint cropmarks */}
                              <div className="absolute top-4 left-4 w-2 h-[1px] bg-white/10" />
                              <div className="absolute top-4 left-4 h-2 w-[1px] bg-white/10" />
                              <div className="absolute bottom-4 right-4 w-2 h-[1px] bg-white/10" />
                              <div className="absolute bottom-4 right-4 h-2 w-[1px] bg-white/10" />

                              {mockup?.image ? (
                                <motion.img 
                                  initial={{ scale: 1.05, opacity: 0 }}
                                  animate={{ scale: 1.0, opacity: 1 }}
                                  transition={{ duration: 1.2, ease: "easeOut" }}
                                  src={mockup.image} 
                                  alt={title}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <div className="flex flex-col items-center justify-center p-4 text-center select-none text-white/20">
                                  <span className="text-[8px] font-mono tracking-[0.2em] text-gold/40 uppercase mb-0.5">
                                    {`[ MOCKUP 0${mIndex} ]`}
                                  </span>
                                  <span className="text-[7px] font-mono text-cream/15 uppercase tracking-widest">
                                    [ RESERVED SPACE ]
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Thin description strip below */}
                            <div className="w-full bg-neutral-950 px-4 py-3 border-x border-b border-white/10 rounded-b-lg flex justify-between items-center h-10">
                              <span className="text-[9px] font-sans uppercase tracking-[0.15em] text-cream/80 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                                {title}
                              </span>
                              <span className="text-[8px] font-mono text-gold/50 uppercase tracking-wide">
                                {`0${mIndex + 1}`}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  <div className="text-center mt-12 text-cream/30 text-[9px] uppercase tracking-[0.2em] font-mono">
                    Premium presentation environment • Configure asset paths in projects.ts
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Immersive Bottom Utility Panel */}
      <div className="absolute bottom-0 left-0 w-full z-[110] px-6 md:px-12 py-8 flex justify-between items-center pointer-events-none border-t border-white/5 bg-gradient-to-t from-burgundy via-burgundy/90 to-transparent">
        <div className="pointer-events-auto shrink-0 md:w-44">
          {activePage > 0 && (
            <button 
              onClick={handlePrev}
              className="flex items-center gap-3 group text-gold/60 hover:text-gold transition-colors bg-neutral-950/40 p-3 pr-5 border border-white/15 rounded-full shadow-2xl"
              aria-label="Previous Stage"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-mono font-medium">Previous Stage</span>
            </button>
          )}
        </div>

        {/* Dynamic Center Stage Dot/Text indicator for mobile layout depth */}
        <div className="hidden md:flex justify-center items-center gap-2 px-6 py-2 bg-neutral-950/30 border border-white/10 rounded-full text-[9px] font-mono tracking-widest text-cream/50 uppercase select-none">
          <span>PORTFOLIO CASE STUDY</span>
          <span>•</span>
          <span className="text-gold">0{activePage + 1} / 0{pages.length}</span>
        </div>

        <div className="pointer-events-auto shrink-0 md:w-44 flex justify-end">
          <button 
            onClick={handleNext}
            className="flex items-center gap-3 group text-gold bg-cream text-burgundy shadow-2xl p-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform pr-6 pl-3"
            aria-label={activePage === pages.length - 1 ? 'Finish Presentation' : 'Next Stage'}
          >
            <div className="w-8 h-8 rounded-full bg-burgundy text-gold flex items-center justify-center shrink-0">
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-mono font-semibold text-burgundy">
              {activePage === pages.length - 1 ? 'Close Case' : 'Next Stage'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
