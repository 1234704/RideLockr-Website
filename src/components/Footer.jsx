import { motion } from 'framer-motion';
import { Check, X, Send } from 'lucide-react';

const Footer = () => {
  return (
    <section className="py-24 bg-[#050505] text-white px-6 border-t border-white/5">
      <div className="container mx-auto">
        
       
        <div className="mb-32 overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-3 p-8 border-b border-white/10 bg-white/5 font-black uppercase italic tracking-widest text-xs text-gray-500">
            <div>Feature</div>
            <div className="text-center">Basic Lock</div>
            <div className="text-center text-cyan-400">RideLockr</div>
          </div>
          
          {[
            { name: "Live Tracking", old: false, new: true },
            { name: "Remote Killswitch", old: false, new: true },
            { name: "Tamper Alerts", old: true, new: true },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-3 p-8 border-b border-white/5 items-center">
              <div className="font-bold uppercase text-sm">{item.name}</div>
              <div className="flex justify-center text-red-500/50">{item.old ? <Check size={20}/> : <X size={20}/>}</div>
              <div className="flex justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">{item.new ? <Check size={24} strokeWidth={3}/> : <X size={24}/>}</div>
            </div>
          ))}
        </div>

       
        <div className="text-center space-y-10">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-8xl font-black italic uppercase leading-none"
          >
            Ready to <span className="text-cyan-400">Upgrade?</span>
          </motion.h2>
          
          <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg">
            Join the community of protected riders. Get your RideLockr unit today and never worry about your bike again.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-white/5 border border-white/10 px-8 py-5 rounded-full w-full md:w-96 focus:outline-none focus:border-cyan-500 transition-all font-bold uppercase text-xs tracking-widest"
            />
            <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center gap-3">
              Join Waitlist <Send size={18} />
            </button>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 text-center text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
          © 2026 RIDELOCKR SYSTEM
        </div>
      </div>
    </section>
  );
};

export default Footer;