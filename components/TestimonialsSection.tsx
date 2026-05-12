"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Abhiasmi's bath mats are consistently the highest-rated product in our home category. The quality — weight, pile density, colour fastness — is impeccable at their price point.",
    author: "Sarah K.",
    role:   "Senior Buyer",
    company:"Nordstrom Home, USA",
    flag:   "🇺🇸",
  },
  {
    quote: "We have been sourcing from the Paliwal Group for over 14 years. Their commitment to sustainable yarn sourcing and their design agility makes them our most valued Indian partner.",
    author: "Klaus M.",
    role:   "Head of Procurement",
    company:"DEPOT GmbH, Germany",
    flag:   "🇩🇪",
  },
  {
    quote: "The woven throws for our autumn collection exceeded every expectation. The herringbone pattern, the hand-feel, the packaging — all premium. Our customers keep asking for them.",
    author: "Yuki T.",
    role:   "Category Director",
    company:"Francfranc, Japan",
    flag:   "🇯🇵",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 lg:py-32 linen-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-linen-pattern opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="font-sans text-xs tracking-[0.5em] uppercase text-gold-500 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Global Partners
        </motion.p>
        <motion.h2
          className="font-serif text-4xl sm:text-5xl text-charcoal-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by the World's
          <br />
          <em className="not-italic text-gold-500">Finest Retailers</em>
        </motion.h2>

        {/* Testimonial carousel */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold-400/30 leading-none select-none">"</span>

              <p className="font-serif text-xl sm:text-2xl text-charcoal-700 leading-relaxed max-w-2xl mx-auto -mt-4 mb-8 italic">
                {testimonials[current].quote}
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="gold-divider" />
                <div className="text-center">
                  <p className="font-sans text-sm font-semibold text-charcoal-800">
                    {testimonials[current].flag} {testimonials[current].author}
                  </p>
                  <p className="font-sans text-xs text-charcoal-700/50 mt-0.5">
                    {testimonials[current].role} · {testimonials[current].company}
                  </p>
                </div>
                <div className="gold-divider" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot nav */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-1.5 bg-gold-500"
                  : "w-1.5 h-1.5 bg-charcoal-700/20 hover:bg-gold-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
