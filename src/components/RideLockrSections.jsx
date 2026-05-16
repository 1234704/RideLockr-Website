import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, ShieldAlert, Map, Wrench, GraduationCap, Bike, Briefcase, Building2, CheckCircle2 } from 'lucide-react';

const RideLockrSections = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCustomer, setActiveCustomer] = useState(0);

 
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

 
  const workflowSteps = [
    { icon: <Wrench className="w-6 h-6" />, title: "Install Device", desc: "A quick, hidden 5-minute installation of the RideLockr IoT module under your motorcycle seat." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Pair the App", desc: "Sync the device to your smartphone via our secure, military-grade encrypted Bluetooth pairing." },
    { icon: <ShieldAlert className="w-6 h-6" />, title: "Activate Security", desc: "Arm your bike with a single tap. The engine immobilizer and highly sensitive vibration sensors go live." },
    { icon: <Map className="w-6 h-6" />, title: "Track 24/7", desc: "Monitor your bike's exact GPS location in real-time, anywhere in the world, directly from the dashboard." }
  ];

  const targetCustomers = [
    { 
      icon: <Bike className="w-8 h-8" />, 
      role: "Delivery Riders", 
      tag: "Food & Parcel Couriers",
      desc: "Protect your livelihood while making quick drop-offs.", 
      benefits: ["Auto-arming when walking away", "Quick unlock on approach", "Tamper alerts to your smartwatch"]
    },
    { 
      icon: <GraduationCap className="w-8 h-8" />, 
      role: "Students", 
      tag: "University & College",
      desc: "Secure your bike in crowded campus parking lots with absolute peace of mind.", 
      benefits: ["Affordable student subscription tiers", "Loud physical alarm deterrents", "Location sharing with roommates"]
    },
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      role: "Daily Commuters", 
      tag: "Office Workers",
      desc: "Focus on your workday knowing your primary mode of transport is completely locked down.", 
      benefits: ["Battery drain protection", "Secure underground parking tracking", "Automated daily logs"]
    },
    { 
      icon: <Building2 className="w-8 h-8" />, 
      role: "Fleet Operators", 
      tag: "Logistics & Rentals",
      desc: "Manage and track multiple vehicles simultaneously from a master dashboard.", 
      benefits: ["Real-time multi-bike map view", "Remote engine killswitch", "Detailed rider analytics and history"]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-emerald-500/30">
      
     
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <motion.div 
          aanimate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Seamless Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How RideLockr Protects You</h3>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Follow our simple step-by-step workflow to achieve total vehicle security.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
          
            <div className="w-full lg:w-1/2 relative">
              
              <div className="absolute left-[38px] top-6 bottom-6 w-[2px] bg-zinc-800 z-0 hidden sm:block"></div>
              
              <motion.div 
                className="absolute left-[38px] top-6 w-[2px] bg-emerald-500 z-0 hidden sm:block shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                animate={{ height: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <div className="space-y-6 relative z-10">
                {workflowSteps.map((step, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="w-full text-left focus:outline-none group"
                  >
                    <div className={`p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm ${
                      activeStep === idx 
                        ? 'bg-zinc-900/80 border-emerald-500/50 shadow-[0_8px_30px_rgba(16,185,129,0.15)] transform scale-[1.02]' 
                        : 'bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50'
                    }`}>
                      <div className="flex items-start gap-6">
                        <div className={`mt-1 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                          activeStep === idx 
                            ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                            : 'bg-zinc-950 border-2 border-zinc-800 text-zinc-500 group-hover:border-zinc-600'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-xl font-bold mb-2 transition-colors ${activeStep === idx ? 'text-emerald-400' : 'text-white'}`}>
                            {step.title}
                          </h4>
                          <AnimatePresence initial={false}>
                            {activeStep === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-zinc-400 leading-relaxed pt-2">{step.desc}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: 15 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  className="aspect-square max-h-[500px] w-full rounded-[2.5rem] bg-gradient-to-tr from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                  
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-40 h-40 rounded-full bg-zinc-950 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_80px_rgba(16,185,129,0.2)] mb-8"
                  >
                    {React.cloneElement(workflowSteps[activeStep].icon, { className: "w-16 h-16" })}
                  </motion.div>
                  <h3 className="relative z-10 text-3xl font-bold text-white mb-3">{workflowSteps[activeStep].title}</h3>
                  <p className="relative z-10 text-emerald-500 font-mono text-sm tracking-widest uppercase bg-emerald-500/10 px-4 py-1 rounded-full">Phase 0{activeStep + 1}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>


      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/20 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Built For Everyone</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Who Needs RideLockr?</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Whether you are riding to class, delivering orders, or managing a fleet, our IoT system scales to your exact security needs.
            </p>
          </motion.div>

          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            
            <div className="w-full lg:w-1/3 bg-zinc-950/80 p-6 lg:p-8 border-r border-zinc-800 flex flex-col gap-3">
              {targetCustomers.map((customer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCustomer(idx)}
                  className={`flex items-center gap-5 p-4 lg:p-5 rounded-2xl transition-all duration-300 text-left relative overflow-hidden ${
                    activeCustomer === idx 
                      ? 'bg-emerald-500/10 border border-emerald-500/30 shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]' 
                      : 'border border-transparent hover:bg-zinc-900'
                  }`}
                >
                  
                  {activeCustomer === idx && (
                    <motion.div layoutId="activeTab" className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500" />
                  )}
                  
                  <div className={`p-3 rounded-xl transition-colors duration-300 ${activeCustomer === idx ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-900 text-zinc-400'}`}>
                    {customer.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeCustomer === idx ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {customer.role}
                    </h4>
                    <p className="text-xs font-mono text-zinc-500 uppercase mt-1.5">{customer.tag}</p>
                  </div>
                </button>
              ))}
            </div>

            
            <div className="w-full lg:w-2/3 p-8 lg:p-16 relative overflow-hidden flex items-center min-h-[500px]">
               
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute -bottom-20 -right-20 text-zinc-800/20 w-[30rem] h-[30rem] pointer-events-none"
               >
                  {React.cloneElement(targetCustomers[activeCustomer].icon, { className: "w-full h-full" })}
               </motion.div>
               
              <motion.div
                key={activeCustomer}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-8">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {targetCustomers[activeCustomer].role} Solutions
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight max-w-xl">
                  {targetCustomers[activeCustomer].desc}
                </h3>
                
                <div className="mt-10">
                  <h4 className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">Security Benefits</h4>
                  <motion.div 
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                    className="space-y-5"
                  >
                    {targetCustomers[activeCustomer].benefits.map((benefit, i) => (
                      <motion.div variants={listItemVariants} key={i} className="flex items-center gap-4">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        </div>
                        <span className="text-zinc-300 text-lg">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-colors shadow-[0_0_30px_rgba(16,185,129,0.25)] flex items-center gap-2"
                >
                  View {targetCustomers[activeCustomer].role} Pricing
                  <span className="text-xl">→</span>
                </motion.button>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default RideLockrSections;