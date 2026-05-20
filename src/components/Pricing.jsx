import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RideLockr = () => {
  const [yearly, setYearly] = useState(false);
  const navigate = useNavigate();

  const togglePricing = () => {
    setYearly(!yearly);
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-[#050505] text-white">
      <div className="mx-auto mb-20 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

<section id="pricing" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#39FF14]/10 blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
              Pricing
            </h2>

            <h2 className="section-title mt-6 text-4xl md:text-6xl leading-tight">
              Simple, Transparent <br />
              <span className="text-[#39FF14]">Plans for Every Rider</span>
            </h2>
            <p className="section-sub mt-6 text-gray-400">
              Choose the plan that fits your lifestyle. No hidden fees. Cancel
              anytime.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-2xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <button
                  className={`text-[11px] uppercase tracking-widest ${!yearly ? "text-[#39FF14]" : "text-gray-500"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={togglePricing}
                  className="relative inline-flex h-9 w-16 items-center rounded-full border border-white/10 bg-white/5 p-1 transition-all duration-300"
                  aria-label="Toggle pricing"
                >
                  <span
                    className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-[#39FF14] transition-transform duration-300 ${yearly ? "translate-x-7" : "translate-x-0"}`}
                  />
                </button>
                <button
                  className={`text-[11px] uppercase tracking-widest ${yearly ? "text-[#39FF14]" : "text-gray-500"}`}
                >
                  Yearly
                </button>
              </div>
              <span className="inline-flex items-center justify-center rounded-full bg-[#39FF14]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#39FF14]">
                Save 17%
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  tier: "Starter",
                  name: "Basic",
                  desc: "Essential security for individual riders on a budget.",
                  price: yearly ? 249 : 299,
                  features: [
                    "Real-time GPS Tracking",
                    "Theft Alerts",
                    "Mobile App Access",
                  ],
                  extra: [
                    "Remote Immobilizer",
                    "Geo-fencing",
                    "Trip History (7 days)",
                    "Priority Support",
                  ],
                  button: { label: "Get Started", style: "secondary" },
                },
                {
                  tier: "Most Popular",
                  name: "Pro",
                  desc: "Full-featured security for daily riders and delivery professionals.",
                  price: yearly ? 499 : 599,
                  features: [
                    "Real-time GPS Tracking",
                    "Theft Alerts",
                    "Mobile App Access",
                    "Remote Immobilizer",
                    "Geo-fencing",
                    "Trip History (30 days)",
                  ],
                  extra: ["Priority Support"],
                  featured: true,
                  button: { label: "Start Free Trial", style: "primary" },
                },
                {
                  tier: "Enterprise",
                  name: "Fleet",
                  desc: "Scalable management for businesses with multiple vehicles.",
                  price: yearly ? 1199 : 1499,
                  features: [
                    "Real-time GPS Tracking",
                    "Theft Alerts",
                    "Mobile App Access",
                    "Remote Immobilizer",
                    "Geo-fencing (Unlimited)",
                    "Trip History (Unlimited)",
                    "Dedicated Support",
                  ],
                  button: { label: "Contact Sales", style: "secondary" },
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] border p-8 transition-all duration-300 ${plan.featured ? "border-[#39FF14]/40 bg-gradient-to-br from-[#081008] to-[#0d0d0d] shadow-[0_30px_80px_rgba(57,255,20,0.12)]" : "border-white/10 bg-[#0d0d0d] hover:border-[#39FF14]/30"}`}
                >
                  {plan.featured && (
                    <div className="mb-6 inline-flex rounded-full bg-[#39FF14] px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-black">
                      POPULAR
                    </div>
                  )}
                  <div className="text-[11px] font-black uppercase tracking-[0.35em] text-[#39FF14] mb-2">
                    {plan.tier}
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {plan.desc}
                  </p>

                  <div className="mb-6 flex items-end gap-2">
                    <span className="text-[#39FF14] text-lg font-black">
                      Rs
                    </span>
                    <span className="text-5xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/mo</span>
                  </div>

                  <div className="mb-8 border-b border-white/10 pb-6 text-gray-400">
                    Device: <span className="text-white">Rs 4,999</span>{" "}
                    one-time
                  </div>

                  <ul className="space-y-3 mb-8 text-gray-400">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-white"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#39FF14]/15 text-[#39FF14] text-sm">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                    {(plan.extra || []).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-500"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-gray-500 text-sm">
                          ✕
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={navigateToContact}
                    className={`w-full rounded-full px-6 py-4 text-sm font-black uppercase tracking-[0.32em] transition ${plan.button.style === "primary" ? "bg-[#39FF14] text-black hover:bg-[#32e010]" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}
                  >
                    {plan.button.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-2xl">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                  RideLockr Hardware Device
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  The compact IoT module installs in under 30 minutes on any
                  motorcycle. Weatherproof, tamper-resistant, and powered by
                  your bike&apos;s battery.
                </p>
              </div>
              <div className="flex flex-col gap-6 justify-between rounded-[1.75rem] border border-white/10 bg-[#111111] p-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-2">
                    One-time purchase
                  </div>
                  <div className="text-5xl font-black text-[#39FF14]">
                    Rs 4,999
                  </div>
                  <p className="mt-2 text-gray-400">
                    Free installation included
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={navigateToContact}
                    className="rounded-full border border-[#39FF14]/20 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14] hover:bg-[#39FF14]/10 transition"
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    onClick={navigateToContact}
                    className="rounded-full bg-[#39FF14] px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-black hover:bg-[#32e010] transition"
                  >
                    Order Device
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RideLockr;
