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
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#050505] overflow-hidden text-white"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#39FF14]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.35em] text-[#39FF14] mb-3">
              <MessageSquare size={16} /> Contact Us
            </span>
            <h2 className="section-title text-4xl mb-6 leading-tight">
              Ready to Secure <br /> Your Ride?
            </h2>
            <p className="section-sub mt-0 mb-8 max-w-md">
              Have questions about installation, fleet pricing, or device
              specifications? Drop us a message and our technical team will
              reach out within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#39FF14]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.35em] text-gray-500 font-semibold">
                    Email Us
                  </h4>
                  <p className="text-white font-medium">
                    support@ridelockr.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#39FF14]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.35em] text-gray-500 font-semibold">
                    Call Support
                  </h4>
                  <p className="text-white font-medium">+1 (555) 019-2834</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.25)]">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center gap-4 text-center py-12"
                >
                  <CheckCircle size={56} className="text-[#39FF14]" />
                  <h3 className="text-2xl font-black text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for contacting RideLockr. We will look over your
                    query right away.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-400">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-white outline-none transition focus:border-[#39FF14]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-400">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-white outline-none transition focus:border-[#39FF14]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your tracking needs..."
                      className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-white outline-none transition focus:border-[#39FF14] resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#39FF14] px-6 py-4 text-sm font-black uppercase tracking-[0.35em] text-black transition shadow-[0_20px_60px_rgba(57,255,20,0.25)]"
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
