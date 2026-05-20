import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bike,
  GraduationCap,
  Briefcase,
  Building2,
  CheckCircle2,
} from "lucide-react";

const Customers = () => {
  const [activeCustomer, setActiveCustomer] = useState(0);

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const targetCustomers = [
    {
      icon: <Bike className="w-8 h-8" />,
      role: "Delivery Riders",
      tag: "Food & Parcel Couriers",
      desc: "Protect your livelihood while making quick drop-offs.",
      benefits: [
        "Auto-arming when walking away",
        "Quick unlock on approach",
        "Tamper alerts to your smartwatch",
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      role: "Students",
      tag: "University & College",
      desc: "Secure your bike in crowded campus parking lots with absolute peace of mind.",
      benefits: [
        "Affordable student subscription tiers",
        "Loud physical alarm deterrents",
        "Location sharing with roommates",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      role: "Daily Commuters",
      tag: "Office Workers",
      desc: "Focus on your workday knowing your primary mode of transport is completely locked down.",
      benefits: [
        "Battery drain protection",
        "Secure underground parking tracking",
        "Automated daily logs",
      ],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      role: "Fleet Operators",
      tag: "Logistics & Rentals",
      desc: "Manage and track multiple vehicles simultaneously from a master dashboard.",
      benefits: [
        "Real-time multi-bike map view",
        "Remote engine killswitch",
        "Detailed rider analytics and history",
      ],
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#050505] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
            Built For Everyone
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Who Needs RideLockr?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you are riding to class, delivering orders, or managing a
            fleet, our IoT system scales to your exact security needs.
          </p>
        </motion.div>

        <div className="bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="w-full lg:w-1/3 bg-[#111111]/90 p-6 lg:p-8 border-r border-white/10 flex flex-col gap-4">
            {targetCustomers.map((customer, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCustomer(idx)}
                className={`relative flex items-center gap-5 rounded-2xl border px-4 py-5 text-left transition-all duration-300 ${
                  activeCustomer === idx
                    ? "border-[#39FF14]/30 bg-[#39FF14]/10 shadow-[inset_0_0_20px_rgba(57,255,20,0.08)]"
                    : "border-transparent bg-white/5 hover:border-white/10 hover:bg-white/10"
                }`}
              >
                {activeCustomer === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#39FF14] rounded-r-full" />
                )}
                <div
                  className={`relative z-10 p-3 rounded-2xl ${activeCustomer === idx ? "bg-[#39FF14] text-[#050505]" : "bg-[#111111] text-gray-400"}`}
                >
                  {customer.icon}
                </div>
                <div className="relative z-10">
                  <h4
                    className={`font-bold text-lg ${activeCustomer === idx ? "text-[#39FF14]" : "text-white"}`}
                  >
                    {customer.role}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1.5">
                    {customer.tag}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3 p-8 lg:p-16 relative overflow-hidden min-h-[500px] bg-[#050505]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] text-white/5 pointer-events-none"
            >
              {React.cloneElement(targetCustomers[activeCustomer].icon, {
                className: "w-full h-full",
              })}
            </motion.div>

            <motion.div
              key={activeCustomer}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm font-bold uppercase tracking-[0.28em] mb-8">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] animate-pulse" />
                {targetCustomers[activeCustomer].role} Solutions
              </div>

              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight max-w-xl">
                {targetCustomers[activeCustomer].desc}
              </h3>

              <div className="mt-10">
                <h4 className="text-gray-500 text-sm uppercase tracking-[0.35em] mb-6">
                  Security Benefits
                </h4>
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-5"
                >
                  {targetCustomers[activeCustomer].benefits.map(
                    (benefit, i) => (
                      <motion.div
                        variants={listItemVariants}
                        key={i}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39FF14]/10 text-[#39FF14]">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-gray-200 text-lg">{benefit}</span>
                      </motion.div>
                    ),
                  )}
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#39FF14] px-8 py-4 text-sm font-black uppercase tracking-[0.32em] text-black shadow-[0_0_30px_rgba(57,255,20,0.25)] transition hover:bg-[#32e010]"
              >
                View {targetCustomers[activeCustomer].role} Pricing
                <span className="text-xl">→</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
