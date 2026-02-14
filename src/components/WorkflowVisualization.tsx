import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Zap, Bot, Database, ShieldAlert, 
  Terminal, Image as ImageIcon, Cpu, Share2, 
  Activity, Move, Fingerprint, LayoutGrid, Layers,
  Network, Code2, CpuIcon
} from 'lucide-react';

const NODES = [
  { id: 0, x: 10, y: 50, label: 'Ingest', sub: 'DATA_STREAM', icon: Database, color: '#3b82f6' },
  { id: 1, x: 30, y: 25, label: 'Analytic', sub: 'NEURAL_PARSE', icon: Cpu, color: '#60a5fa' },
  { id: 2, x: 30, y: 75, label: 'Safety', sub: 'GUARD_RAIL', icon: ShieldAlert, color: '#2563eb' },
  { id: 3, x: 55, y: 50, label: 'Synthesizer', sub: 'GPT_ORCHESTRA', icon: Share2, color: '#0ea5e9' },
  { id: 4, x: 85, y: 50, label: 'Export', sub: 'API_ENDPOINT', icon: Zap, color: '#10b981' },
];

export default function MissionControlHero() {
  const [activeStep, setActiveStep] = useState(0);
  const [nodes, setNodes] = useState(NODES);
  const [draggingNode, setDraggingNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (id: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setDraggingNode(id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNode === null || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setNodes(prev => prev.map(n => n.id === draggingNode ? { ...n, x, y } : n));
  };

  const getNodePos = (id: number) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section className="relative min-h-screen bg-[#02040a] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* HEADER SECTION */}
      <div className="text-center z-20 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6 backdrop-blur-md">
          <Layers className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] font-mono text-blue-300 uppercase tracking-widest font-bold">Nexa_Protocol_Active</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-4">
          Visual <span className="text-blue-500">Logic</span> Gates
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light">
          Bridge the gap between raw data and creative intelligence with our interactive neural workspace.
        </p>
      </div>

      {/* THE INTEGRATED SLAB FRAME */}
      <div className="relative w-full max-w-6xl z-10">
        <div className="bg-[#0d1117] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-3xl flex flex-col">
          
          {/* WINDOW HEADER */}
          <div className="border-b border-white/5 bg-white/[0.02] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
               </div>
               <div className="h-4 w-px bg-white/10 mx-2" />
               <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">Workspace / Neural_Engine_v1</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
               <Code2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
               <LayoutGrid className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* MAIN VISUAL AREA (Top Half) */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setDraggingNode(null)}
            className="relative h-[400px] w-full bg-[#0a0c10] overflow-hidden"
          >
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {[ [0, 1], [0, 2], [1, 3], [2, 3], [3, 4] ].map(([from, to], i) => {
                const s = getNodePos(from);
                const e = getNodePos(to);
                const act = activeStep === from;
                return (
                  <g key={i}>
                    <line x1={`${s.x}%`} y1={`${s.y}%`} x2={`${e.x}%`} y2={`${e.y}%`} 
                          stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    {act && (
                      <line x1={`${s.x}%`} y1={`${s.y}%`} x2={`${e.x}%`} y2={`${e.y}%`} 
                            stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                      </line>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Draggable Nodes */}
            {nodes.map((n, i) => {
              const Icon = n.icon;
              const isActive = activeStep === i;
              return (
                <div key={n.id} 
                  onMouseDown={handleMouseDown(n.id)}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-grab active:cursor-grabbing z-20 transition-transform ${isActive ? 'scale-110' : 'scale-100'}`}
                >
                  <div className={`p-4 rounded-xl border transition-all duration-500 flex items-center gap-3 backdrop-blur-md
                    ${isActive ? 'bg-white border-white text-black shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'bg-black/40 border-white/5 text-slate-400 hover:border-white/20'}`}>
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase leading-none">{n.label}</p>
                      <p className={`text-[8px] font-mono mt-1 ${isActive ? 'text-black/50' : 'text-blue-500/50'}`}>{n.sub}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DASHBOARD AREA (Bottom Half) */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/5 bg-white/[0.01]">
            
            {/* 1. Terminal Panel */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-white/5">
               <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-3 h-3 text-blue-500" />
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Kernel_Logs</span>
               </div>
               <div className="space-y-1.5 font-mono text-[10px]">
                  <p className="text-emerald-500">Handshake success</p>
                  <p className="text-slate-500">Injecting tokens to Node_{activeStep}...</p>
                  <p className="text-blue-400 animate-pulse">Syncing semantic bridge...</p>
               </div>
            </div>

            {/* 2. Status Panel */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
               <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-3 h-3 text-amber-500" />
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Node_Health</span>
               </div>
               <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-black text-white leading-none">99.8%</p>
                    <p className="text-[9px] font-mono text-slate-600 uppercase mt-1">Uptime_Optimal</p>
                  </div>
                  <div className="flex gap-1 h-8 items-end">
                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                      <div key={i} className="w-1 bg-blue-500/20 rounded-full overflow-hidden">
                        <div className="w-full bg-blue-500 animate-bounce" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* 3. CTA Panel */}
            <div className="p-6 flex flex-col justify-center gap-4">
               <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                 Deploy Pipeline <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all">
                 Clone Template
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
