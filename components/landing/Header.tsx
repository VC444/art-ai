import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Artzie</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#examples"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Examples
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <Button variant="default" asChild>
            <Link href="/app">Get Started</Link>
          </Button>
        </div>
        <Button variant="outline" size="icon" className="md:hidden">
          <Wand2 className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};
