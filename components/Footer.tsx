"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Collections: ["Bath Mats", "Rugs & Dhurries", "Throws & Blankets", "Curtains & Drapes", "Cushions & Covers"],
  Company:     ["Our Heritage", "Craftsmanship", "Sustainability", "Certifications"],
  Exports:     ["Global Reach", "Wholesale Enquiry", "OEM / Private Label", "Download Catalogue"],
  Connect:     ["Contact Us", "WhatsApp", "LinkedIn", "Instagram"],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <p className="font-serif text-xl text-gold-400 leading-none">Abhiasmi</p>
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-cream-300/40 mt-1">
                International · Paliwal Group
              </p>
            </div>
            <p className="font-sans text-xs text-cream-300/50 leading-relaxed mb-6 max-w-[200px]">
              Woven with tradition. Crafted for the world. Est. 1978, Panipat, India.
            </p>
            <div className="flex gap-3">
              {["OEKO-TEX", "ISO 9001"].map(cert => (
                <span key={cert} className="font-sans text-[9px] tracking-wide uppercase px-2 py-1 border border-gold-500/30 text-gold-400/70">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-400/70 mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-xs text-cream-300/50 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream-300/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-cream-300/30">
            © 2025 Abhiasmi International. All rights reserved. A Paliwal Group Company.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Export Policy"].map(link => (
              <a key={link} href="#" className="font-sans text-[11px] text-cream-300/30 hover:text-gold-400/60 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large watermark text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
        <p className="font-serif text-[8rem] lg:text-[12rem] font-bold text-cream-50/[0.025] leading-none translate-y-8">
          Abhiasmi
        </p>
      </div>
    </footer>
  );
}
