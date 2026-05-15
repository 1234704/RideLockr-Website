import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, ShieldAlert, Map, Wrench, GraduationCap, Bike, Briefcase, Building2, CheckCircle2 } from 'lucide-react';

const RideLockrSections = () => {
 
  const [activeStep, setActiveStep] = useState(0);
  const [activeCustomer, setActiveCustomer] = useState(0);

  
  const workflowSteps = [
    { icon: <Wrench className="w-6 h-6" />, title: "Install Device", desc: "A quick, hidden 5-minute installation of the RideLockr IoT module under your motorcycle seat." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Pair the App", desc: "Sync the device to your smartphone via our secure, military-grade encrypted Bluetooth pairing." },
    { icon: <ShieldAlert className="w-6 h-6" />, title: "Activate Security", desc: "Arm your bike with a single tap. The engine immobilizer and highly sensitive vibration sensors go live." },
    { icon: <Map className="w-6 h-6" />, title: "Track 24/7", desc: "Monitor your bike's exact GPS location in real-time, anywhere in the world, directly from the dashboard." }
  ];

  const targetCustomers = [
    { 
      icon: <Bike className="w-6 h-6" />, 
      role: "Delivery Riders", 
      tag: "Food & Parcel Couriers",
      desc: "Protect your livelihood while making quick drop-offs.", 
      benefits: ["Auto-arming when walking away", "Quick unlock on approach", "Tamper alerts to your smartwatch"]
    },
    { 
      icon: <GraduationCap className="w-6 h-6" />, 
      role: "Students", 
      tag: "University & College",
      desc: "Secure your bike in crowded campus parking lots with absolute peace of mind.", 
      benefits: ["Affordable student subscription tiers", "Loud physical alarm deterrents", "Location sharing with roommates"]
    },
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      role: "Daily Commuters", 
      tag: "Office Workers",
      desc: "Focus on your workday knowing your primary mode of transport is completely locked down.", 
      benefits: ["Battery drain protection", "Secure underground parking tracking", "Automated daily logs"]
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      role: "Fleet Operators", 
      tag: "Logistics & Rentals",
      desc: "Manage and track multiple vehicles simultaneously from a master dashboard.", 
      benefits: ["Real-time multi-bike map view", "Remote engine killswitch", "Detailed rider analytics and history"]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans selection:bg-emerald-500/30">
      
    
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Seamless Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How RideLockr Protects You</h3>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Follow our simple step-by-step workflow to achieve total vehicle security.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-1/2 space-y-4">
              {workflowSteps.map((step, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    activeStep === idx 
                      ? 'bg-zinc-900 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                      : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      activeStep === idx ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${activeStep === idx ? 'text-emerald-400' : 'text-white'}`}>
                        {step.title}
                      </h4>
                      
                      <AnimatePresence>
                        {activeStep === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-zinc-400 leading-relaxed pt-2">{step.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            
            <div className="w-full lg:w-1/2">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="aspect-square max-h-[500px] w-full rounded-3xl bg-gradient-to-tr from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
              >
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                <div className="relative z-10 w-32 h-32 rounded-full bg-zinc-950 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.3)] mb-8">
                  {workflowSteps[activeStep].icon}
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-white mb-2">{workflowSteps[activeStep].title}</h3>
                <p className="relative z-10 text-emerald-500 font-mono text-sm tracking-widest uppercase">Step 0{activeStep + 1} Active</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Built For Everyone</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Who Needs RideLockr?</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Whether you are riding to class, delivering orders, or managing a fleet, our IoT system scales to your security needs.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            
            
            <div className="w-full lg:w-1/3 bg-zinc-950/50 p-6 border-r border-zinc-800/50 flex flex-col gap-2">
              {targetCustomers.map((customer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCustomer(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 text-left ${
                    activeCustomer === idx 
                      ? 'bg-emerald-500/10 border border-emerald-500/30' 
                      : 'border border-transparent hover:bg-zinc-900'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeCustomer === idx ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-900 text-zinc-400'}`}>
                    {customer.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeCustomer === idx ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {customer.role}
                    </h4>
                    <p className="text-xs font-mono text-zinc-500 uppercase mt-1">{customer.tag}</p>
                  </div>
                </button>
              ))}
            </div>

            
            <div className="w-full lg:w-2/3 p-8 lg:p-12 relative overflow-hidden flex items-center">
               
               <div className="absolute -bottom-10 -right-10 text-zinc-800/30 w-96 h-96 pointer-events-none">
                  {targetCustomers[activeCustomer].icon}
               </div>
               
              <motion.div
                key={activeCustomer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-6">
                  {targetCustomers[activeCustomer].role} Solutions
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight max-w-lg">
                  {targetCustomers[activeCustomer].desc}
                </h3>
                
                <div className="mt-8 space-y-4">
                  <h4 className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-4">Key Benefits</h4>
                  {targetCustomers[activeCustomer].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-zinc-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-10 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  Explore {targetCustomers[activeCustomer].role} Plan
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default RideLockrSections;