import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gift, ImageIcon, Share2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FreeCreditBanner } from "./FreeCreditBanner";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-violet-100 via-white to-blue-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transform Your
              <br />
              Photos Into
              <br />
              <span className="text-primary">Stunning Art</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Choose from a variety of artistic styles like Ghibli in just a few
              clicks.
            </p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-black">
              <Gift className="h-4 w-4" />
              <span>New users receive 1 free credit to try any style!</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/app">Get Started</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg group"
                asChild
              >
                <Link href="#examples">
                  See Examples
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-start">
                  <Check className="h-5 w-5 text-primary mb-2" />
                  <p className="text-sm font-medium">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-medium mb-2">Original Image</p>
                  <AspectRatio ratio={2.5 / 3}>
                    <Image
                      src="/pixar-convert.jpg"
                      alt="Original"
                      className="object-cover rounded-md"
                      style={{ objectPosition: "left 30% top 0" }}
                      fill
                      priority
                    />
                  </AspectRatio>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Transformed Image</p>
                  <AspectRatio ratio={2.5 / 3}>
                    <Image
                      src="/pixar.png"
                      alt="Transformed"
                      className="object-cover rounded-md"
                      style={{ objectPosition: "left 0 top 0" }}
                      fill
                      priority
                    />
                  </AspectRatio>
                </div>
              </div>
              <p className="text-sm text-center mt-4 text-muted-foreground">
                Pixar Style
              </p>
              <Button variant="outline" className="w-full mt-4">
                <Link href="#examples">Try Different Style</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "High-resolution outputs",
    description: "Get crystal clear transformations that preserve every detail",
    icon: Zap,
  },
  {
    title: "Multiple art styles",
    description: "Choose from a variety of unique artistic styles",
    icon: ImageIcon,
  },
  {
    title: "Instant results",
    description: "Transform your photos in seconds with our advanced AI",
    icon: Share2,
  },
];
