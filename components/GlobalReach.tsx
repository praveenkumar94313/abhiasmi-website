"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Market data with approximate SVG path positions for a world-map overlay */
const markets = [
  { id: "usa",        label: "United States",  region: "North America", x: 18,  y: 38,  size: "lg", revenue: "32%" },
  { id: "canada",     label: "Canada",         region: "North America", x: 20,  y: 25,  size: "sm", revenue: "8%"  },
  { id: "germany",    label: "Germany",        region: "Europe",        x: 48,  y: 28,  size: "lg", revenue: "18%" },
  { id: "uk",         label: "United Kingdom", region: "Europe",        x: 44,  y: 25,  size: "md", revenue: "12%" },
  { id: "france",     label: "France",         region: "Europe",        x: 46,  y: 31,  size: "sm", revenue: "7%"  },
  { id: "japan",      label: "Japan",          region: "East Asia",     x: 82,  y: 35,  size: "lg", revenue: "14%" },
  { id: "australia",  label: "Australia",      region: "Oceania",       x: 78,  y: 68,  size: "md", revenue: "6%"  },
  { id: "uae",        label: "UAE",            region: "Middle East",   x: 59,  y: 44,  size: "sm", revenue: "5%"  },
];

const sizeMap = { sm: 8, md: 12, lg: 16 };
const pulseDelay = [0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1];

type Market = typeof markets[0];

export default function GlobalReach() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Market | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const hoveredMarket = markets.find(m => m.id === hovered);

  return (
    <section id="global" className="py-24 lg:py-36 bg-charcoal-900 relative overflow-hidden grain-overlay">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#B8935A 1px, transparent 1px), linear-gradient(90deg, #B8935A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-400 mb-4">
            Export Excellence
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-100 leading-tight">
            Our Global
            <br />
            <em className="not-italic text-gold-400">Footprint</em>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 font-sans text-base text-cream-300/60 max-w-lg mx-auto">
            From the looms of Panipat to living rooms across four continents —
            Abhiasmi textiles travel the world.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          ref={ref}
          className="relative w-full rounded-sm overflow-hidden border border-gold-500/10"
          style={{ paddingBottom: "50%" }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* World map SVG background (simplified vector representation) */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=60')`,
              filter: "grayscale(1) sepia(0.3)",
            }}
          />
          <div className="absolute inset-0 bg-charcoal-900/60" />

          {/* Continent label guides */}
          {[
            { label: "North America",  x: "22%", y: "30%" },
            { label: "Europe",         x: "46%", y: "22%" },
            { label: "East Asia",      x: "78%", y: "28%" },
            { label: "Oceania",        x: "76%", y: "70%" },
          ].map(g => (
            <span
              key={g.label}
              className="absolute font-sans text-[9px] tracking-[0.3em] uppercase text-cream-300/20 pointer-events-none"
              style={{ left: g.x, top: g.y }}
            >
              {g.label}
            </span>
          ))}

          {/* Market dots */}
          {markets.map((m, i) => {
            const r = sizeMap[m.size as keyof typeof sizeMap];
            const isActive = hovered === m.id || selected?.id === m.id;

            return (
              <motion.button
                key={m.id}
                className="absolute focus:outline-none"
                style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: pulseDelay[i], duration: 0.5, type: "spring" }}
                onHoverStart={() => setHovered(m.id)}
                onHoverEnd={() => setHovered(null)}
                onClick={() => setSelected(selected?.id === m.id ? null : m)}
              >
                {/* Ripple rings */}
                {[0, 1, 2].map(ring => (
                  <motion.span
                    key={ring}
                    className="absolute rounded-full bg-gold-400 pointer-events-none"
                    style={{
                      width: r * 2 + ring * 10,
                      height: r * 2 + ring * 10,
                      top: "50%", left: "50%",
                      translate: "-50% -50%",
                    }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: ring * 0.6 + pulseDelay[i],
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Core dot */}
                <motion.span
                  className="relative block rounded-full bg-gold-400 border-2 border-gold-300"
                  style={{ width: r * 2, height: r * 2 }}
                  animate={isActive ? { scale: 1.5 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Tooltip */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-cream-50 text-charcoal-800
                               px-3 py-2 shadow-card-hover whitespace-nowrap z-20 pointer-events-none"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-serif text-sm font-semibold">{m.label}</p>
                    <p className="font-sans text-[10px] text-gold-600">{m.revenue} of exports</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-cream-50" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Market breakdown cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {[
            { region: "North America", share: "40%", markets: "USA, Canada" },
            { region: "Europe",        share: "37%", markets: "Germany, UK, France, 12 more" },
            { region: "East Asia",     share: "14%", markets: "Japan, South Korea" },
            { region: "Oceania & ME",  share: "9%",  markets: "Australia, UAE" },
          ].map((r, i) => (
            <motion.div
              key={i}
              className="p-4 border border-gold-500/15 bg-cream-50/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: "rgba(184,147,90,0.4)", y: -3 }}
            >
              <p className="font-serif text-2xl text-gold-400">{r.share}</p>
              <p className="font-sans text-xs font-semibold uppercase tracking-wide text-cream-200 mt-1">{r.region}</p>
              <p className="font-sans text-[11px] text-cream-300/50 mt-1">{r.markets}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
