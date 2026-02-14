import React, { useState, useEffect } from 'react';
import { 
  Building2, ShoppingCart, Heart, DollarSign, GraduationCap, 
  Plane, Cpu, Zap, ShieldCheck, Activity, ChevronRight,
  Database, Network, Fingerprint, Box
} from 'lucide-react';

const PROTOCOLS = [
  { id: 0, icon: Building2, label: 'Enterprise Automation', sub: 'NODE_ALPHA_01', detail: 'Architecting cross-platform legacy bridges.', color: '#3b82f6' },
  { id: 1, icon: ShoppingCart, label: 'Market Intelligence', sub: 'NODE_BETA_02', detail: 'Real-time consumer sentiment orchestration.', color: '#60a5fa' },
  { id: 2, icon: Heart, label: 'Biometric Security', sub: 'NODE_GAMMA_03', detail: 'Encryption layers for sensitive medical telemetry.', color: '#2563eb' },
  { id: 3, icon: DollarSign, label: 'Quantum FinTech', sub: 'NODE_DELTA_04', detail: 'Low-latency algorithmic liquidity provisioning.', color: '#0ea5e9' },
  { id: 4, icon: GraduationCap, label: 'Cognitive EdTech', sub: 'NODE_EPSILON_05', detail: 'Dynamic knowledge-graph path mapping.', color: '#3b82f6' },
  { id: 5, icon: Plane, label: 'Global Logistics', sub: 'NODE_ZETA_06', detail: 'Multi-modal supply chain synchronization.', color: '#8b5cf6' },
];

export default function ContainedProtocolMatrix() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PROTOCOLS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#020617] min-h-screen flex items-center justify-center">
      {/* OUTER WRAPPER / CONTAINER */}
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* MAIN BOX CONTAINER */}
        <div className="relative border border-blue-500/20 bg-[#050b1d]/50 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl">
          
          {/* 1. CONTAINER ACCENTS (Corners & Decals) */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/40 rounded-tl-[2.5rem] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/40 rounded-br-[2.5rem] pointer-events-none" />
          
          {/* Header Strip inside the Container */}
          <div className="border-b border-blue-500/10 px-10 py-4 flex items-center justify-between bg-blue-500/5">
            <div className="flex items-center gap-4">
              <Box className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono text-blue-400/60 uppercase tracking-[0.4em]">Integrated_Logic_Vault_v4.0</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500/20" />
              <div className="w-2 h-2 rounded-full bg-blue-500/20" />
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
          </div>

          <div className="p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* LEFT COLUMN: THE NEURAL RADAR (Contained) */}
              <div className="w-full lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <Network className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em]">Sector Topology</span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85]">
                    NEURAL <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">SYNDICATE</span>
                  </h2>
                </div>

                {/* RADAR VISUALIZER */}
                <div className="relative w-full aspect-square max-w-[380px] mx-auto lg:mx-0">
                  <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-pulse" />
                  <div className="absolute inset-8 rounded-full border border-blue-500/5 shadow-[inset_0_0_50px_rgba(59,130,246,0.05)]" />
                  <div className="absolute inset-0 rounded-full border-t-2 border-blue-500/20 animate-spin-slow" />
                  
                  {/* Central Core */}
                  <div className="absolute inset-[35%] rounded-[2rem] bg-blue-600/5 border border-blue-500/20 flex items-center justify-center backdrop-blur-2xl">
                    <Cpu className="w-10 h-10 text-blue-400 animate-pulse" />
                    <div className="absolute -inset-4 border border-blue-400/10 rounded-full animate-ping" />
                  </div>

                  {/* Floating Orbiting Nodes */}
                  {PROTOCOLS.map((p, i) => {
                    const angle = (i * 60) * (Math.PI / 180);
                    const x = 50 + 42 * Math.cos(angle);
                    const y = 50 + 42 * Math.sin(angle);
                    const isActive = activeIdx === i;

                    return (
                      <div 
                        key={i}
                        className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-xl flex items-center justify-center transition-all duration-1000 ${
                          isActive ? 'bg-blue-500 text-white scale-125 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-[#0d111a]/80 text-blue-500/30 border border-blue-500/10'
                        }`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <p.icon className="w-6 h-6" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN: THE PROTOCOL STACK */}
              <div className="w-full lg:w-1/2 space-y-3">
                {PROTOCOLS.map((protocol, idx) => {
                  const isActive = activeIdx === idx;
                  
                  return (
                    <div 
                      key={idx}
                      className={`group relative transition-all duration-700 ease-out rounded-2xl ${
                        isActive ? 'bg-blue-500/10 border-l-4 border-blue-500 translate-x-4' : 'opacity-30 translate-x-0'
                      }`}
                    >
                      <div className="p-5 flex items-center gap-6">
                        <div className={`text-xl font-mono font-black ${isActive ? 'text-blue-400' : 'text-white/10'}`}>
                          0{idx + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`font-bold tracking-tight uppercase transition-all ${isActive ? 'text-white text-lg' : 'text-slate-500 text-sm'}`}>
                            {protocol.label}
                          </h3>
                          
                          {isActive && (
                            <div className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-500">
                              <p className="text-slate-400 text-xs mt-2 leading-relaxed italic">
                                {protocol.detail}
                              </p>
                              <div className="mt-3 flex items-center gap-2">
                                <Activity className="w-3 h-3 text-emerald-400" />
                                <span className="text-[9px] font-mono text-emerald-400/60 uppercase">Node_Status: Processing</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className={`transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Internal Timer Bar */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 h-[2px] bg-blue-500/50 animate-protocol-progress" />
                      )}
                    </div>
                  );
                })}

                {/* BOTTOM SYSTEM CONSOLE (Contained) */}
                <div className="mt-8 p-4 rounded-xl bg-black/40 border border-blue-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Fingerprint className="w-4 h-4 text-blue-500/50" />
                    <span className="text-[10px] font-mono text-blue-500/40 uppercase tracking-tighter">Auth: Access_Granted</span>
                  </div>
                  <div className="h-4 w-px bg-white/5" />
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    STABLE_SYNC
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* BACKGROUND TEXT DECAL */}
          <div className="absolute bottom-10 left-10 text-[100px] font-black text-white/[0.02] pointer-events-none select-none italic">
            SECTOR_0X
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes protocol-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-protocol-progress {
          animation: protocol-progress 3.5s linear forwards;
        }
      `}</style>
    </section>
  );
}