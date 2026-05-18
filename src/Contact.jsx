import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate API submission
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Resets form notice after 5s
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brandDark relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-neonBlue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Info with dynamic fade-in-right motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
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
          </motion.div>

          {/* Right: Form with fade-in-left motion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-brandCard/60 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-800/80 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <CheckCircle
                    size={56}
                    className="text-neonGreen mb-4 animate-pulse"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for contacting RideLockr. We will look over your
                    query right away.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-brandDark/80 border border-gray-700/60 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neonBlue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
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
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-brandDark/80 border border-gray-700/60 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                      placeholder="Tell us about your tracking needs..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-neonGreen to-neonBlue text-brandDark font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.2)] cursor-pointer"
                  >
                    <span>Send Secure Message</span>
                    <Send size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
