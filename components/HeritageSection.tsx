"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const milestones = [
  {
    year: "1978",
    title: "The First Loom",
    body:  "Shri Ram Paliwal sets up the first handloom unit in Panipat with 12 weavers and a vision to export Indian craft to the world.",
  },
  {
    year: "1988",
    title: "First Export Order",
    body:  "A landmark 50,000-piece order from a German home goods chain opens the doors to Europe and validates the Paliwal quality standard.",
  },
  {
    year: "1998",
    title: "ISO 9001 Certified",
    body:  "Investment in modern finishing plants and quality systems earns international certification — a first among Panipat textile exporters.",
  },
  {
    year: "2005",
    title: "Abhiasmi Brand Born",
    body:  "The premium consumer-facing brand Abhiasmi is launched, bringing artisanal heritage directly to retail across North America and Japan.",
  },
  {
    year: "2015",
    title: "Sustainable Weaving",
    body:  "100% recycled-cotton and OEKO-TEX certified yarns adopted across all product lines as part of the Green Loom initiative.",
  },
  {
    year: "Today",
    title: "Global Heritage",
    body:  "40+ countries, 200+ SKUs, and three generations of the Paliwal family continue to weave quality into every thread.",
  },
];

export default function HeritageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="heritage"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-charcoal-900 overflow-hidden grain-overlay"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1600&q=60')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/80 to-charcoal-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image with parallax */}
          <motion.div
            className="relative h-[500px] lg:h-[700px] overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="absolute inset-0 will-change-transform"
              style={{ y: imageY }}
            >
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85"
                alt="Heritage loom"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Gold frame accent */}
            <div className="absolute inset-4 border border-gold-500/30 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-gold-400/50" />

            {/* Floating stat */}
            <div className="absolute top-8 right-8 bg-charcoal-900/90 backdrop-blur-sm px-5 py-4 border-l-2 border-gold-500">
              <p className="font-serif text-3xl text-gold-400">45+</p>
              <p className="font-sans text-[11px] tracking-wider uppercase text-cream-300/70 mt-1">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-400 mb-4">
                The Paliwal Legacy
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-cream-100 leading-tight mb-4">
                Four Decades of
                <br />
                <em className="not-italic text-gold-400">Artisan Excellence</em>
              </h2>
              <div className="gold-divider mb-8" />
            </motion.div>

            {/* Timeline items */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 timeline-line" />

              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full border-2 border-gold-500 bg-charcoal-900" />

                  <div className="flex items-start gap-4">
                    <span className="font-serif text-gold-500/80 text-sm font-semibold w-10 flex-shrink-0 pt-0.5">
                      {m.year}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-cream-200 font-medium mb-1">{m.title}</h3>
                      <p className="font-sans text-sm text-cream-300/60 leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
