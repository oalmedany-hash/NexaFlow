import { Brain, Bot, Workflow, BarChart3, Shield, Rocket, ArrowUpRight, Activity } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Intelligent Process Automation',
    description: 'Leverage advanced AI models to automate complex business processes and decision-making workflows.',
    color: 'from-blue-500 to-indigo-500',
    tag: 'ML_CORE'
  },
  {
    icon: Bot,
    title: 'Custom AI Chatbots',
    description: 'Deploy intelligent chatbots that understand context, learn from interactions, and provide 24/7 support.',
    color: 'from-cyan-500 to-blue-500',
    tag: 'NLP_NODE'
  },
  {
    icon: Workflow,
    title: 'Workflow Orchestration',
    description: 'Connect your tools and automate repetitive tasks with seamless integrations across your tech stack.',
    color: 'from-indigo-500 to-purple-500',
    tag: 'SYNC_ENGINE'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Make data-driven decisions with AI-powered analytics that forecast trends and identify opportunities.',
    color: 'from-purple-500 to-pink-500',
    tag: 'DATA_PULSE'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards for total peace of mind.',
    color: 'from-pink-500 to-rose-500',
    tag: 'SEC_VAULT'
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Go from concept to production in weeks, not months, with our proven implementation framework.',
    color: 'from-rose-500 to-orange-500',
    tag: 'FAST_TRACK'
  },
];

export default function NeuralServices() {
  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.4em]">Service_Matrix_v4</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Capabilities</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-xs font-light italic border-l border-blue-500/30 pl-6">
            Engineered to scale, designed to automate, built to last.
          </p>
        </div>

        {/* BENTO-STYLE MESH GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {services.map((service, index) => {
            // Logic to vary the span for a "Bento" look
            const spans = [
              "lg:col-span-7", "lg:col-span-5", 
              "lg:col-span-4", "lg:col-span-8", 
              "lg:col-span-6", "lg:col-span-6"
            ];

            return (
              <div
                key={service.title}
                className={`${spans[index]} group relative rounded-[2.5rem] border border-white/5 bg-[#0a0c14]/50 backdrop-blur-xl p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-500/[0.02]`}
              >
                {/* Interaction Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-blue-600/0 group-hover:from-blue-600/5 transition-all duration-700" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-12">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}>
                      <div className="w-full h-full rounded-[calc(1rem-1px)] bg-[#0a0c14] flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 group-hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">
                      {service.tag}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      Explore Component <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Decorative Tech Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 fill-current">
                        <path d="M100 0 L100 100 L0 100 Z" />
                    </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER CALLOUT */}
        <div className="mt-12 p-8 rounded-[2rem] border border-blue-500/10 bg-blue-500/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-mono text-slate-400">Ready for customized integration?</span>
            </div>
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                Request Architecture Audit
            </button>
        </div>
      </div>
    </section>
  );
}