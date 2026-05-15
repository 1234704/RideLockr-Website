import { motion } from 'framer-motion';
import { Activity, Battery, Zap, Globe } from 'lucide-react';

const AnalyticsGrid = () => {
  // Static heights taake Math.random ka jhamela hi khatam ho jaye
  const staticHeights = [40, 70, 45, 90, 65, 30, 85, 50, 75, 40, 60, 80, 35, 55, 70, 45, 90, 65, 30, 85, 50, 75, 40, 60, 80, 35, 55, 70, 45, 90, 65, 30, 85, 50, 75, 40, 60, 80, 35, 55];

  const stats = [
    { label: "Signal Strength", value: "98%", icon: <Globe size={16} />, color: "text-[#39FF14]" },
    { label: "Battery Level", value: "85%", icon: <Battery size={16} />, color: "text-yellow-400" },
    { label: "System Health", value: "Optimal", icon: <Activity size={16} />, color: "text-[#39FF14]" },
    { label: "Response Time", value: "12ms", icon: <Zap size={16} />, color: "text-blue-400" },
  ];

  return (
    <section className="py-20 bg-[#050505] px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#39FF14]/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-black border border-white/5 ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Live Data</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Graph Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-10 rounded-[2rem] bg-gradient-to-r from-gray-900 to-black border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h4 className="text-[#39FF14] font-mono text-xs uppercase tracking-[0.4em] mb-4">Network Connectivity Matrix</h4>
            <div className="h-32 flex items-end gap-1">
              {staticHeights.map((h, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [20, h, 20] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, // Fixed duration
                    delay: i * 0.05,
                    ease: "easeInOut"
                  }}
                  className="flex-1 bg-[#39FF14]/20 rounded-t-sm"
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsGrid;