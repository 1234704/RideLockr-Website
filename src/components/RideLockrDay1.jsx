import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldAlert, Map, Wrench, GraduationCap, Bike, Briefcase, Building2 } from 'lucide-react';

const RideLockrDay1 = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

 
  const workflowSteps = [
    { icon: <Wrench className="w-8 h-8" />, title: "Install the Device", desc: "A quick, hidden installation of the RideLockr IoT module on your motorcycle." },
    { icon: <Smartphone className="w-8 h-8" />, title: "Pair the App", desc: "Sync the device to your smartphone via our secure, encrypted Bluetooth pairing." },
    { icon: <ShieldAlert className="w-8 h-8" />, title: "Activate Security", desc: "Arm your bike with a tap. The engine immobilizer and vibration sensors go live." },
    { icon: <Map className="w-8 h-8" />, title: "Track 24/7", desc: "Monitor your bike's exact GPS location in real-time, anywhere in the world." }
  ];

  const targetCustomers = [
    { icon: <Bike className="w-8 h-8" />, role: "Delivery Riders", desc: "Protect your livelihood while making quick drop-offs.", highlight: "Food & Parcel Couriers" },
    { icon: <GraduationCap className="w-8 h-8" />, role: "Students", desc: "Secure your bike in crowded campus parking lots with absolute peace of mind.", highlight: "University & College" },
    { icon: <Briefcase className="w-8 h-8" />, role: "Daily Commuters", desc: "Focus on your workday knowing your primary mode of transport is locked down.", highlight: "Office Workers" },
    { icon: <Building2 className="w-8 h-8" />, role: "Fleet Operators", desc: "Manage and track multiple vehicles simultaneously from a master dashboard.", highlight: "Logistics & Rentals" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-emerald-500/30">
      
     
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Seamless Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How RideLockr Protects You</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
          
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-zinc-800 z-0">
              <div className="h-full bg-emerald-500/50 w-full animate-pulse"></div>
            </div>

            {workflowSteps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500 mb-6 group-hover:border-emerald-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 relative">
                 
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 text-zinc-950 font-bold flex items-center justify-center text-sm border-4 border-zinc-950">
                    {idx + 1}
                  </div>
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

   
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Built For Everyone</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Who Needs RideLockr?</h3>
            </div>
            <p className="text-zinc-400 max-w-md">
              Whether you are riding to class, delivering orders, or managing a fleet, our IoT system scales to your security needs.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {targetCustomers.map((customer, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors group cursor-pointer"
              >
                <div className="bg-zinc-950 w-14 h-14 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  {customer.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{customer.role}</h4>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{customer.desc}</p>
                
                
                <div className="pt-4 border-t border-zinc-800/50">
                  <span className="text-xs font-mono text-emerald-500/70 uppercase tracking-wider group-hover:text-emerald-400 transition-colors">
                    {customer.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default RideLockrDay1;