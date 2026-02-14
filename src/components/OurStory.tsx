import React from 'react';
import { Heart, Zap, ShieldCheck, Globe, Cpu, History, Terminal, ChevronRight, Share2, Sparkles } from 'lucide-react';

export default function UltraStoryModule() {
  return (
    <section className="py-24 bg-[#020617] min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* 1. DYNAMIC BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* TOP NAVIGATION BAR (Integrated into Container) */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <History className="w-5 h-5 text-white" />
            </div>
            <div className="h-8 w-px bg-white/10 mx-2" />
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-[0.3em]">Module_01: Genesis</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
             <span className="animate-pulse flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LIVE_DATA_FEED
             </span>
             <Share2 className="w-3.5 h-3.5 hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* THE INTEGRATED BENTO DECK */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* PRIMARY NARRATIVE TILE */}
          <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0c14]/60 backdrop-blur-xl p-10 group">
            {/* Background Pattern Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-black text-blue-300/80 uppercase tracking-widest">Syrian Resilience Engine</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                  PURE PURPOSE
                </span>
              </h3>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-light">
                Born from the ashes of conflict, <span className="text-white font-semibold">NexaFlow AI</span> is more than code—it’s a digital bridge built on the refusal to let destruction define our future.
              </p>

              <div className="mt-12 flex items-center gap-6">
                <button className="px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Full Story
                </button>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0c14] bg-slate-800 flex items-center justify-center text-[8px] font-bold text-white">
                      NODE
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIDE METRIC TILES */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Sub-Tile 1: Mission */}
            <div className="flex-1 rounded-[2.5rem] border border-white/5 bg-[#0a0c14]/40 backdrop-blur-md p-8 group hover:bg-blue-500/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-white font-bold mb-2">Unbreakable Logic</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our architecture is hardened by the very challenges we've overcome.
              </p>
            </div>

            {/* Sub-Tile 2: Global Pulse */}
            <div className="flex-1 rounded-[2.5rem] border border-white/5 bg-[#0a0c14]/40 backdrop-blur-md p-8 group overflow-hidden relative">
              <Globe className="absolute -bottom-4 -right-4 w-24 h-24 text-blue-500/10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Latency: 0.04ms</span>
                </div>
                <h4 className="text-white font-bold mb-2">Global Innovation</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Proving that elite AI solutions have no geographic boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM TERMINAL STRIP */}
          <div className="md:col-span-12 group rounded-[2.5rem] border border-blue-500/20 bg-blue-500/[0.03] p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="bg-[#050b1d]/90 rounded-[calc(2.5rem-4px)] p-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
               {/* Animated Progress Bar behind text */}
               <div className="absolute left-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full animate-progress-flow" />

               <div className="flex items-center gap-6">
                 <div className="hidden sm:flex p-3 rounded-full bg-blue-500/10 border border-blue-500/20">
                   <Terminal className="w-4 h-4 text-blue-400" />
                 </div>
                 <p className="text-xl md:text-2xl font-light text-white tracking-tight text-center md:text-left">
                   "From <span className="text-blue-400 font-bold">Syria</span>, for the world. One workflow at a time."
                 </p>
               </div>

               <div className="flex items-center gap-4">
                 <div className="h-10 w-px bg-white/5 hidden md:block" />
                 <div className="flex flex-col items-end">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">System_Impact</span>
                    <span className="text-sm font-black text-white tracking-tighter uppercase italic">Scale_Infinite</span>
                 </div>
                 <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                    <ChevronRight className="w-5 h-5 text-blue-400" />
                 </div>
               </div>
            </div>
          </div>

        </div>

        {/* SUBTLE FOOTER METADATA */}
        <div className="mt-8 flex justify-center items-center gap-8 opacity-40">
           <div className="flex items-center gap-2">
             <Cpu className="w-3 h-3" />
             <span className="text-[9px] font-mono text-white tracking-[0.3em] uppercase">Neural_Bridge_Active</span>
           </div>
           <div className="w-1 h-1 rounded-full bg-white/20" />
           <div className="flex items-center gap-2">
             <Zap className="w-3 h-3" />
             <span className="text-[9px] font-mono text-white tracking-[0.3em] uppercase">Energy_Optimized</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes progress-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-flow {
          animation: progress-flow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}