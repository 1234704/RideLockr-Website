import { motion } from "framer-motion";

const futureFeatures = [
  {
    id: 1,
    icon: "🧠",
    title: "AI Theft Prediction",
    description:
      "Machine learning detects suspicious movement patterns and alerts you before theft happens.",
  },
  {
    id: 2,
    icon: "🔋",
    title: "Solar Charging Support",
    description:
      "Device charges in sunlight with 7 days battery backup without any external power.",
  },
  {
    id: 3,
    icon: "🎙️",
    title: "Voice Control",
    description:
      "Say 'Lock my bike' and the remote immobilizer activates instantly.",
  },
  {
    id: 4,
    icon: "🆘",
    title: "Emergency SOS",
    description:
      "One-touch alert sends instant notification to family and police with live location.",
  },
];

const FuturePlaceholder = () => {
  return (
    <section className="py-28 px-6 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="section-badge mb-4">Coming Soon</p>
          <h2 className="section-title text-4xl md:text-5xl">
            What’s Next for RideLockr
          </h2>
          <p className="section-sub mt-4 mx-auto max-w-2xl">
            Future features designed to make your ride smarter, safer, and more
            autonomous.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {futureFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl hover:border-[#39FF14]/30 hover:bg-white/10"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-[#0a0a0a] text-3xl text-[#39FF14] mb-8 shadow-[0_0_20px_rgba(57,255,20,0.12)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#39FF14] font-black">
                Coming Soon
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturePlaceholder;
