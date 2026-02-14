import { Mail, MapPin, Phone, Send, Loader, Cpu, Globe, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { parseSupabaseError, retryOperation, ErrorType } from '../utils/errorHandling';

export default function NeuralContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await retryOperation(async () => {
        const { error: supabaseError } = await supabase
          .from('contacts')
          .insert([formData]);
        if (supabaseError) throw supabaseError;
      }, 3, 1000);

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const parsedError = parseSupabaseError(err as Error);
      setError(parsedError.userMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* 1. CYBERNETIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-500/50" />
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em] font-black">Transmission_Uplink</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600">Connection</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* 2. ENCRYPTED FORM MODULE */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative bg-[#0a0c14]/80 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              {success && (
                <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
                  <ShieldCheck className="text-emerald-500" />
                  <p className="text-emerald-400 text-sm font-mono tracking-tight">DATA_SENT: Message established in secure buffer.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Entity_Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-700"
                      placeholder="e.g. Protocol 01"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Direct_Relay</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-700"
                      placeholder="name@domain.ai"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Organization_Tag</label>
                  <input
                    type="text" name="company" value={formData.company} onChange={handleChange} required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-700"
                    placeholder="Global Systems Inc."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Payload_Content</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={4} required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none placeholder:text-slate-700"
                    placeholder="Initialize project details..."
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full group relative overflow-hidden bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all hover:bg-blue-500 active:scale-[0.98] disabled:opacity-50"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? <Loader className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4 fill-current" />}
                    {loading ? 'Executing_Transfer...' : 'Initiate_Uplink'}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </form>
            </div>
          </div>

          {/* 3. HARDWARE INFO CARDS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-4">
              {[
                { label: 'Neural_Mail', value: 'contact@nexaflow.ai', icon: Mail, color: 'text-blue-400' },
                { label: 'Voice_Node', value: '+1 (555) 123-4567', icon: Phone, color: 'text-indigo-400' },
                { label: 'Physical_Core', value: 'San Francisco, CA 94105', icon: MapPin, color: 'text-purple-400' },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-sm font-bold text-white tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ENTERPRISE MODULE */}
            <div className="relative p-8 rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5 overflow-hidden group">
              <Cpu className="absolute -right-8 -bottom-8 w-32 h-32 text-blue-500/10 group-hover:text-blue-500/20 group-hover:rotate-12 transition-all duration-700" />
              <div className="relative z-10">
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-3">Enterprise_Scale</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Require a dedicated neural cluster or custom LLM orchestration? Our senior architects are on standby.
                </p>
                <button className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-blue-300 transition-colors">
                  Open_Consultation_Channel <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            {/* NETWORK STATUS DECORATION */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] rounded-full border border-white/5">
               <div className="flex items-center gap-4">
                 <div className="flex gap-1">
                   {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-3 bg-blue-500 rounded-full" />)}
                 </div>
                 <span className="text-[8px] font-mono text-slate-500 uppercase">Signal: Maximum</span>
               </div>
               <span className="text-[8px] font-mono text-emerald-500 uppercase animate-pulse">● System_Online</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}