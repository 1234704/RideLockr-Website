import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToContact = () => {
    setMenuOpen(false);
    navigate("/contact");
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const pathname = location.pathname;
  const navItemClass = (toPath) =>
    pathname === toPath
      ? "text-[#39FF14] hover:text-[#39FF14] transition-colors"
      : "hover:text-white transition-colors";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.05] px-6 py-4"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 select-none cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
            <span className="text-xl font-black tracking-tighter uppercase italic text-white">
              Ride<span className="text-[#39FF14]">Lockr</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-gray-400">
            <Link to="/about" className={navItemClass("/about")}>
              About
            </Link>
            <Link to="/features" className={navItemClass("/features")}>
              Features
            </Link>
            <Link to="/how-it-works" className={navItemClass("/how-it-works")}>
              How it Works
            </Link>
            <Link to="/customers" className={navItemClass("/customers")}>
              Customers
            </Link>
            <Link to="/app" className={navItemClass("/app")}>
              App
            </Link>
            <Link to="/pricing" className={navItemClass("/pricing")}>
              Pricing
            </Link>
            <Link to="/testimonials" className={navItemClass("/testimonials")}>
              Testimonials
            </Link>
          </div>

          {/* Desktop CTA */}
          <button
            className="hidden sm:inline-flex px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300"
            onClick={navigateToContact}
            type="button"
          >
            Get Secure
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/[0.08] hover:bg-white/10 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            />

            <motion.div
              className="absolute top-16 left-0 right-0 mx-auto w-[92%] rounded-[1.5rem] border border-white/[0.08] bg-[#050505]/95 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.6)] p-5"
              initial={{ y: -10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest text-gray-400">
                <Link
                  to="/about"
                  className={navItemClass("/about")}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className={navItemClass("/features")}
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/how-it-works"
                  className={navItemClass("/how-it-works")}
                  onClick={() => setMenuOpen(false)}
                >
                  How it Works
                </Link>
                <Link
                  to="/customers"
                  className={navItemClass("/customers")}
                  onClick={() => setMenuOpen(false)}
                >
                  Customers
                </Link>
                <Link
                  to="/app"
                  className={navItemClass("/app")}
                  onClick={() => setMenuOpen(false)}
                >
                  App
                </Link>
                <Link
                  to="/pricing"
                  className={navItemClass("/pricing")}
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/testimonials"
                  className={navItemClass("/testimonials")}
                  onClick={() => setMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </div>

              <button
                type="button"
                className="mt-6 w-full px-5 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300"
                onClick={navigateToContact}
              >
                Get Secure
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
