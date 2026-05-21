import { useEffect, useRef } from "react";
import gsap from "gsap";
import bikeImg from "../assets/bike.jpg";

const AboutPage = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-element", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, aboutRef);

    window.scrollTo(0, 0);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative pt-32 pb-24 bg-[#050505] overflow-hidden font-sans"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39FF14]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="about-element relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 p-12 rounded-3xl h-[450px] overflow-hidden">
              {/* Image */}
              <img
                src={bikeImg}
                alt="Bike"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end">
                <h4 className="text-[#39FF14] text-xs font-black tracking-[0.4em] uppercase mb-6">
                  Our Core Vision
                </h4>
                <p className="text-white text-3xl md:text-4xl font-light leading-snug">
                  "Eliminating the threat of vehicle theft through seamless IoT
                  integration."
                </p>
                <div className="mt-10 w-20 h-[2px] bg-[#39FF14]"></div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
              About RideLockr
            </h2>

            <h2 className="about-element section-title text-5xl md:text-7xl leading-none">
              Your Ride. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                Our Priority.
              </span>
            </h2>

            <div className="about-element space-y-6">
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                RideLockr addresses the modern problem of motorcycle theft. We
                provide security, live tracking, and vehicle control through
                modern technology.
              </p>
              <p className="text-gray-500 text-base md:text-lg">
                Our mission is to empower riders with real-time GPS tracking and
                anti-theft alerts, ensuring brand credibility and customer
                safety.
              </p>
            </div>

            <div className="about-element pt-10 flex gap-12 border-t border-white/5">
              <div>
                <p className="text-4xl font-black text-white italic uppercase">
                  GPS
                </p>
                <p className="text-[#39FF14] text-[10px] font-bold uppercase tracking-widest mt-1">
                  Live Tracking
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-white italic uppercase">
                  IoT
                </p>
                <p className="text-[#39FF14] text-[10px] font-bold uppercase tracking-widest mt-1">
                  Smart Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
