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
          
         
          {location.pathname === '/about' && (
            <Link to="/" className="text-[#39FF14] hover:text-white transition-colors font-bold">
              Home
            </Link>
          )}

    
          {location.pathname !== '/about' && (
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
          )}
          
         
          <a href="/#features" className="hover:text-white transition-colors">Features</a>
          <a href="/#analytics" className="hover:text-white transition-colors">Analytics</a>
        </div>

        
        <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300">
          Get Secure
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;