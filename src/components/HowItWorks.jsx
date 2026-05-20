import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ShieldAlert, Map, Wrench } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Install Device",
      desc: "A quick, hidden 5-minute installation of the RideLockr IoT module under your motorcycle seat.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Pair the App",
      desc: "Sync the device to your smartphone via our secure, military-grade encrypted Bluetooth pairing.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Activate Security",
      desc: "Arm your bike with a single tap. The engine immobilizer and highly sensitive vibration sensors go live.",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Track 24/7",
      desc: "Monitor your bike's exact GPS location in real-time, anywhere in the world, directly from the dashboard.",
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-[#050505] text-white">
      <div className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/10 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
            Seamless Workflow
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            How RideLockr Protects You
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Follow our simple step-by-step workflow to achieve total vehicle
            security.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute left-[38px] top-6 bottom-6 hidden sm:block w-[2px] bg-white/10" />
            <motion.div
              className="absolute left-[38px] top-6 hidden sm:block w-[2px] bg-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.25)] z-0"
              animate={{
                height: `${(activeStep / (workflowSteps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="space-y-6 relative z-10">
              {workflowSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="w-full text-left focus:outline-none group"
                >
                  <div
                    className={`p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm ${
                      activeStep === idx
                        ? "bg-white/5 border-[#39FF14]/30 shadow-[0_8px_30px_rgba(57,255,20,0.12)] scale-[1.02]"
                        : "bg-white/5/20 border-white/5 hover:border-[#39FF14]/30 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`mt-1 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                          activeStep === idx
                            ? "bg-[#39FF14] text-[#050505] shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                            : "bg-[#050505] border-2 border-white/10 text-gray-400 group-hover:border-[#39FF14]/30"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`text-xl font-bold mb-2 ${activeStep === idx ? "text-[#39FF14]" : "text-white"}`}
                        >
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
                              <p className="text-gray-400 leading-relaxed pt-2">
                                {step.desc}
                              </p>
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
                initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.02, rotateY: 10 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                className="aspect-square max-h-[500px] w-full rounded-[2.5rem] bg-[#111111] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-[#050505] border-2 border-[#39FF14]/30 text-[#39FF14] shadow-[0_0_80px_rgba(57,255,20,0.2)] mb-8"
                >
                  {React.cloneElement(workflowSteps[activeStep].icon, {
                    className: "w-16 h-16",
                  })}
                </motion.div>
                <h3 className="relative z-10 text-3xl font-black text-white mb-3 text-center">
                  {workflowSteps[activeStep].title}
                </h3>
                <p className="relative z-10 text-[#39FF14] font-mono text-sm tracking-widest uppercase bg-[#39FF14]/10 px-4 py-2 rounded-full">
                  Phase 0{activeStep + 1}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
