import { Linkedin, Twitter, Mail, Fingerprint, Shield, Cpu } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    id: 'NODE_ARCH_01',
    role: 'Chief AI Architect',
    bio: 'Former Google AI researcher with 15+ years in machine learning. Pioneer in ethical neural network orchestration and multi-agent systems.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Neural_Dynamics',
  },
  {
    name: 'Marcus Rodriguez',
    id: 'AUTO_EXEC_02',
    role: 'Head of Automation',
    bio: 'Ex-Tesla automation engineer specialized in enterprise-scale workflow optimization and autonomous resource allocation protocols.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'System_Efficiency',
  },
];

export default function NeuralTeam() {
  return (
    <section id="team" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-20 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.4em] font-black">CORE_OPERATORS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 italic">Architects</span>
            </h2>
          </div>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest max-w-[200px]">
            Engineering the substrate of future intelligence.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={member.name} className="group relative">
              {/* Card Container */}
              <div className="relative bg-[#0a0c14] border border-white/5 p-4 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/30">
                
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Image Side */}
                  <div className="relative w-full md:w-56 h-72 flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* ID Tag */}
                    <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <span className="text-[8px] font-mono text-blue-400 font-bold uppercase tracking-widest">{member.id}</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 py-4 pr-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                          {member.role}
                        </p>
                      </div>
                      <Fingerprint className="w-6 h-6 text-white/10" />
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light italic">
                      "{member.bio}"
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex gap-3">
                        {[Linkedin, Twitter, Mail].map((Icon, i) => (
                          <button key={i} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 transition-all">
                            <Icon className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-slate-700" />
                        <span className="text-[9px] font-mono text-slate-700 uppercase tracking-widest">{member.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cybernetic Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-blue-500/10 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM DECORATIVE BAR */}
        <div className="mt-20 flex items-center justify-between px-8 py-4 bg-white/[0.02] border border-white/5 rounded-full">
           <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />)}
              </div>
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Awaiting_Further_Deployment</span>
           </div>
           <button className="text-[8px] font-mono text-blue-500 uppercase tracking-widest hover:text-white transition-colors">
             View_Full_Collective_Hierarchy {'>>'}
           </button>
        </div>
      </div>
    </section>
  );
}