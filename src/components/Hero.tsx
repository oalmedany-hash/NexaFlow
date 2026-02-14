import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, ArrowRight, Zap, Bot, Database, Mail, ShieldAlert, 
  CheckCircle, Activity, Move, Terminal, Image as ImageIcon, 
  Cpu, Share2, Fingerprint, Lock, Globe 
} from 'lucide-react';

const INITIAL_NODES = [
  { id: 0, x: 40, y: 40, label: 'Data Ingest', sub: 'WEBHOOK_OS', icon: Database, color: '#3b82f6' },
  { id: 1, x: 220, y: 100, label: 'Neural Core', sub: 'CLAUDE_3.5_SONNET', icon: Cpu, color: '#60a5fa' },
  { id: 2, x: 60, y: 240, label: 'Safety Net', sub: 'HEURISTIC_CHECK', icon: ShieldAlert, color: '#2563eb' },
  { id: 3, x: 300, y: 240, label: 'Logic Bridge', sub: 'SEMANTIC_ROUTER', icon: Share2, color: '#0ea5e9' },
  { id: 4, x: 100, y: 380, label: 'Synapse GPT', sub: 'VECTOR_SEARCH', icon: Bot, color: '#3b82f6' },
  { id: 5, x: 340, y: 380, label: 'Pixel Engine', sub: 'FLUX_LATENT', icon: ImageIcon, color: '#8b5cf6' },
];

const SYSTEM_LOGS = [
  "Handshaking with encrypted gateway...",
  "Contextualizing: 'Quantum Architecture' parameters...",
  "Safety check: 0.0% hallucination risk detected.",
  "Routing tokens through semantic bridge...",
  "Text: 'The network pulsed with neon light...' generated.",
  "Visual: Rendering latent noise to 2048px..."
];

export default function NeuralConsoleHero({ onGetStarted }: { onGetStarted: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const [nodes, setNodes] = useState(INITIAL_NODES);
  const [draggingNode, setDraggingNode] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 6;
        if (next === 0) setLogs([SYSTEM_LOGS[0]]);
        else setLogs(prevLogs => [...prevLogs.slice(-3), SYSTEM_LOGS[next]]);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (id: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setDraggingNode(id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNode === null || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(20, Math.min(e.clientX - rect.left - 85, rect.width - 170));
    const y = Math.max(20, Math.min(e.clientY - rect.top - 40, rect.height - 80));
    setNodes(prev => prev.map(node => node.id === draggingNode ? { ...node, x, y } : node));
  };

  const handleMouseUp = () => setDraggingNode(null);

  const getNodePos = (id: number) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x + 85, y: node.y + 40 } : { x: 0, y: 0 };
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#010409] py-20 px-6 overflow-hidden select-none">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_51%)] bg-[size:100%_4px] pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center relative z-10">
        
        {/* TEXT CONTENT */}
        <div className="flex flex-col space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl w-fit">
            <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono font-black text-blue-200 uppercase tracking-[0.3em]">System_Status: Optimal</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] text-white tracking-tighter uppercase italic">
            Automate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
              Intelligence
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg font-light leading-relaxed">
            The next generation of AI orchestration. Deploy complex, multi-model pipelines that reason, verify, and generate with surgical precision.
          </p>

          {/* DYNAMIC HUD TERMINAL */}
          <div className="relative group max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-[#0d1117]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">Live_Kernel_Log</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                </div>
              </div>
              
              <div className="space-y-2 min-h-[100px]">
                {logs.map((log, i) => (
                  <div key={i} className={`font-mono text-[11px] flex gap-3 ${i === logs.length - 1 ? 'text-blue-400' : 'text-slate-600'}`}>
                    <span className="opacity-20">{'>'}</span>
                    {log}
                  </div>
                ))}
              </div>

              {activeStep === 5 && (
                <div className="mt-4 rounded-xl border border-blue-500/20 overflow-hidden animate-in zoom-in-95 duration-500">
                  <div className="h-32 w-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop" 
                      className="object-cover w-full h-full brightness-75"
                      alt="AI Neural Map"
                    />
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                    <div className="absolute bottom-2 right-3 flex items-center gap-2">
                      <Fingerprint className="w-3 h-3 text-white/50" />
                      <span className="text-[8px] font-mono text-white/50 uppercase">Auth_Verified</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-5 pt-4">
            <button onClick={onGetStarted} className="px-8 py-4 bg-white text-black hover:bg-blue-500 hover:text-white rounded-full font-black uppercase tracking-widest transition-all text-xs flex items-center gap-3">
              Start Integration <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/10 text-white hover:bg-white/5 rounded-full font-black uppercase tracking-widest transition-all text-xs">
              View Specs
            </button>
          </div>
        </div>

        {/* INTERACTIVE NODE CANVAS */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/10 rounded-[3rem] shadow-3xl overflow-hidden cursor-crosshair"
        >
          {/* SVG Connection Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[ [0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [3, 5] ].map(([from, to], idx) => {
              const start = getNodePos(from);
              const end = getNodePos(to);
              const isActive = (activeStep === from);

              return (
                <g key={`link-${idx}`}>
                  <path 
                    d={`M ${start.x} ${start.y} C ${start.x + 100} ${start.y}, ${end.x - 100} ${end.y}, ${end.x} ${end.y}`}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                    fill="none"
                  />
                  {isActive && (
                    <>
                      <path 
                        d={`M ${start.x} ${start.y} C ${start.x + 100} ${start.y}, ${end.x - 100} ${end.y}, ${end.x} ${end.y}`}
                        stroke={nodes[from].color}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="10,10"
                        className="opacity-50"
                      >
                        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="4s" repeatCount="indefinite" />
                      </path>
                      <circle r="3" fill="#fff">
                        <animateMotion dur="2s" repeatCount="indefinite" path={`M ${start.x} ${start.y} C ${start.x + 100} ${start.y}, ${end.x - 100} ${end.y}, ${end.x} ${end.y}`} />
                      </circle>
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeStep === node.id;
            
            return (
              <div
                key={node.id}
                onMouseDown={handleMouseDown(node.id)}
                style={{ 
                  left: node.x, 
                  top: node.y,
                  transition: draggingNode === node.id ? 'none' : 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="absolute w-[180px] z-20 group"
              >
                <div className={`relative p-4 rounded-2xl bg-[#0d111a]/90 backdrop-blur-xl border transition-all duration-500 
                  ${isActive ? 'border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-white/5 hover:border-white/20'}`}>
                  
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition-all duration-500 ${isActive ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <div className={`text-[11px] font-black uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                        {node.label}
                      </div>
                      <div className="text-[8px] font-mono text-blue-500/50 font-bold truncate uppercase">{node.sub}</div>
                    </div>
                  </div>

                  {/* Drag Handle UI */}
                  <div className="absolute -top-1.5 -right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white text-black rounded-full p-1 shadow-lg">
                      <Move className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* HUD DECORATION */}
          <div className="absolute top-6 right-6 flex items-center gap-4 px-4 py-2 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
            <Globe className="w-3 h-3 text-slate-500" />
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Global_Relay: Active</span>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-black/60 border border-white/5 rounded-full backdrop-blur-2xl">
            <div className="flex gap-1.5">
              {SYSTEM_LOGS.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-700 ${activeStep === i ? 'w-8 bg-blue-500' : 'w-2 bg-white/10'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}