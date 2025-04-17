"use client";

import { Button } from "@/components/ui/button";
import { Wand2, Zap, Image as ImageIcon, Share2 } from "lucide-react";
import { Examples } from "./Examples";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-b from-violet-50 via-white to-blue-50">
      <Header />

      <Hero />

      <Features />

      <Examples />

      <Testimonials />

      <Pricing />

      <CTA />

      <Footer />
    </div>
  );
}
