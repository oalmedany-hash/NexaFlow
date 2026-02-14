// import { X, Play, CheckCircle, Mail, Database, Zap, MessageSquare, Terminal as TerminalIcon, Cpu, Loader2, ShieldCheck, Activity, Globe, Lock } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// interface WorkflowSimulationProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function SpatialNeuralSimulation({ isOpen, onClose }: WorkflowSimulationProps) {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [logs, setLogs] = useState<string[]>(["[SYSTEM]: Ready for deployment..."]);
//   const logEndRef = useRef<HTMLDivElement>(null);

//   const steps = [
//     { id: 1, icon: Mail, label: 'Ingest', sub: 'Input_Packet', color: 'text-blue-400' },
//     { id: 2, icon: Zap, label: 'Compute', sub: 'Inference_V8', color: 'text-amber-400' },
//     { id: 3, icon: Database, label: 'Recall', sub: 'Vector_Map', color: 'text-purple-400' },
//     { id: 4, icon: MessageSquare, label: 'Synthesize', sub: 'GPT_Bridge', color: 'text-pink-400' },
//     { id: 5, icon: CheckCircle, label: 'Resolve', sub: 'Exec_Success', color: 'text-emerald-400' },
//   ];

//   const logMessages = [
//     "Handshaking with SMTP... connection secured.",
//     "Tokenizing prompt... temperature set to 0.7.",
//     "Fetching context from Pinecone index...",
//     "Hallucination check passed. Response ready.",
//     "Relay successful. Thread closed."
//   ];

//   useEffect(() => {
//     if (isRunning && activeStep < steps.length) {
//       const timer = setTimeout(() => {
//         setLogs(prev => [...prev, `[PROTO_${activeStep + 1}]: ${logMessages[activeStep]}`]);
//         setActiveStep((prev) => prev + 1);
//       }, 1400);
//       return () => clearTimeout(timer);
//     } else if (isRunning && activeStep >= steps.length) {
//       setTimeout(() => {
//         setIsRunning(false);
//         setLogs(prev => [...prev, "[TERMINAL]: Orchestration cycle finished."]);
//       }, 1000);
//     }
//   }, [isRunning, activeStep]);

//   useEffect(() => {
//     logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [logs]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
//       {/* BACKGROUND ATMOSPHERE */}
//       <div className="absolute inset-0 bg-[#020617]/98 backdrop-blur-2xl" onClick={onClose} />
      
//       {/* SCANNING GRID */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,#000,transparent)]" />

//       <div className="relative w-full max-w-6xl bg-[#030712] rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.2)] overflow-hidden">
        
//         {/* TOP STATUS BAR (The "OS" look) */}
//         <div className="flex items-center justify-between px-8 py-4 bg-white/[0.02] border-b border-white/5">
//           <div className="flex items-center gap-4">
//              <div className="flex gap-1.5">
//                <div className="w-2 h-2 rounded-full bg-red-500/40" />
//                <div className="w-2 h-2 rounded-full bg-amber-500/40" />
//                <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
//              </div>
//              <div className="h-4 w-px bg-white/10 mx-2" />
//              <div className="flex items-center gap-2">
//                <Lock className="w-3 h-3 text-blue-500/50" />
//                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Secure_Protocol: AES-256</span>
//              </div>
//           </div>
//           <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
//             <X className="w-5 h-5 text-slate-500 group-hover:text-white" />
//           </button>
//         </div>

//         <div className="p-10">
//           {/* THE STAGE: NODE MAP */}
//           <div className="relative h-64 flex items-center justify-between mb-16">
//             {/* SVG CONNECTION PATHS */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none">
//               <defs>
//                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="transparent" />
//                   <stop offset="50%" stopColor="#3b82f6" />
//                   <stop offset="100%" stopColor="transparent" />
//                 </linearGradient>
//               </defs>
//               <path 
//                 d="M 60,128 L 940,128" 
//                 stroke="white" 
//                 strokeOpacity="0.05" 
//                 strokeWidth="1" 
//                 fill="none" 
//               />
//               {isRunning && (
//                 <circle r="3" fill="#3b82f6" className="shadow-[0_0_10px_#3b82f6]">
//                   <animateMotion 
//                     dur="1.4s" 
//                     repeatCount="indefinite" 
//                     path={`M ${60 + (activeStep * 200)},128 L ${60 + ((activeStep + 1) * 200)},128`} 
//                   />
//                 </circle>
//               )}
//             </svg>
            
//             {steps.map((step, index) => (
//               <div key={step.id} className="relative z-10 flex flex-col items-center">
//                 <div className={`
//                   w-24 h-24 rounded-[2rem] flex items-center justify-center transition-all duration-700 relative
//                   ${activeStep > index ? 'bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.4)]' : 
//                     activeStep === index ? 'bg-white text-black scale-110' : 'bg-[#0a0c14] border border-white/10'}
//                 `}>
//                   {activeStep === index && isRunning && (
//                     <div className="absolute inset-0 rounded-[2rem] border-2 border-blue-500 animate-ping opacity-20" />
//                   )}
//                   <step.icon className={`w-10 h-10 ${activeStep === index ? 'text-black' : activeStep > index ? 'text-white' : 'text-slate-700'}`} />
//                 </div>
                
//                 <div className="absolute -bottom-14 flex flex-col items-center">
//                   <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${activeStep === index ? 'text-white' : 'text-slate-600'}`}>
//                     {step.label}
//                   </span>
//                   <span className="text-[8px] font-mono text-blue-500/60 font-bold tracking-tighter">{step.sub}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//             {/* TERMINAL MODS */}
//             <div className="md:col-span-8 bg-black/60 rounded-3xl border border-white/5 p-6 relative group overflow-hidden">
//                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
//                <div className="flex items-center gap-3 mb-4">
//                  <TerminalIcon className="w-4 h-4 text-emerald-500" />
//                  <span className="text-[10px] font-mono text-emerald-500/70 font-bold uppercase tracking-[0.2em]">Live_Compute_Relay</span>
//                </div>
//                <div className="h-44 overflow-y-auto font-mono text-[11px] space-y-3 pr-4 custom-scrollbar">
//                  {logs.map((log, i) => (
//                    <div key={i} className="flex gap-4 animate-in fade-in slide-in-from-left-2">
//                      <span className="text-white/10 shrink-0">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
//                      <span className={log.includes('SYSTEM') ? 'text-blue-400 font-bold' : 'text-slate-400'}>{log}</span>
//                    </div>
//                  ))}
//                  <div ref={logEndRef} />
//                </div>
//             </div>

//             {/* CONTROL PANEL */}
//             <div className="md:col-span-4 space-y-4">
//               <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-all">
//                 <div>
//                   <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Compute_Load</div>
//                   <div className="text-2xl font-black text-white italic tracking-tighter group-hover:text-blue-400 transition-colors">
//                     {isRunning ? '88.4' : '0.0'}<span className="text-xs font-normal ml-1">%</span>
//                   </div>
//                 </div>
//                 <Cpu className={`w-8 h-8 text-white/5 group-hover:text-blue-500/20 transition-all ${isRunning ? 'animate-spin' : ''}`} />
//               </div>

//               <button
//                 onClick={isRunning ? undefined : () => { setActiveStep(0); setIsRunning(true); }}
//                 className={`
//                   w-full py-8 rounded-3xl font-black uppercase tracking-[0.5em] text-xs transition-all flex items-center justify-center gap-4 relative overflow-hidden
//                   ${isRunning ? 'bg-slate-900 text-slate-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_20px_40px_rgba(37,99,235,0.3)]'}
//                 `}
//               >
//                 {isRunning ? (
//                   <span className="relative z-10 flex items-center gap-2">
//                     <Loader2 className="w-4 h-4 animate-spin" /> Orchestrating...
//                   </span>
//                 ) : (
//                   <span className="relative z-10 flex items-center gap-2">
//                     <Play className="w-4 h-4 fill-current" /> Execute_Sim
//                   </span>
//                 )}
//                 <div className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM METRICS HUD */}
//         <div className="px-8 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
//            <div className="flex gap-12">
//               <div className="flex flex-col">
//                 <span className="text-[8px] font-mono text-slate-600 uppercase">Global_Availability</span>
//                 <span className="text-[10px] text-emerald-500 font-bold">99.998% UPTIME</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[8px] font-mono text-slate-600 uppercase">Latency_Bridge</span>
//                 <span className="text-[10px] text-blue-400 font-bold">12ms DELAY</span>
//               </div>
//            </div>
//            <div className="flex items-center gap-3">
//              <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className={`w-1 h-3 rounded-full ${activeStep > i ? 'bg-blue-500' : 'bg-white/10'}`} />
//                 ))}
//              </div>
//              <span className="text-[9px] font-mono text-slate-500">RELAY_STRENGTH</span>
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// }