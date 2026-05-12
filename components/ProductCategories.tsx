"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id:       "bath-mats",
    title:    "Bath Mats",
    subtitle: "Luxury Underfoot",
    material: "100% Organic Cotton",
    weave:    "Loop-Pile Tufted",
    gsm:      "1200 GSM",
    image:    "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=85",
    accent:   "from-[#8B6914] to-[#B8935A]",
    tag:      "Bestseller",
  },
  {
    id:       "rugs",
    title:    "Rugs",
    subtitle: "Art for Every Floor",
    material: "Hand-Woven Jute & Cotton",
    weave:    "Flatweave / Kilim",
    gsm:      "900 GSM",
    image:    "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=85",
    accent:   "from-[#1E2A3A] to-[#2E4060]",
    tag:      "Artisan",
  },
  {
    id:       "throws",
    title:    "Throws",
    subtitle: "Draped in Warmth",
    material: "Recycled Cotton Blend",
    weave:    "Herringbone Twill",
    gsm:      "400 GSM",
    image:    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85",
    accent:   "from-[#4A3728] to-[#7A5C42]",
    tag:      "Eco",
  },
  {
    id:       "curtains",
    title:    "Curtains",
    subtitle: "Light, Perfected",
    material: "Linen & Cotton Blend",
    weave:    "Plain & Dobby Weave",
    gsm:      "220 GSM",
    image:    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85",
    accent:   "from-[#2C3E50] to-[#4A6FA5]",
    tag:      "Custom",
  },
  {
    id:       "cushions",
    title:    "Cushions",
    subtitle: "Comfort, Elevated",
    material: "100% Cotton & Velvet",
    weave:    "Jacquard & Embroidered",
    gsm:      "350 GSM",
    image:    "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?w=800&q=85",
    accent:   "from-[#5C4033] to-[#8D6E63]",
    tag:      "New",
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 60, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="product-card group"
    >
      {/* Tag */}
      <div className="absolute top-4 left-4 z-20">
        <span className="font-sans text-[10px] tracking-[0.35em] uppercase px-3 py-1 bg-cream-50/90 text-gold-600 backdrop-blur-sm">
          {product.tag}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-[420px] lg:h-[520px] overflow-hidden bg-cream-200">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Hover overlay with material details */}
        <div className="product-overlay group-hover:opacity-100">
          <motion.div
            className="text-cream-100"
            initial={false}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-300 mb-2">
              Material Details
            </p>
            <p className="font-serif text-lg font-medium mb-1">{product.material}</p>
            <div className="gold-divider mb-3" />
            <div className="flex gap-4 text-xs font-sans text-cream-300/80">
              <span>{product.weave}</span>
              <span className="text-gold-400">·</span>
              <span>{product.gsm}</span>
            </div>
            <motion.button
              className="mt-4 px-4 py-2 border border-gold-400/60 text-gold-300 text-[11px] tracking-widest uppercase
                         hover:bg-gold-500 hover:text-cream-50 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              View Range →
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5 bg-cream-50 border-b border-gold-300/20">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-charcoal-700/50 mb-1">
          {product.subtitle}
        </p>
        <h3 className="font-serif text-2xl font-medium text-charcoal-800">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <span className="font-sans text-xs text-charcoal-700/60">{product.material}</span>
          <span className="text-gold-500 text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCategories() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="collections" className="py-24 lg:py-32 linen-bg relative overflow-hidden">
      {/* Background weave texture */}
      <div className="absolute inset-0 bg-weave-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-500 mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-800 leading-tight">
            Crafted for Every
            <br />
            <em className="not-italic text-gold-500">Corner of Your Home</em>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 font-sans text-base text-charcoal-700/60 max-w-lg mx-auto leading-relaxed">
            Each collection is born from a dialogue between ancient loom traditions and
            contemporary design sensibilities.
          </p>
        </motion.div>

        {/* Product grid — mobile 1col, tablet 2col, desktop first-row 3col second-row 2col */}
        {/* Row 1: 3 cards | Row 2: 2 cards centred via col-start offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {products.map((product, i) => {
            // First 3 cards → span 2 each (fills 6 cols)
            // Last 2 cards → span 3 each (fills 6 cols), centred
            const spanClass =
              i < 3
                ? "lg:col-span-2"
                : i === 3
                ? "lg:col-span-3"
                : "lg:col-span-3";
            return (
              <div key={product.id} className={`col-span-1 sm:col-span-1 ${spanClass}`}>
                <ProductCard product={product} index={i} />
              </div>
            );
          })}
        </div>

        {/* Browse all CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase
                       text-gold-500 hover:text-gold-400 transition-colors group"
          >
            Request Full Catalogue
            <span className="w-8 h-px bg-gold-500 transition-all duration-300 group-hover:w-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
