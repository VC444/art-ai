import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Photos?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          See your photos in a whole new light — transform them with AI in
          seconds.
        </p>
        <Button size="lg" variant="secondary" className="text-lg">
          <Link href="/app">Get Started Now</Link>
        </Button>
      </div>
    </section>
  );
};
