import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%", 
          toggleActions: "play none none reverse",
        }
      });

    
      tl.from(".about-element", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, aboutRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="relative py-32 bg-[#050505] overflow-hidden font-sans border-t border-white/5">
      
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39FF14]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
      
          <div className="about-element relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 p-12 rounded-3xl h-[450px] flex flex-col justify-end">
              <h4 className="text-[#39FF14] text-xs font-black tracking-[0.4em] uppercase mb-6">Our Core Vision</h4>
              <p className="text-white text-3xl md:text-4xl font-light leading-snug">
                "Eliminating the threat of vehicle theft through seamless IoT integration."
              </p>
              <div className="mt-10 w-20 h-[2px] bg-[#39FF14]"></div>
            </div>
          </div>

         
          <div className="space-y-10">
            <div className="about-element inline-block px-4 py-1.5 border border-[#39FF14]/30 bg-[#39FF14]/5 rounded-full">
              <span className="text-[#39FF14] text-[10px] font-black uppercase tracking-[0.3em]">About RideLockr</span>
            </div>
            
            <h2 className="about-element text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
              Your Ride. <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Our Priority.</span>
            </h2>
            
            <div className="about-element space-y-6">
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                RideLockr addresses the modern problem of motorcycle theft. We provide security, live tracking, and vehicle control through modern technology.
              </p>
              <p className="text-gray-500 text-base md:text-lg">
                Our mission is to empower riders with real-time GPS tracking and anti-theft alerts, ensuring brand credibility and customer safety.
              </p>
            </div>

          
            <div className="about-element pt-10 flex gap-12 border-t border-white/5">
              <div>
                <p className="text-4xl font-black text-white italic uppercase">GPS</p>
                <p className="text-[#39FF14] text-[10px] font-bold uppercase tracking-widest mt-1">Live Tracking</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white italic uppercase">IoT</p>
                <p className="text-[#39FF14] text-[10px] font-bold uppercase tracking-widest mt-1">Smart Control</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;