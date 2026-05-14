import { User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ease-in-out bg-transparent border-b border-transparent hover:bg-[#050505]/90 hover:backdrop-blur-xl hover:border-[#39FF14]/10">
      
      {/* Branding Section */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-[#39FF14] to-[#16650d] rounded-xl flex items-center justify-center shadow-lg shadow-[#39FF14]/20 group-hover:rotate-12 transition-transform">
          <span className="text-black font-black text-xl tracking-tighter">R</span>
        </div>
        <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
          Ride<span className="text-[#39FF14]">Lockr</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-[11px] font-bold text-white uppercase tracking-[0.2em] hover:text-[#39FF14] transition-colors">Home</a>
        
        {/* Platform Dropdown */}
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Features</span>
          <ChevronDown size={12} className="text-gray-500 group-hover:text-[#39FF14]" />
        </div>

        {/* Updated About Us Link to point to the section */}
        <a href="#about" className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#39FF14] transition-colors">
          About Us
        </a>
        
        {/* User & Action Buttons */}
        <div className="flex items-center gap-8 ml-4 border-l border-white/10 pl-10">
          <button className="text-gray-400 hover:text-[#39FF14] transition-colors">
            <User size={18} strokeWidth={2.5} />
          </button>
          
          <button className="px-7 py-2.5 bg-[#39FF14] text-black text-[10px] font-black rounded-full hover:scale-105 transition-all shadow-lg shadow-[#39FF14]/20 uppercase tracking-widest">
            Pre-Order
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;