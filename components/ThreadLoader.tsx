"use client";

import { motion } from "framer-motion";

export default function ThreadLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-charcoal-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Thread-winding SVG animation */}
      <div className="relative w-24 h-24 mb-8">
        {/* Bobbin body */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 80 80" className="w-20 h-20">
            {/* Spool flanges */}
            <ellipse cx="40" cy="12" rx="28" ry="6" fill="#B8935A" opacity="0.9" />
            <ellipse cx="40" cy="68" rx="28" ry="6" fill="#B8935A" opacity="0.9" />
            {/* Spool core */}
            <rect x="28" y="12" width="24" height="56" rx="4" fill="#9D7A45" />
            {/* Thread wound on core */}
            <ellipse cx="40" cy="20" rx="12" ry="2" fill="none" stroke="#EDE0C4" strokeWidth="1.5" opacity="0.6" />
            <ellipse cx="40" cy="28" rx="14" ry="2.5" fill="none" stroke="#EDE0C4" strokeWidth="1.5" opacity="0.7" />
            <ellipse cx="40" cy="36" rx="15" ry="2.5" fill="none" stroke="#F5EDD9" strokeWidth="2" opacity="0.9" />
            <ellipse cx="40" cy="44" rx="15" ry="2.5" fill="none" stroke="#F5EDD9" strokeWidth="2" opacity="0.9" />
            <ellipse cx="40" cy="52" rx="14" ry="2.5" fill="none" stroke="#EDE0C4" strokeWidth="1.5" opacity="0.7" />
            <ellipse cx="40" cy="60" rx="12" ry="2" fill="none" stroke="#EDE0C4" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Orbiting thread dot */}
        <motion.div
          className="absolute"
          style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-2 h-2 rounded-full bg-gold-300"
            style={{ marginLeft: "32px", marginTop: "0px" }}
          />
        </motion.div>
      </div>

      {/* Animated progress thread line */}
      <div className="w-48 h-px bg-charcoal-700 relative overflow-hidden mb-6">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
          initial={{ width: "0%", x: "0%" }}
          animate={{ width: ["0%", "100%", "100%"], x: ["0%", "0%", "100%"] }}
          transition={{
            duration: 2.6,
            times: [0, 0.7, 1],
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.p
        className="font-serif text-cream-200 text-sm tracking-[0.35em] uppercase opacity-60"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Weaving your experience
      </motion.p>

      <p className="mt-3 text-gold-400 font-sans text-xs tracking-widest uppercase">
        Abhiasmi International
      </p>
    </motion.div>
  );
}
