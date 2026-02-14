import { Star, Quote, Plus, ShieldCheck, MessageSquare, Terminal, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import AddTestimonialModal from './AddTestimonialModal';
import { parseSupabaseError, retryOperation } from '../utils/errorHandling';

export default function NeuralTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setIsLoading(true);
    try {
      const result = await retryOperation(async () => {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
      }, 3, 1000);

      setTestimonials(result && result.length > 0 ? result : defaultTestimonials);
    } catch (error) {
      setTestimonials(defaultTestimonials);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* 1. BACKGROUND GRID & BLUR */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] animate-pulse" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0z' fill='%23fff'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.4em]">Proof_Of_Execution</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Feedback</span>
            </h2>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all duration-500 hover:scale-105 shadow-2xl"
          >
            <Plus className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:rotate-90 transition-all" />
            <span className="text-xs font-black uppercase tracking-widest text-white">Broadcast Your Story</span>
          </button>
        </div>

        {/* 2. BENTO MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {testimonials.map((t, index) => {
            const spans = ["md:col-span-8", "md:col-span-4", "md:col-span-5", "md:col-span-7", "md:col-span-6", "md:col-span-6"];
            return (
              <div
                key={t.name + index}
                className={`${spans[index % 6]} group relative rounded-[2.5rem] border border-white/5 bg-[#0a0c14]/50 backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-500/[0.02]`}
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.03] group-hover:text-blue-500/10 transition-colors" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Verification Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Status: Verified_Impact</span>
                  </div>

                  <p className="text-xl md:text-2xl font-light text-slate-300 leading-tight mb-10 tracking-tight italic">
                    "{t.content}"
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src={t.image_url} 
                          alt={t.name}
                          className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10" 
                        />
                        <div className="absolute -bottom-1 -right-1 p-1 bg-blue-600 rounded-lg">
                          <TrendingUp className="w-2 h-2 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-tighter">{t.name}</h4>
                        <p className="text-[10px] font-mono text-blue-400/60 uppercase">{t.role} @ {t.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < t.rating ? 'text-blue-500 fill-blue-500' : 'text-slate-800'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. AGGREGATE STATS FOOTER */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-1 rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/5 p-1">
           {[
             { label: 'Client Satisfaction', value: '4.9/5', icon: Star },
             { label: 'Active Deployments', value: '500+', icon: Terminal },
             { label: 'Avg Efficiency Gain', value: '98%', icon: TrendingUp }
           ].map((stat, i) => (
             <div key={i} className="bg-[#050b1d] p-8 flex flex-col items-center justify-center group hover:bg-blue-600/10 transition-all">
                <stat.icon className="w-5 h-5 text-blue-500 mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-black text-white italic tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>

      <AddTestimonialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

const defaultTestimonials = [
  {
    name: 'Jennifer Thompson',
    role: 'CEO',
    company: 'TechVentures',
    content: 'NexaFlow AI transformed our customer service. We reduced response times by 80% and satisfaction is at an all-time high.',
    image_url: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'FinanceFlow',
    content: 'The automation workflows saved us 200+ hours monthly. The ROI was evident within the first quarter.',
    image_url: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Ops Director',
    company: 'RetailPro',
    content: 'Implementation was seamless. Our inventory management is now fully automated and error-free.',
    image_url: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  }
];