"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", interest: "Bath Mats", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-linen-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-500 mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal-800 leading-tight mb-6">
              Start Your
              <br />
              <em className="not-italic text-gold-500">Partnership</em>
            </h2>
            <div className="gold-divider mb-8" />

            <p className="font-sans text-base text-charcoal-700/60 leading-relaxed mb-10 max-w-sm">
              Whether you're a global retailer, interior designer, or hospitality brand —
              we'd love to discuss your requirements and share our latest catalogue.
            </p>

            {/* Contact details */}
            {[
              { label: "Export Office",  value: "Panipat, Haryana, India – 132103" },
              { label: "Email",          value: "exports@abhiasmi.com" },
              { label: "WhatsApp",       value: "+91 98765 43210" },
              { label: "Certifications", value: "OEKO-TEX · ISO 9001 · GOTS" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 mb-5">
                <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500 w-28 pt-0.5 flex-shrink-0">
                  {label}
                </span>
                <span className="font-sans text-sm text-charcoal-700">{value}</span>
              </div>
            ))}
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="bg-cream-50 border border-gold-300/30 p-8 shadow-gold"
          >
            {submitted ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="text-4xl block mb-4">✦</span>
                <h3 className="font-serif text-2xl text-charcoal-800 mb-2">Thank You</h3>
                <p className="font-sans text-sm text-charcoal-700/60">
                  Our export team will reach out within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name",    label: "Full Name",    placeholder: "Your name" },
                    { key: "company", label: "Company",      placeholder: "Your company" },
                  ].map(({ key, label, placeholder }) => (
                    <div key={key}>
                      <label className="block font-sans text-[10px] tracking-[0.4em] uppercase text-charcoal-700/60 mb-2">
                        {label}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full px-4 py-3 bg-cream-100 border border-gold-300/30 font-sans text-sm
                                   text-charcoal-800 placeholder-charcoal-700/30 focus:outline-none
                                   focus:border-gold-500 transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-[0.4em] uppercase text-charcoal-700/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-cream-100 border border-gold-300/30 font-sans text-sm
                               text-charcoal-800 placeholder-charcoal-700/30 focus:outline-none
                               focus:border-gold-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-[0.4em] uppercase text-charcoal-700/60 mb-2">
                    Interested In
                  </label>
                  <select
                    value={form.interest}
                    onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                    className="w-full px-4 py-3 bg-cream-100 border border-gold-300/30 font-sans text-sm
                               text-charcoal-800 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  >
                    {["Bath Mats", "Rugs", "Throws", "Curtains", "Full Catalogue", "Custom / OEM"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-[0.4em] uppercase text-charcoal-700/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-cream-100 border border-gold-300/30 font-sans text-sm
                               text-charcoal-800 placeholder-charcoal-700/30 focus:outline-none
                               focus:border-gold-500 transition-colors duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-cream-50 font-sans text-sm
                             font-medium tracking-widest uppercase transition-all duration-300 shadow-gold"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Enquiry →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
