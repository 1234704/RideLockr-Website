import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brandDark text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Info & Socials */}
        <div>
          <h2>Get in Touch</h2>
          <p>Have questions about RideLockr? Reach out to our team.</p>
          <div className="space-y-4 mt-6">
            <p>📧 support@ridelockr.com</p>
            <p>📞 +1 (555) 019-2834</p>
          </div>
        </div>

        {/* Right Side: Form Wireframe */}
        <div className="bg-brandCard p-8 rounded-xl">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 bg-brandDark rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 bg-brandDark rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mb-4 p-3 bg-brandDark rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-neonGreen text-black font-bold rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
