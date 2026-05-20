import { motion } from "framer-motion";
import { Shield, MapPin, Smartphone } from "lucide-react";
import gpsTrackImg from "../assets/gps-track.jpg";
import bikeLockImg from "../assets/bike-lock.jpg";
import phoneNotifImg from "../assets/phone-notif.jpg";

const Features = () => {
  const featureList = [
    {
      title: "Real-Time GPS Tracking",
      desc: "Track your motorcycle's exact live location on high-precision maps with zero latency, ensuring you always know where your ride is parked.",
      badge: "HIGH RISK ⚠️",
      icon: <MapPin size={18} />,
      img: gpsTrackImg,
      accent: "from-[#39FF14]/20 to-transparent",
      borderColor: "group-hover:border-[#39FF14]/30",
    },
    {
      title: "Remote Immobilizer",
      desc: "Kill or restore your motorcycle's engine ignition instantly from anywhere in the world with a single secured tap inside the RideLockr app.",
      badge: "SMART SHIELD 🛡️",
      icon: <Shield size={18} />,
      img: bikeLockImg,
      accent: "from-[#39FF14]/10 to-transparent",
      borderColor: "group-hover:border-[#39FF14]/30",
    },
    {
      title: "Instant Threat Alerts",
      desc: "Receive immediate high-priority alerts on your smartphone the exact second any unauthorized movement, speed violation, or tampering is detected.",
      badge: "GLOBAL VISION 🔮",
      icon: <Smartphone size={18} />,
      img: phoneNotifImg,
      accent: "from-[#39FF14]/15 to-transparent",
      borderColor: "group-hover:border-[#39FF14]/30",
    },
  ];

  return (
    <section id="features" className="py-28 bg-[#050505] text-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
            Advanced Features
          </h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-5xl md:text-7xl leading-none"
          >
            Advanced security for modern riders
          </motion.h2>

          <p className="section-sub mx-auto mt-3 text-xs md:text-sm font-medium max-w-lg">
            Cutting-edge hardware paired with intelligent software to keep your
            motorcycle unstealable.
          </p>
        </div>

        <div className="space-y-8">
          {featureList.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group min-h-[380px] grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 transition-all duration-500 ${feat.borderColor} overflow-hidden`}
            >
              <div className="p-8 md:p-12 lg:col-span-5 flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-gray-500 bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full uppercase mb-8">
                    {feat.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-white mb-4 flex items-center gap-3">
                    <span className="text-[#39FF14]">{feat.icon}</span>
                    {feat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between text-xs font-mono tracking-wider text-gray-500 group-hover:text-[#39FF14] transition-colors">
                  <span>SYSTEM OVERVIEW</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 relative min-h-[250px] lg:min-h-full overflow-hidden bg-neutral-950">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${feat.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none`}
                />
                <img
                  src={feat.img}
                  alt={feat.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.02] transition-all duration-700 select-none pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
