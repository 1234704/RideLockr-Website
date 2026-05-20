import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; 
const Navbar = () => {
  const location = useLocation(); 

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.05] px-6 py-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        
        
        <Link to="/" className="flex items-center gap-2 select-none cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
          <span className="text-xl font-black tracking-tighter uppercase italic text-white">
            Ride<span className="text-[#39FF14]">Lockr</span>
          </span>
        </Link>

        
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-gray-400">
          

    
  
          {(() => {
            const pathname = location.pathname;
            const navItemClass = (toPath) =>
              pathname === toPath ? "text-[#39FF14] hover:text-[#39FF14] transition-colors" : "hover:text-white transition-colors";

            return (
              <>
                <Link to="/about" className={navItemClass("/about")}>About</Link>
                <Link to="/features" className={navItemClass("/features")}>Features</Link>
                <Link to="/how-it-works" className={navItemClass("/how-it-works")}>How it Works</Link>
                <Link to="/customers" className={navItemClass("/customers")}>Customers</Link>
                <Link to="/app" className={navItemClass("/app")}>App</Link>
                <Link to="/pricing" className={navItemClass("/pricing")}>Pricing</Link>
                <Link to="/testimonials" className={navItemClass("/testimonials")}>Testimonials</Link>
              </>
            );
          })()}



          {/* <a href="/#features" className="hover:text-white transition-colors">Features</a>
          <a href="/#" className="hover:text-white transition-colors">How it Works</a>
          <a href="/#" className="hover:text-white transition-colors">App</a>
          <a href="/#" className="hover:text-white transition-colors"></a>
          <a href="/#" className="hover:text-white transition-colors">How it Works</a> */}
          
        </div>

        
        <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300"
         onClick={() => window.location.href = '/contact'}>
          Get Secure
        </button>
      </div>
    </motion.nav>
  )
};

export default Navbar;