"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import HeritageSection from "@/components/HeritageSection";
import GlobalReach from "@/components/GlobalReach";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThreadLoader from "@/components/ThreadLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <ThreadLoader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main className="relative overflow-x-hidden">
          <Navigation />
          <HeroSection />
          <ProductCategories />
          <HeritageSection />
          <CraftsmanshipSection />
          <GlobalReach />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
