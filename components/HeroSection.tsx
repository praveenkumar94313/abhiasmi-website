"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y      = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden grain-overlay"
    >
      {/* Ken Burns background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-[kenBurns_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=90')`,
          }}
        />
        {/* Colour grade overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/70 via-charcoal-900/40 to-navy-800/50" />
        {/* Bottom fade to body colour */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream-50 to-transparent" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="font-sans text-xs tracking-[0.5em] uppercase text-gold-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Paliwal Group · Est. 1978
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] text-cream-100 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Woven with{" "}
          <em className="not-italic gold-shimmer">Tradition</em>
          <br />
          Crafted for the World
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="mt-6 font-sans text-base sm:text-lg text-cream-300/80 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          Premium home textiles — bath mats, rugs, throws & curtains — exported
          to over 40 countries with generational craftsmanship.
        </motion.p>

        {/* CTA group */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#collections"
            className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-cream-50 font-sans text-sm font-medium
                       tracking-widest uppercase transition-all duration-300 shadow-gold hover:shadow-card-hover"
          >
            Explore Collections
          </a>
          <a
            href="#heritage"
            className="px-8 py-3.5 border border-cream-200/40 hover:border-gold-400 text-cream-200
                       hover:text-gold-300 font-sans text-sm font-medium tracking-widest uppercase
                       transition-all duration-300 backdrop-blur-sm"
          >
            Our Heritage
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream-300/50">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Floating stats bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 hidden lg:flex justify-center gap-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {[
          { num: "40+",  label: "Export Markets" },
          { num: "45+",  label: "Years of Craft" },
          { num: "200+", label: "SKU Varieties" },
          { num: "100%", label: "Natural Fibres" },
        ].map(({ num, label }, i) => (
          <div
            key={i}
            className="flex-1 max-w-[200px] py-5 px-6 bg-cream-50/90 backdrop-blur-sm border-r border-gold-300/20 last:border-r-0
                       flex flex-col items-center text-center"
          >
            <span className="font-serif text-2xl text-gold-500">{num}</span>
            <span className="font-sans text-[11px] tracking-wider uppercase text-charcoal-700/60 mt-1">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
