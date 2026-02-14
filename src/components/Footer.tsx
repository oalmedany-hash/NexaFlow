import { Github, Linkedin, Twitter, Mail, Cpu, Globe, ArrowUpRight, Shield, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NeuralFooter() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toUTCString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010409] border-t border-white/5 relative overflow-hidden">
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 max-w-7xl pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRANDING COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                  NexaFlow <span className="text-blue-500">AI</span>
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Protocol_Active // v2.4.0</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Engineering the next generation of autonomous enterprise intelligence. 
              Our neural workflows orchestrate complexity into streamlined execution.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION MATRIX */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] mb-8 font-black">System_Nodes</h4>
              <ul className="space-y-4">
                {['Team', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                      <span className="w-1 h-1 bg-slate-800 group-hover:bg-blue-500 transition-colors" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] mb-8 font-black">Data_Assets</h4>
              <ul className="space-y-4">
                {['Documentation', 'API_Reference', 'Status', 'Community', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors text-sm">
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Uplink_Clock</span>
                </div>
                <div className="text-xs font-mono text-white leading-tight">
                  {time.split(' ').slice(0, 4).join(' ')} <br />
                  <span className="text-blue-500">{time.split(' ').slice(4).join(' ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SYSTEM DIAGNOSTIC FOOTER */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">© {currentYear} NexaFlow_AI</span>
            <div className="hidden md:flex gap-4">
              <span className="text-[10px] font-mono text-emerald-500/50 uppercase">Lat: 24ms</span>
              <span className="text-[10px] font-mono text-blue-500/50 uppercase">Enc: TLS_1.3</span>
            </div>
          </div>

          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Governance'].map((policy) => (
              <a key={policy} href="#" className="text-[10px] font-mono text-slate-500 hover:text-blue-400 uppercase tracking-widest transition-colors">
                {policy}
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-blue-500/50 transition-all"
          >
            <span className="text-[8px] font-mono text-slate-400 group-hover:text-blue-400 uppercase tracking-tighter">Return_to_Top</span>
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-2 h-2 text-white -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}