import { motion } from 'framer-motion';
import { MapPin, Power, BellRing, Navigation } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <MapPin />, title: "Live GPS", desc: "Track your ride in real-time with meter-level precision." },
    { icon: <Power />, title: "Engine Kill", desc: "Shut down the engine remotely via your phone if theft is detected." },
    { icon: <BellRing />, title: "Smart Alerts", desc: "Instant notifications for vibration, towing, or battery tampering." },
  ];

  return (
    <section className="py-24 bg-[#050505] text-white px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Interactive Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-8 rounded-[3rem] bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
          >
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-black italic uppercase tracking-widest text-cyan-400">Live Status</h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-xs font-mono text-green-500 uppercase">System Online</span>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="h-64 bg-gray-800/50 rounded-2xl mb-6 border border-white/5 flex items-center justify-center overflow-hidden relative">
               <Navigation className="text-cyan-500 rotate-45" size={40} />
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <p className="absolute bottom-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Awaiting GPS Lock...</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 font-bold uppercase text-xs hover:bg-red-500 hover:text-white transition-all">Emergency Kill</button>
              <button className="py-4 bg-cyan-500 text-black rounded-xl font-bold uppercase text-xs hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">Track Location</button>
            </div>
          </motion.div>

          {/* Right: Features List */}
          <div className="space-y-12">
            <h2 className="text-5xl font-black italic uppercase leading-none">The <span className="text-cyan-400">Core</span> <br /> Intelligence.</h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 group cursor-default"
                >
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-bold uppercase italic mb-1">{f.title}</h5>
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;