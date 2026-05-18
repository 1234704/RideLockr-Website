import React, { useState } from "react";
// Note: Coordinate with Ali to use the exact Lucide icons he sets up
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="py-24 bg-brandDark relative overflow-hidden"
    >
      {/* Decorative background glow to match the tech startup theme */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-neonBlue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Column (5 Cols Wide) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-neonGreen text-sm font-semibold tracking-wider uppercase mb-3 flex items-center gap-2">
              <MessageSquare size={16} /> Contact Us
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Ready to Secure <br />
              Your Ride?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Have questions about installation, fleet pricing, or device
              specifications? Drop us a message and our technical team will
              reach out within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brandCard flex items-center justify-center border border-gray-800 text-neonBlue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Email Us
                  </h4>
                  <p className="text-gray-200 font-medium">
                    support@ridelockr.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brandCard flex items-center justify-center border border-gray-800 text-neonGreen">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Call Support
                  </h4>
                  <p className="text-gray-200 font-medium">+1 (555) 019-2834</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (7 Cols Wide) */}
          <div className="lg:col-span-7">
            <div className="bg-brandCard/60 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-800/80 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-brandDark/80 border border-gray-700/60 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neonBlue transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-brandDark/80 border border-gray-700/60 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neonBlue transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full bg-brandDark/80 border border-gray-700/60 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                    placeholder="Tell us about your tracking needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neonGreen to-neonBlue text-brandDark font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.2)]"
                >
                  <span>Send Secure Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
