import React from "react";

const AppShowcase = () => {
  return (
    <section className="relative py-24 px-6 bg-[#050505] overflow-hidden text-white">
      <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-[#39FF14]/10 blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
             <h2 className="text-[#39FF14] text-sm font-black uppercase tracking-[0.35em] mb-3">
            Mobile App Showcase
          </h2>
            <h2 className="section-title text-4xl md:text-6xl">
              Your Bike&apos;s Security <br />
              <span className="text-[#39FF14]">In Your Pocket</span>
            </h2>
            <p className="section-sub max-w-2xl">
              The RideLockr app puts complete control at your fingertips — live
              GPS, instant theft alerts, and remote engine kill, all from one
              sleek dashboard.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🗺️",
                  title: "Live GPS Map",
                  desc: "Track your motorcycle in real-time on an interactive map from anywhere.",
                },
                {
                  icon: "🚨",
                  title: "Instant Theft Alerts",
                  desc: "Push notifications the moment unauthorized movement is detected.",
                },
                {
                  icon: "🔒",
                  title: "Remote Immobilizer",
                  desc: "Cut the engine remotely with a single tap from the dashboard.",
                },
                {
                  icon: "📍",
                  title: "Geo-fence Zones",
                  desc: "Set virtual boundaries and get alerted when your bike crosses them.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:border-[#39FF14]/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#39FF14]/10 text-[#39FF14] text-xl">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-black text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2.5rem] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl">
              <div className="border-b border-white/10 px-6 py-4 text-sm uppercase tracking-[0.35em] text-gray-500">
                Live Track
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
                  <span>Live GPS path</span>
                  <span className="h-3 w-3 rounded-full bg-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.35)]" />
                </div>
                <div
                  className="relative overflow-hidden rounded-[2rem] bg-[#061105] p-6"
                  style={{ minHeight: 320 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.07),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.05),transparent_40%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="grid gap-3 text-xs text-gray-300">
                      <div className="rounded-2xl bg-white/5 p-3">
                        Live GPS path detected
                      </div>
                      <div className="rounded-2xl bg-white/5 p-3">
                        Secure connection active
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <div className="rounded-3xl bg-[#000000]/40 p-4">
                        <div className="text-3xl font-black text-white">
                          24.8
                        </div>
                        <div className="text-xs uppercase tracking-[0.35em] text-gray-400">
                          km/h
                        </div>
                      </div>
                      <div className="rounded-3xl bg-[#000000]/40 p-4 grid gap-1">
                        <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                          Engine
                        </span>
                        <span className="text-sm text-[#39FF14]">ON</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl">
              <div className="border-b border-white/10 px-6 py-4 text-sm uppercase tracking-[0.35em] text-gray-500">
                Alert Panel
              </div>
              <div className="p-6">
                <div className="rounded-[2rem] bg-[#111111] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                  <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-[#39FF14]">
                    <span className="h-3 w-3 rounded-full bg-[#39FF14]" />
                    MOTION DETECTED
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Unauthorized movement at 02:14 AM — Sector G-11
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#39FF14] px-5 py-3 text-sm font-black uppercase tracking-[0.28em] text-black transition hover:bg-[#32e010]">
                    🔒 IMMOBILIZE NOW
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "Geo-fence", value: "Zone Active" },
                    { label: "Last Trip", value: "12.4 km • 34 min" },
                    { label: "Notifications", value: "3 unread alerts" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="text-xl">
                        {item.label === "Geo-fence"
                          ? "📍"
                          : item.label === "Last Trip"
                            ? "🛣️"
                            : "🔔"}
                      </span>
                      <div>
                        <div className="text-sm text-gray-400">
                          {item.label}
                        </div>
                        <div className="text-sm text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
