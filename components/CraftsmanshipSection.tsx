"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    icon: "◈",
    title: "Natural Fibres Only",
    body: "We source 100% certified organic cotton, jute, and linen — traceable to the farm. No synthetics compromise the luxury feel.",
  },
  {
    icon: "⌘",
    title: "Hand-Woven Heritage",
    body: "Every piece passes through the hands of skilled artisans trained in centuries-old weaving techniques passed down through families.",
  },
  {
    icon: "✦",
    title: "OEKO-TEX Certified",
    body: "All dyes and finishes meet the strictest international safety standards, making our textiles safe for every member of the family.",
  },
  {
    icon: "◎",
    title: "Custom Capabilities",
    body: "From custom colourways to bespoke dimensions — our design team works directly with retail buyers on private-label programmes.",
  },
];

export default function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-[-15%] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=1800&q=70')`,
          }}
        />
        <div className="absolute inset-0 bg-cream-50/92" />
      </motion.div>

      {/* Linen texture */}
      <div className="absolute inset-0 bg-linen-pattern opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-500 mb-4">
            Why Abhiasmi
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-800">
            The Craft Behind
            <br />
            <em className="not-italic text-gold-500">Every Thread</em>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[450px] lg:h-[600px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85"
              alt="Artisan weaving"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/30 to-transparent" />

            {/* Floating cert badge */}
            <motion.div
              className="absolute bottom-8 left-8 bg-cream-50/95 px-6 py-4 border border-gold-300/40 shadow-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold-500 mb-1">Certified by</p>
              <p className="font-serif text-xl text-charcoal-800">OEKO-TEX® Standard 100</p>
              <p className="font-sans text-xs text-charcoal-700/50 mt-1">Safe for human skin</p>
            </motion.div>
          </motion.div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="p-6 bg-cream-50/80 border border-gold-300/20 hover:border-gold-400/50
                           hover:shadow-gold transition-all duration-400 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-2xl text-gold-500 mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </span>
                <h3 className="font-serif text-xl text-charcoal-800 mb-2">{pillar.title}</h3>
                <p className="font-sans text-sm text-charcoal-700/60 leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
