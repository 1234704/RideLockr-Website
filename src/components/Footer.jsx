const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              Ride<span className="text-[#39FF14]">Lockr</span>
            </span>
          </div>
          <p className="max-w-md text-sm text-gray-300">
            IoT-powered anti-theft & smart tracking for the modern motorcycle.
          </p>
          <div className="rounded-3xl border border-white/[0.08] bg-white/5 p-5 text-sm text-gray-300">
            The secure, connected solution built for riders who want total
            confidence on every ride.
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="font-medium text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Product
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#features" className="hover:text-[#39FF14] transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#39FF14] transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#app" className="hover:text-[#39FF14] transition">
                Mobile app
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-medium text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Company
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-[#39FF14] transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#39FF14] transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#39FF14] transition">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/5 p-6">
            <div>
              <div className="font-medium text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
                Stay in the loop
              </div>
              <p className="text-sm text-gray-300">
                Get launch updates, security alerts, and rider-first product
                news.
              </p>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#39FF14] px-5 py-3 text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(57,255,20,0.25)] transition hover:bg-[#55ff3c]"
              onClick={() => (window.location.href = "/contact")}
            >
              Join waitlist
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 border-t border-white/[0.08] pt-6 text-xs text-gray-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} RideLockr. All rights reserved.</div>
        <div className="font-mono">
          Built for riders. Engineered for security.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
