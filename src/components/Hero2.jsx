import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Send, CheckCircle } from "lucide-react";

const Hero2 = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoinWaitlist = (e) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) return;

    // Browser already validates `type="email"`, but keep this guard anyway.
    setSubmitted(true);
    setEmail("");

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-[#050505] text-white px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-32 overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-3 p-8 border-b border-white/10 bg-white/5 font-black uppercase italic tracking-widest text-xs text-gray-500">
            <div>Feature</div>
            <div className="text-center">Basic Lock</div>
            <div className="text-center text-[#39FF14]">RideLockr</div>
          </div>

          {[
            { name: "Live Tracking", old: false, new: true },
            { name: "Remote Killswitch", old: false, new: true },
            { name: "Tamper Alerts", old: true, new: true },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 p-8 border-b border-white/5 items-center"
            >
              <div className="font-bold uppercase text-sm text-white">
                {item.name}
              </div>
              <div className="flex justify-center text-red-500/50">
                {item.old ? <Check size={20} /> : <X size={20} />}
              </div>
              <div className="flex justify-center text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.18)]">
                {item.new ? (
                  <Check size={24} strokeWidth={3} />
                ) : (
                  <X size={24} />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-10">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="section-title text-5xl md:text-8xl leading-none"
          >
            Ready to <span className="text-[#39FF14]">Upgrade?</span>
          </motion.h2>

          <p className="section-sub max-w-xl mx-auto font-medium text-lg">
            Join the community of protected riders. Get your RideLockr unit
            today and never worry about your bike again.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-12 max-w-xl mx-auto">
              <CheckCircle size={56} className="text-[#39FF14]" />
              <h3 className="text-3xl font-black text-white">
                You’re on the waitlist!
              </h3>
              <p className="text-gray-400 text-sm">
                Thanks! We’ll email you when RideLockr is ready.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleJoinWaitlist}
              className="flex flex-col md:flex-row justify-center items-center gap-6"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="w-full md:w-96 rounded-full border border-white/10 bg-[#0a0a0a] px-8 py-5 text-xs font-black uppercase tracking-widest text-white outline-none focus:border-[#39FF14] transition"
              />
              <button className="flex items-center gap-3 rounded-full bg-[#39FF14] px-12 py-5 text-sm font-black uppercase tracking-widest text-black transition hover:bg-[#2fd814]">
                Join Waitlist <Send size={18} />
              </button>
            </form>
          )}
        </div>

        {/* <div className="mt-32 pt-8 border-t border-white/5 text-center text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
          © 2026 RIDELOCKR SYSTEM
        </div> */}
      </div>
    </section>
  );
};

export default Hero2;
