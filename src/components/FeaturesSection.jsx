import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "📍",
    title: "Real-Time GPS Tracking",
    description: "Monitor your motorcycle's exact location live on an interactive map — 24/7, from anywhere in the world.",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: "🚨",
    title: "Theft Alerts",
    description: "Receive instant push notifications the moment unauthorized movement or tampering is detected.",
    color: "from-red-500 to-orange-400"
  },
  {
    icon: "🔒",
    title: "Remote Engine Immobilizer",
    description: "Disable your motorcycle's engine remotely with a single tap — preventing theft in real time.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: "📐",
    title: "Geo-Fencing",
    description: "Define a virtual safety boundary. Get alerted immediately if your bike exits the designated zone.",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: "🔔",
    title: "Live Notifications",
    description: "Stay informed with real-time alerts for every security event — delivered instantly to your device.",
    color: "from-yellow-500 to-amber-400"
  },
];
const FeatureCard = ({ feature, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
  const timer = setTimeout(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, 100);
  return () => clearTimeout(timer);
}, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`bg-gray-800 rounded-2xl p-6 border border-gray-700 
                  hover:border-green-400 hover:scale-105 hover:shadow-lg 
                  hover:shadow-green-500/20 transition-all duration-500 cursor-pointer
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Icon with gradient bg */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} 
                       flex items-center justify-center text-2xl mb-5 shadow-lg`}>
        {feature.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

      {/* Bottom accent line */}
      <div className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${feature.color} 
                       transition-all duration-500 group-hover:w-full rounded-full`} />
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">
            Why RideLockr?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Key <span className="text-green-400">Features</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Everything you need to keep your motorcycle safe and under control
          </p>
          {/* Divider */}
          <div className="w-16 h-1 bg-green-400 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;