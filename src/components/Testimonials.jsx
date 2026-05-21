import { motion } from "framer-motion";
import { Star } from "lucide-react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ali Raza",
    role: "Delivery Rider",
    comment:
      "RideLock saved my bike from being stolen. Real-time alert helped me take immediate action. Best security system ever!",
    rating: 5,
    image: img1,
  },
  {
    id: 2,
    name: "Zainab Salman",
    role: "Student",
    comment:
      "GPS tracking is very accurate. I always know exactly where my bike is. Highly recommended!",
    rating: 5,
    image: img3,
  },
  {
    id: 3,
    name: "Hasan Ali",
    role: "Daily Commuter",
    comment:
      "Geo-fencing feature is amazing. Whenever my bike leaves the designated area, I get instant alerts. Complete peace of mind!",
    rating: 5,
    image: img2,
  },
];

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

const Testimonials = () => {
  return (
    <section className="py-28 px-6 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
            Customer Reviews
          </h2>
          <h2 className="section-title text-4xl md:text-5xl">
            What Riders Say About RideLockr
          </h2>
          <p className="section-sub mt-4 mx-auto max-w-2xl">
            Trusted by real riders who want fast, secure, and intelligent
            motorcycle protection.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#39FF14]">
                    {testimonial.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    {testimonial.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-5 p-8">
                <div className="flex items-center gap-2 text-[#39FF14]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-16">
            <p className="section-badge mb-4">Coming Soon</p>
            <h2 className="section-title text-4xl md:text-5xl">
              What’s Next for RideLockr
            </h2>
            <p className="section-sub mt-4 mx-auto max-w-2xl">
              more autonomous.
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
      </div>
    </section>
  );
};

export default Testimonials;
