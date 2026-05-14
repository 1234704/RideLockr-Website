const features = [
  {
    icon: "📍",
    title: "Real-Time GPS Tracking",
    description: "Track your motorcycle live on map, anytime anywhere."
  },
  {
    icon: "🚨",
    title: "Theft Alerts",
    description: "Instant alerts on your phone if someone touches your bike."
  },
  {
    icon: "🔒",
    title: "Remote Engine Immobilizer",
    description: "Lock your engine remotely with one tap from the app."
  },
  {
    icon: "📐",
    title: "Geo-Fencing",
    description: "Set a safe zone — get alert if bike leaves that area."
  },
  {
    icon: "🔔",
    title: "Live Notifications",
    description: "Real-time push notifications for every security event."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-400">Key Features</h2>
          <p className="text-gray-400 mt-3 text-lg">
            Everything you need to keep your ride safe
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 
                         hover:border-green-400 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;