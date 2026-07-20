"use client";

import { Examples } from "../components/landing/Examples";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Testimonials } from "../components/landing/Testimonials";
import { Pricing } from "../components/landing/Pricing";
import { CTA } from "../components/landing/CTA";
import { Footer } from "../components/landing/Footer";
import { FAQ } from "@/components/landing/FAQ";
import { FreeCreditBanner } from "@/components/landing/FreeCreditBanner";

// test comment - 18
export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-b from-violet-50 via-white to-blue-50">
      <Header />

      <FreeCreditBanner />

      <Hero />

      <Features />

      <Examples />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />
    </div>
  );
}
