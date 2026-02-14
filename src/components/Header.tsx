import { Menu, X, Cpu, Radio, Sparkles, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onGetStarted: () => void;
}

export default function CreativeHeader({ onGetStarted }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to shrink the "island"
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <header 
        className={`
          pointer-events-auto transition-all duration-500 ease-out
          relative flex items-center justify-between
          ${scrolled 
            ? 'w-full max-w-5xl rounded-2xl md:rounded-full px-6 py-3 bg-[#0a0c14]/70' 
            : 'w-full max-w-7xl rounded-3xl px-8 py-5 bg-transparent'
          }
          backdrop-blur-xl border border-white/5 shadow-2xl
        `}
      >
        {/* 1. GLOWING ACCENT BORDER (Pseudo-element) */}
        <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

        {/* LOGO AREA */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="relative">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            {/* Active Status Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#0a0c14] rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tighter leading-none">
              NEXA<span className="text-blue-500">FLOW</span>
            </span>
            <span className="text-[8px] font-mono text-blue-400/60 tracking-[0.3em] uppercase">AI_Orchestrator</span>
          </div>
        </div>

        {/* CENTER NAV: DESKTOP */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {['Home', 'Services', 'Team', 'Testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="px-5 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* ACTION AREA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 mr-4 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5">
            <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-400 uppercase">System_Stable</span>
          </div>

          <button
            onClick={onGetStarted}
            className="group relative hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all overflow-hidden"
          >
            <Sparkles className="w-4 h-4" />
            <span>Connect</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU: OVERLAY STYLE */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-[#0a0c14]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-3xl">
              <div className="grid grid-cols-1 gap-2">
                {['Home', 'Services', 'Team', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="flex items-center justify-between w-full p-4 rounded-2xl text-slate-300 hover:text-white hover:bg-blue-500/10 transition-all group"
                  >
                    <span className="font-bold uppercase tracking-widest text-sm">{item}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
              <button
                onClick={onGetStarted}
                className="w-full mt-6 bg-blue-600 text-white p-4 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20"
              >
                Initiate Sequence
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}