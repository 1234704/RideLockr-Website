import { motion } from 'framer-motion';
import heroDashboardImg from '../assets/hero-dashboard.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#050505] text-white px-6 pt-24 md:pt-16 overflow-hidden">
      
     
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
          
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white uppercase select-none"
            >
              RideLockr <span className="block font-normal lowercase italic text-xl md:text-2xl tracking-normal text-gray-400 mt-1 normal-case">IoT-powered</span>
              <span className="block text-[#39FF14] mt-1 italic tracking-tight">smart motorcycle</span> 
              <span className="block tracking-tight">anti-theft system.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-gray-400 text-xs md:text-sm leading-relaxed font-medium max-w-xl"
            >
              Every day, thousands of motorcycle owners face the constant anxiety of vehicle theft. 
              We bridge the gap between traditional locks and cutting-edge hardware security, 
              giving you absolute mobile control over your ride anytime, anywhere.
            </motion.p>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#39FF14] text-black font-extrabold text-[11px] uppercase tracking-widest rounded-full hover:bg-[#32e010] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all duration-300 group">
                Watch Demo 
                <span className="flex items-center justify-center w-4 h-4 rounded-full border border-black/20 text-[9px] font-bold group-hover:translate-x-0.5 transition-transform">
                  ▶
                </span>
              </button>
            </motion.div>

          </div>

          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 w-full flex justify-center lg:justify-end relative"
          >
            
            <div className="absolute -inset-1.5 bg-[#39FF14]/10 rounded-[2.5rem] blur-xl opacity-40 pointer-events-none" />

            
            <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden bg-[#0d0d0d] shadow-2xl aspect-[4/3] w-full max-w-3xl">
              <img 
                src={heroDashboardImg} 
                alt="RideLockr Ecosystem Interface Dashboard" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;