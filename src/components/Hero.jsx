import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Registering the plugin for that typewriter effect
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // RideLockr Style Reveal
      tl.from(".hero-element", {
        opacity: 0,
        y: 50,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.15,
        ease: "expo.out",
        clearProps: "transform"
      })
      
      // The Typing Effect for the new Motto
      .fromTo(taglineRef.current, 
        { width: "0%" }, 
        { 
          width: "100%", 
          duration: 1.5, 
          ease: "steps(40)",
        }, "-=0.4"
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden font-sans">
      
      {/* Background with Neon Glow Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        {/* Neon Green Glow Spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/5 blur-[120px] rounded-full z-0"></div>
        
        {/* Placeholder for your motorcycle/tech background image */}
        <img 
          src="/ridelockr-bg.jpg" 
          alt="RideLockr Smart Security" 
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.target.style.display = 'none'; // Fallback if image not found
          }}
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-7xl">
        {/* Main Branding - Neon Green Accents */}
        <h1 className="hero-element text-6xl md:text-[9rem] font-black text-white tracking-tighter mb-4 uppercase italic leading-none">
          Ride<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#16650d] drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">Lockr</span>
        </h1>

        {/* Typing Tagline Section */}
        <div className="hero-element inline-block mb-8">
          <div className="overflow-hidden border-r-4 border-[#39FF14] pr-3" ref={taglineRef} style={{ whiteSpace: 'nowrap' }}>
            <h2 className="text-xl md:text-4xl font-bold text-white tracking-tight py-1 uppercase">
              "Security That Never Sleeps"
            </h2>
          </div>
        </div>

        {/* Product Description */}
        <p className="hero-element text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-medium tracking-tight leading-relaxed">
          The next generation of IoT-powered motorcycle security. Real-time GPS tracking, 
          remote control, and anti-theft protection at your fingertips.
        </p>

        {/* Action Buttons - Premium Neon Style */}
        <div className="hero-element flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
          <button className="group relative px-14 py-5 bg-[#39FF14] text-black text-base font-black rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] active:scale-95 z-30 uppercase tracking-widest">
            <span className="relative z-10">Pre-Order Now</span>
          </button>
          
          <button className="px-14 py-5 border-2 border-white/10 text-white text-base font-bold rounded-full hover:bg-white/5 backdrop-blur-xl transition-all active:scale-95 z-30 uppercase tracking-widest">
            Explore Features
          </button>
        </div>
      </div>

      {/* Modern Scroll Indicator with Neon Tint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 flex flex-col items-center gap-2">
        <span className="text-[10px] text-[#39FF14] uppercase tracking-[0.3em] font-bold">Secure</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#39FF14] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;